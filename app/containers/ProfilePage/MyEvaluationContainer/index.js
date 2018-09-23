// @flow

import * as React from 'react';
import { Map } from 'immutable';
import {
  Background,
  Wrapper,
  LectureTitle,
  LectureBasicInfoWrapper,
  LectureBasicInfo,
  Dot,
} from './index.style';
import Evaluation from '../../LecturePage/Evaluation';

type Props = {
  myEvaluations: Object,
  votes: Map<string, any>,
  lectures: Map<string, any>,
  vote: (lectureId: string, evaluationId: string, isUpvote: boolean) => void,
  deleteVote: (lectureId: string, evaluationId: string, isUpvote: boolean) => void,
};

export class MyEvaluationContainer extends React.PureComponent<Props> {
  render() {
    const { myEvaluations, lectures } = this.props;
    if (!myEvaluations) {
      return (
        <div>
        </div>
      );
    }
    return (
      <Background>
        {myEvaluations &&
          myEvaluations.map((evaluation: Object, index: number) => (
            <Wrapper key={index}>
              <LectureTitle to={`/lectures/${evaluation.getIn(['lecture', 'id'])}`}>{evaluation.getIn(['lecture', 'name'])}</LectureTitle>
              <LectureBasicInfoWrapper>
                <LectureBasicInfo>{evaluation.getIn(['lecture', 'course', 'department', 'name'])}</LectureBasicInfo>
                <Dot />
                <LectureBasicInfo>{evaluation.getIn(['lecture', 'course', 'targetGrade'])}</LectureBasicInfo>
                <Dot />
                <LectureBasicInfo>{evaluation.getIn(['lecture', 'professor', 'name'])} 교수</LectureBasicInfo>
              </LectureBasicInfoWrapper>
              <Evaluation
                lecture={lectures}
                evaluation={evaluation}
                votes={this.props.votes}
                vote={this.props.vote}
                deleteVote={this.props.deleteVote}
              />
            </Wrapper>
          ))
        }
      </Background>
    );
  }
}

export default MyEvaluationContainer;
