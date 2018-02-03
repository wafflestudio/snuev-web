/*
 *
 * EvaluationDetail
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

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

export class EvaluationDetail extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Background>
        <div>
          <Helmet
            title="LectureDetail"
            meta={[
              { name: 'description', content: 'Description of EvaluationDetail' },
            ]}
          />
        </div>
        <LectureNameWrapper>
          <LectureName>
            영어 대중소설 읽기
          </LectureName>
          <ProfessorName>
            김소연
          </ProfessorName>
        </LectureNameWrapper>
        <Wrapper>
          <ColumnWrapper>
            <RowWrapper>
              <LectureScore>
                9.8
              </LectureScore>
              <Rating initialRating={5} readonly />
              <ReviewCountText>
                122개의 강의평
              </ReviewCountText>
            </RowWrapper>
            <HitsText>
              3,139 조회
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
                강의평
              </EvaluationHeaderText>
              <ReviewCountText>
                122개의 강의평
              </ReviewCountText>
            </div>
            <LeaveReviewButton>
              <LeaveReviewText>
                강의평 남기기
              </LeaveReviewText>
            </LeaveReviewButton>
          </SpaceBetween>
        </Wrapper>
        <Evaluation />
        <Evaluation />
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default withBars(connect(mapStateToProps, mapDispatchToProps)(EvaluationDetail));
