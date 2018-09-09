// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Map } from 'immutable';

import Vote from '../../components/Vote';
import { parseSemesterSeason, parseDate } from '../../utils/parse';

import messages from './messages';
import { typo } from '../../style-utils';

const EvaluationWrapper = styled.div`
  margin-bottom: 30px;
`;

const EvaluationHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: flex-end;
`;

export const EvaluationScore = styled.div`
  margin-right: 14px;
  display: flex;
  align-items: flex-end;
  margin-right: 16px;
`;

export const EvaluationScoreLabel = styled.div`
  ${typo.body1}
  opacity: .6;
`;

export const EvaluationScoreValue = styled.div`
  ${typo.score2}
  height: 40px;
  opacity: 0.8;
  color: #000000;
  margin-right: 4px;
`;

const DateText = styled.div`
  ${typo.body1}
  opacity: 0.4;
  text-align: left;
`;

const SemesterText = styled.div`
  ${typo.body1}
  text-align: left;
  color: #4f48c4;
  margin-left: 14px;
`;

const ReviewText = styled.p`
  ${typo.body1}
  margin: 20px 0;
  padding-left: 20px;
  border-left: 1px solid rgba(0,0,0,.2);
  margin-bottom: 14px;
`;

const DateVoteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

type Props = {
  lecture: Map<string, any>,
  evaluation: Map<string, any>,
  votes: Map<string, any>,
  vote: (lectureId: string, evaluationId: string, isUpvote: boolean) => void,
  deleteVote: (lectureId: string, evaluationId: string, isUpvote: boolean) => void,
};

export default ({ lecture, evaluation, votes, vote, deleteVote }: Props) => (
  <EvaluationWrapper>
    <EvaluationHeader>
      <EvaluationScore>
        <EvaluationScoreValue>{evaluation.get('score')}</EvaluationScoreValue>
        <EvaluationScoreLabel>/{messages.score}</EvaluationScoreLabel>
      </EvaluationScore>
      <EvaluationScore>
        <EvaluationScoreValue>{evaluation.get('easiness')}</EvaluationScoreValue>
        <EvaluationScoreLabel>/{messages.easiness}</EvaluationScoreLabel>
      </EvaluationScore>
      <EvaluationScore>
        <EvaluationScoreValue>{evaluation.get('grading')}</EvaluationScoreValue>
        <EvaluationScoreLabel>/{messages.grading}</EvaluationScoreLabel>
      </EvaluationScore>
      <SemesterText>
        {evaluation.getIn(['semester', 'season']) && evaluation.getIn(['semester', 'year']) ?
          `${evaluation.getIn(['semester', 'year'])} ${parseSemesterSeason(evaluation.getIn(['semester', 'season']))}` :
          ''
        }
      </SemesterText>
    </EvaluationHeader>
    <ReviewText>
      {evaluation.get('comment')}
    </ReviewText>
    <DateVoteWrapper>
      <DateText>
        {evaluation.get('createdAt') === evaluation.get('updatedAt') ?
          `${parseDate(evaluation.get('createdAt'))}` :
          `${parseDate(evaluation.get('updatedAt'))}`}
      </DateText>
      <Vote
        lecture={lecture}
        evaluation={evaluation}
        votes={votes}
        vote={vote}
        deleteVote={deleteVote}
      />
    </DateVoteWrapper>
  </EvaluationWrapper>
);
