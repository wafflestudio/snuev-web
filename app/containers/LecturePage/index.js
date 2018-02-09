import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';


import { Creators as Actions } from './reducer';
import { makeSelectPayload, makeSelectIsFetching, makeSelectError } from './selectors';
import messages from './messages';
import { parseId } from '../../utils/parse';

import Rating from '../../components/Rating';
import Evaluation from './Evaluation';
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

export class LecturePage extends React.PureComponent {
  componentWillMount() {
    const id = parseId(this.props.params.id);
    if (id) {
      this.props.getLecture(id);
    }
  }

  render() {
    const { lecture, isFetching, error } = this.props;
    if (isFetching || error || !lecture) {
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
                개설학과
              </LectureInfoText>
              <LectureInfoText>
                영어영문학과
              </LectureInfoText>
            </RowWrapper>
            <RowWrapper>
              <LectureInfoText>
                학년
              </LectureInfoText>
              <LectureInfoText>
                3학년
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
        <Evaluation score={8} />
        <Evaluation score={7.6} />
        <Evaluation score={5.4} />
      </Background>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  lecture: makeSelectPayload(),
  loading: makeSelectIsFetching(),
  error: makeSelectError(),
});

const mapDispatchToProps = (dispatch) => ({
  getLecture: (id) => dispatch(Actions.getLectureRequest(id)),
});

export default withBars(connect(mapStateToProps, mapDispatchToProps)(LecturePage));
