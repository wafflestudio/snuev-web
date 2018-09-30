// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Map } from 'immutable';

import Vote from '../../components/Vote';
import { parseSemesterSeason, parseDate } from '../../utils/parse';

import messages from './messages';
import { typo, media } from '../../style-utils';

const EvaluationWrapper = styled.div`
  margin-bottom: 30px;
`;

const EvaluationHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

export const EvaluationScore = styled.div`
  margin-right: 14px;
  display: flex;
  margin-right: 16px;
  align-items: center;
  ${media.phone`
    margin-right: 0px;
  `}
`;

export const EvaluationScoreLabel = styled.div`
  ${typo.body1}
  opacity: .6;
  margin-top: 10px;
  ${media.tablet`
    margin-top: 3px;
  `}
  ${media.phone`
    margin-top: 10px;
    margin-right: 10px;
    font-size: 12px;
  `}
`;

export const EvaluationScoreValue = styled.div`
  ${typo.score2}
  opacity: 0.8;
  color: ${(props: Props) => props.theme.color.black};
  margin-right: 4px;
  ${media.phone`
    margin-right: 2px;
  `}
`;

const DateText = styled.div`
  ${typo.body1}
  opacity: 0.4;
  text-align: left;
`;

const SemesterText = styled.div`
  ${typo.body1}
  text-align: left;
  color: ${(props: Props) => props.theme.color.primary};
  margin-left: 24px;
  margin-top: 10px;
  ${media.tablet`
    margin-top: 3px;
  `}
  ${media.phone`
    margin-top: 10px;
    margin-left: 0;
    font-size: 12px;
  `}
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
        <EvaluationScoreValue>{evaluation.get('score').toFixed(1)}</EvaluationScoreValue>
        <EvaluationScoreLabel width="30px">/{messages.score}</EvaluationScoreLabel>
      </EvaluationScore>
      <EvaluationScore>
        <EvaluationScoreValue>{evaluation.get('easiness').toFixed(1)}</EvaluationScoreValue>
        <EvaluationScoreLabel width="60px">/{messages.easiness}</EvaluationScoreLabel>
      </EvaluationScore>
      <EvaluationScore>
        <EvaluationScoreValue>{evaluation.get('grading').toFixed(1)}</EvaluationScoreValue>
        <EvaluationScoreLabel width="60px">/{messages.grading}</EvaluationScoreLabel>
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
