// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { Map, List } from 'immutable';

import { Creators as Actions } from './reducer';
import messages from './messages';

import Rating from '../../components/Rating';
import Evaluation from './Evaluation';
import {
  makeSelectLecture,
  makeSelectLectureIsFetching,
  makeSelectLectureError,
  makeSelectEvaluations,
  makeSelectEvaluationsIsFetching,
  makeSelectEvaluationsError,
} from './selectors';
import { makeSelectUser } from '../../global/selectors';
import {
  Wrapper,
  ColumnWrapper,
  RowWrapper,
  SpaceBetween,
  Background,
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
} from './index.style';
import withBars from '../../services/withBars';

type Props = {
  user?: Map<string, any>,
  lecture?: Map<string, any>,
  lectureIsFetching: boolean,
  lectureError?: {}[],
  evaluations?: List<Map<string, any>>,
  evaluationsIsFetching: boolean,
  evaluationsError?: List<Map<string, any>>,
  params: { lectureId: number },
  getLecture: (id: number) => void,
  getEvaluations: (lectureId: number, page: number) => void,
};

export class LecturePage extends React.PureComponent<Props> {
  componentDidMount() {
    const lectureId = this.props.params.lectureId;
    this.props.getLecture(lectureId);
    if (this.props.user && this.props.user.get('isConfirmed')) {
      this.props.getEvaluations(lectureId, 1);
    }
  }

  render() {
    const {
      lecture,
      lectureIsFetching,
      lectureError,
      evaluations,
      evaluationsIsFetching,
      evaluationsError,
    } = this.props;
    if (lectureIsFetching || lectureError || !lecture) {
      return (
        <div>
          Loading... or error
        </div>
      );
    }
    return (
      <Background>
        <div>
          <Helmet
            title="LecturePage"
            meta={[
              { name: 'description', content: 'Description of Lecture Page' },
            ]}
          />
        </div>
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
            <LeaveReviewButton>
              <LeaveReviewText>
                {messages.leaveReview}
              </LeaveReviewText>
            </LeaveReviewButton>
          </SpaceBetween>
        </Wrapper>
        {evaluations &&
          evaluations.map((evaluation: Object, index: number) => (
            <Evaluation
              key={index}
              evaluation={evaluation}
            />
          ))
        }
      </Background>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  lecture: makeSelectLecture(),
  lectureIsFetching: makeSelectLectureIsFetching(),
  lectureError: makeSelectLectureError(),
  evaluations: makeSelectEvaluations(),
  evaluationsIsFetching: makeSelectEvaluationsIsFetching(),
  evaluationsError: makeSelectEvaluationsError(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  getLecture: (id: number) => dispatch(Actions.getLectureRequest(id)),
  getEvaluations: (id: number, page: number) => dispatch(Actions.getEvaluationsRequest(id, page)),
});

export default withBars(connect(mapStateToProps, mapDispatchToProps)(LecturePage));
