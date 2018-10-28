// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { Map } from 'immutable';
import { parseDate, parseSemesterSeason } from '../../utils/parse';
import { typo, media } from '../../style-utils';
import Vote from '../../components/Vote';

export const EvaluationCard = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.4);
`;

export const EvaluationCardTitlesWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const EvaluationCardTitles = styled(Link)`
  font-size: 22px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  margin-right: 10px;
  cursor: pointer;
  /* TODO: Ellipsis for multiline **/
  ${media.tablet`
    font-size: 18px;
  `}
  ${media.phone`
    font-size: 18px;
  `}
`;

export const EvaluationCardSemester = styled.div`
  display: block;
  margin-top: 5px;
  font-family: ${(props: any) => props.theme.fontFamily.number};
  font-size: ${(props: any) => props.theme.fontSize.label};
  color: ${(props: any) => props.theme.color.primary};
`;

export const EvaluationMeta = styled.div`
  margin-top: 10px;
  ${typo.body2}
`;

export const EvaluationGrades = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;

  ${media.phone`
    margin-top: 5px;
  `}
`;

export const EvaluationDescription = styled.div`
  ${typo.body2}
  font-size: 14px;
  margin-right: 16px;
  margin-top: 4px;
  opacity: 0.8;

  ${media.tablet`
    font-size: 11px;
  `}
`;

export const EvaluationGrade = styled.div`
  color: rgba(0, 0, 0, 0.9);
  font-size: 26px;
  font-family: ${(props: any) => props.theme.fontFamily.number};
  font-weight: 300;
  margin-right: 4px;
`;

export const EvaluationContent = styled.div`
  margin-top: 14px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);

  ${media.tablet`
    font-size: 13px;
  `}

  ${media.phone`
    margin-top: 5px;
  `}
`;

export const EvaluationActions = styled.div`
  margin-top: 16px;
  color: rgba(0, 0, 0, 0.4);
  display: flex;
  font-size: 15px;
  align-items: center;
  justify-content: space-between;

  ${media.phone`
    margin-top: 10px;
  `}
`;

export const EvaluationDateWriter = styled.div`
`;

export const EvaluationLikesHates = styled.div`
  display: flex;
`;

type Props = {
  evaluation: Map<string, any>,
  votes: Map<string, any>,
  vote: (lectureId: string, evaluationId: string, isUpvote: boolean) => void,
  deleteVote: (lectureId: string, evaluationId: string, isUpvote: boolean) => void,
};

export default ({ evaluation, votes, vote, deleteVote }: Props) => (
  <EvaluationCard>
    <EvaluationCardTitlesWrapper>
      <EvaluationCardTitles to={`/lectures/${evaluation.getIn(['lecture', 'id'])}`}>
        {evaluation.getIn(['lecture', 'course', 'name'])}
      </EvaluationCardTitles>
      <EvaluationCardSemester>
        {evaluation.getIn(['semester', 'season']) && evaluation.getIn(['semester', 'year']) ?
        `${evaluation.getIn(['semester', 'year'])} ${parseSemesterSeason(evaluation.getIn(['semester', 'season']))}` :
        ''
        }
      </EvaluationCardSemester>
    </EvaluationCardTitlesWrapper>
    <EvaluationMeta>
      {evaluation.getIn(['lectureSession', 'department', 'name'])}&nbsp;&middot;&nbsp;{evaluation.getIn(['lecture', 'course', 'targetGrade'])}&nbsp;&middot;&nbsp;{evaluation.getIn(['lecture', 'professor', 'name'])} 교수
    </EvaluationMeta>
    <EvaluationGrades>
      <EvaluationGrade>{evaluation.get('score').toFixed(1)}</EvaluationGrade><EvaluationDescription> /총점</EvaluationDescription>
      <EvaluationGrade>{evaluation.get('grading').toFixed(1)}</EvaluationGrade><EvaluationDescription> /쉬움</EvaluationDescription>
      <EvaluationGrade>{evaluation.get('easiness').toFixed(1)}</EvaluationGrade><EvaluationDescription> /학점 잘 줌</EvaluationDescription>
    </EvaluationGrades>
    <EvaluationContent>
      {evaluation.get('comment')}
    </EvaluationContent>
    <EvaluationActions>
      <EvaluationDateWriter>
        {parseDate(evaluation.get('updatedAt'))}
      </EvaluationDateWriter>
      <EvaluationLikesHates>
        <Vote lecture={evaluation} evaluation={evaluation} votes={votes} vote={vote} deleteVote={deleteVote} />
      </EvaluationLikesHates>
    </EvaluationActions>
  </EvaluationCard>
);
