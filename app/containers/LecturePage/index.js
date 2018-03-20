// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { List, Map } from 'immutable';
import InfiniteScroll from 'react-infinite-scroller';

import { Creators as Actions } from './reducer';
import messages from './messages';

import EvaluationForm from './EvaluationForm';
import Rating from '../../components/Rating';
import Evaluation from './Evaluation';
import { makeSelectUser } from '../../global/selectors';
import {
  makeSelectPage,
  makeSelectLecture,
  makeSelectEvaluations,
} from './selectors';
import {
  Wrapper,
  ColumnWrapper,
  RowWrapper,
  SpaceBetween,
  Background,
  EvaluationFormModal,
  LectureNameWrapper,
  LectureName,
  ProfessorName,
  LectureScore,
  ReviewCountText,
  HitsText,
  SummaryText,
  LectureInfoText,
  EvaluationHeaderText,
  LeaveReviewButton,
  LeaveReviewText,
  CloseIcon,
} from './index.style';
import withBars from '../../services/withBars';

type Props = {
  user: Map<string, any>,
  page: Map<string, any>,
  lecture: Map<string, any>,
  evaluations: List<Map<string, any>>,
  myEvaluation: Map<string, any>,
  params: { lectureId: number },
  getLecture: (id: number) => void,
  getEvaluations: (lectureId: number, page: number) => void,
  openEvaluationForm: () => void,
  closeEvaluationForm: () => void,
};

export class LecturePage extends React.Component<Props> {
  componentDidMount() {
    this.props.getLecture(this.props.params.lectureId);
    (this: any).loadMoreEvaluations = this.loadMoreEvaluations.bind(this);
    this.loadMoreEvaluations(1);
  }

  componentWillReceiveProps(nextProps: Props) {
    const nextLectureId = nextProps.params.lectureId;
    if (nextLectureId !== this.props.params.lectureId) {
      this.props.getLecture(nextLectureId);
    }
  }

  loadMoreEvaluations(page: number) {
    if (this.props.user && this.props.user.get('isConfirmed')) {
      this.props.getEvaluations(this.props.params.lectureId, page);
    }
  }

  render() {
    const {
      user,
      page,
      lecture,
      evaluations,
    } = this.props;
    if (page.getIn(['lecture', 'isFetching']) || page.getIn(['lecture', 'error']) || !lecture) {
      return (
        <div>
          Loading... or error
        </div>
      );
    }
    return (
      <Background>
        <Helmet
          title="LecturePage"
          meta={[
            { name: 'description', content: 'Description of Lecture Page' },
          ]}
        />
        <EvaluationFormModal
          isOpen={this.props.page.get('evaluationFormOpen')}
        >
          <EvaluationForm />
          <CloseIcon onClick={this.props.closeEvaluationForm} />
        </EvaluationFormModal>
        <LectureNameWrapper>
          <LectureName>
            {lecture.get('course').get('name')}
          </LectureName>
          <ProfessorName>
            {lecture.get('professor').get('name')}
          </ProfessorName>
        </LectureNameWrapper>
        <Wrapper>
          <ColumnWrapper>
            <RowWrapper>
              <LectureScore>
                {lecture.get('score').toFixed(1)}
              </LectureScore>
              <Rating initialRating={lecture.get('score')} readonly />
              <ReviewCountText>
                {messages.evaluationsCount(lecture.get('evaluationsCount'))}
              </ReviewCountText>
            </RowWrapper>
            <HitsText>
              {messages.hitsCount(3139)}
            </HitsText>
            <SummaryText>
              영어로 쓰인 대중소설을 선별해서 읽음으로써 영어 읽기 능력을 향상시키고 영어권 문화에 대한 이해를 확장한다. 추리소설, 과학소설, 판타지, 아동/청소년 문학 등 다양한 대중문학 장르가 다루어질 수 있다.
            </SummaryText>
          </ColumnWrapper>
        </Wrapper>
        <Wrapper>
          <ColumnWrapper>
            <RowWrapper>
              <LectureInfoText>
                {messages.department}
              </LectureInfoText>
              <LectureInfoText>
                {lecture.getIn(['course', 'department', 'name'])}
              </LectureInfoText>
            </RowWrapper>
            <RowWrapper>
              <LectureInfoText>
                {messages.targetGrade}
              </LectureInfoText>
              <LectureInfoText>
                {((grade: ?number) => grade ? `${grade} 학년` : '전체')(lecture.getIn(['course', 'grade']))}
              </LectureInfoText>
            </RowWrapper>
          </ColumnWrapper>
        </Wrapper>
        <Wrapper>
          <SpaceBetween>
            <div>
              <EvaluationHeaderText>
                {messages.evaluation.header}
              </EvaluationHeaderText>
              <ReviewCountText>
                {messages.evaluationsCount(lecture.get('evaluationsCount'))}
              </ReviewCountText>
            </div>
            {(user && user.get('isConfirmed')) &&
              <LeaveReviewButton onClick={this.props.openEvaluationForm}>
                <LeaveReviewText>
                  {messages.leaveReview}
                </LeaveReviewText>
              </LeaveReviewButton>
            }
          </SpaceBetween>
        </Wrapper>
        {evaluations &&
          <InfiniteScroll
            pageStart={1}
            hasMore={page.get('evaluationsHasMore')}
            loadMore={this.loadMoreEvaluations}
          >
            <div>
              {evaluations.map((evaluation: Object, index: number) => (
                <Evaluation
                  key={index}
                  evaluation={evaluation}
                />
              ))}
            </div>
          </InfiniteScroll>
        }
      </Background>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  page: makeSelectPage(),
  lecture: makeSelectLecture(),
  evaluations: makeSelectEvaluations(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  getLecture: (id: number) => dispatch(Actions.getLectureRequest(id)),
  getEvaluations: (id: number, page: number) => dispatch(Actions.getEvaluationsRequest(id, page)),
  openEvaluationForm: () => dispatch(Actions.openEvaluationForm()),
  closeEvaluationForm: () => dispatch(Actions.closeEvaluationForm()),
});

export default withBars(connect(mapStateToProps, mapDispatchToProps)(LecturePage));
