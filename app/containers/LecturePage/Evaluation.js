// @flow
import React from 'react';
import styled from 'styled-components';
import { Map } from 'immutable';

import { parseSemesterSeason, parseDate } from '../../utils/parse';

import messages from './messages';
import { typo } from '../../style-utils';

type Theme = {
  fontFamily: {
    sansSerif: string,
  },
};

const EvaluationWrapper = styled.div`
  margin-top: 30px;
`;

const EvaluationHeader = styled.div`
  display: flex;
`;

export const EvaluationScore = styled.div`
  margin-right: 14px;
`;

export const EvaluationScoreLabel = styled.div`
  opacity: .6;
`;

export const EvaluationScoreValue = styled.div`
  ${typo.score2}
  margin-right: .1em;
`;

const DateText = styled.div`
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.number};
  text-align: left;
`;

const SemesterText = styled.div`
  ${typo.body1}
  text-align: left;
  color: #111111;
`;

const ReviewText = styled.p`
  ${typo.body1}
  margin: 20px 0;
  padding-left: 20px;
  border-left: 1px solid rgba(0,0,0,.2);
`;

type Props = {
  evaluation: Map<string, any>,
};

export default ({ evaluation }: Props) => (
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
    <DateText>
      {evaluation.get('createdAt') === evaluation.get('updatedAt') ?
        `${parseDate(evaluation.get('createdAt'))}` :
        `${parseDate(evaluation.get('updatedAt'))}`}
    </DateText>
  </EvaluationWrapper>
);
