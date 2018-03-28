// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { List, Map } from 'immutable';
import InfiniteScroll from 'react-infinite-scroller';

import { Creators as Actions } from './reducer';
import messages from './messages';

import Bookmark from '../../components/Bookmark';
import EvaluationForm from './EvaluationForm';
import Evaluation from './Evaluation';
import { makeSelectUser } from '../../global/selectors';
import { Creators as GlobalActions } from '../../global/reducer';
import {
  makeSelectPage,
  makeSelectLecture,
  makeSelectEvaluations,
} from './selectors';
import {
  EvaluationsWrapper,
  Background,
  EvaluationFormModal,
  LectureName,
  LectureScore,
  LectureSummary,
  LectureInfoText,
  EvaluationsHeader,
  LeaveReviewButton,
  LeaveReviewText,
  CloseIcon,
  LectureInfo,
  LectureBasicInfo,
  LectureScoreLabel,
  LectureScoreValue,
  LectureWrapper,
} from './index.style';
import withBars from '../../services/withBars';

type Props = {
  user: Map<string, any>,
  page: Map<string, any>,
  lecture: Map<string, any>,
  evaluations: List<Map<string, any>>,
  params: { lectureId: string },
  getLecture: (id: string) => void,
  getEvaluations: (lectureId: string, page: number) => void,
  openEvaluationForm: () => void,
  closeEvaluationForm: () => void,
  bookmark: (id: string) => void,
  deleteBookmark: (id: string) => void,
};

export class LecturePage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    (this: any).loadMoreEvaluations = this.loadMoreEvaluations.bind(this);
  }

  componentDidMount() {
    this.props.getLecture(this.props.params.lectureId);
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
        <LectureWrapper>
          <LectureName>
            {lecture.get('course').get('name')}
          </LectureName>
          <Bookmark
            lecture={lecture}
            initialMark={lecture.get('bookmarked')}
            onPressWhenMarked={this.props.deleteBookmark}
            onPressWhenNotMarked={this.props.bookmark}
            isFail={!!page.getIn(['bookmark', 'error'])}
          />
          <LectureInfo>
            <LectureBasicInfo>
              <LectureInfoText>
                {messages.professor(lecture.get('professor').get('name'))}
              </LectureInfoText>
              <LectureInfoText>
                {lecture.getIn(['course', 'department', 'name'])}
              </LectureInfoText>
              <LectureInfoText>
                {((grade: ?number) => grade ? `${grade} 학년` : '전체')(lecture.getIn(['course', 'targetGrade']))}
              </LectureInfoText>
            </LectureBasicInfo>
            <LectureScore>
              <LectureScoreLabel>{messages.score}</LectureScoreLabel>
              <LectureScoreValue>{lecture.get('score').toFixed(1)}</LectureScoreValue>
            </LectureScore>
            <LectureScore>
              <LectureScoreLabel>{messages.easiness}</LectureScoreLabel>
              <LectureScoreValue>{lecture.get('easiness').toFixed(1)}</LectureScoreValue>
            </LectureScore>
            <LectureScore>
              <LectureScoreLabel>{messages.grading}</LectureScoreLabel>
              <LectureScoreValue>{lecture.get('grading').toFixed(1)}</LectureScoreValue>
            </LectureScore>
          </LectureInfo>
          <LectureSummary>
            영어로 쓰인 대중소설을 선별해서 읽음으로써 영어 읽기 능력을 향상시키고 영어권 문화에 대한 이해를 확장한다. 추리소설, 과학소설, 판타지, 아동/청소년 문학 등 다양한 대중문학 장르가 다루어질 수 있다.
          </LectureSummary>
        </LectureWrapper>
        <EvaluationsWrapper>
          <EvaluationsHeader>
            {messages.evaluation.header}
          </EvaluationsHeader>
          {(user && user.get('isConfirmed')) &&
            <LeaveReviewButton onClick={this.props.openEvaluationForm}>
              <LeaveReviewText>
                {messages.leaveReview}
              </LeaveReviewText>
            </LeaveReviewButton>
          }
        </EvaluationsWrapper>
        <InfiniteScroll
          pageStart={0}
          hasMore={page.getIn(['evaluations', 'hasMore'])}
          loadMore={this.loadMoreEvaluations}
        >
          <div>
            {this.props.evaluations &&
            <div>
              {evaluations.map((evaluation: Object, index: number) => (
                <Evaluation
                  key={index}
                  evaluation={evaluation}
                />
              ))}
            </div>
            }
          </div>
        </InfiniteScroll>
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
  getLecture: (id: string) => dispatch(Actions.getLectureRequest(id)),
  getEvaluations: (id: string, page: number) => dispatch(Actions.getEvaluationsRequest(id, page)),
  openEvaluationForm: () => dispatch(Actions.openEvaluationForm()),
  closeEvaluationForm: () => dispatch(Actions.closeEvaluationForm()),
  bookmark: (id: number) => dispatch(GlobalActions.bookmarkRequest(id)),
  deleteBookmark: (id: number) => dispatch(GlobalActions.deleteBookmarkRequest(id)),
});

export default withBars(connect(mapStateToProps, mapDispatchToProps)(LecturePage));
