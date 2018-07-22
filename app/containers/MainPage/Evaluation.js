// @flow
import React from 'react';
import styled from 'styled-components';
import { Map } from 'immutable';
import { parseDate } from '../../utils/parse';
import UpvoteIconSrc from '../../images/ic-upvote-normal.png';
import UpvoteIcon2xSrc from '../../images/ic-upvote-normal@2x.png';
import UpvoteIcon3xSrc from '../../images/ic-upvote-normal@3x.png';
import DownvoteIconSrc from '../../images/ic-downvote-normal.png';
import DownvoteIcon2xSrc from '../../images/ic-downvote-normal@2x.png';
import DownvoteIcon3xSrc from '../../images/ic-downvote-normal@3x.png';

export const EvaluationCard = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.4);
`;

export const EvaluationCardTitles = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  div {
    margin-left: 10px;
    display: block;
    font-family: ${(props: any) => props.theme.fontFamily.number};
    font-size: ${(props: any) => props.theme.fontSize.label};
    color: ${(props: any) => props.theme.color.primary};
  }
`;

export const EvaluationMeta = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
`;

export const EvaluationGrades = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
`;

export const EvaluationDescription = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  font-family: ${(props: any) => props.theme.fontFamily.sansSerif};
  margin-right: 16px;
  margin-top: 4px;
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
`;

export const EvaluationActions = styled.div`
  margin-top: 16px;
  color: rgba(0, 0, 0, 0.4);
  display: flex;
  font-size: 15px;
  align-items: center;
  justify-content: space-between;
`;

export const EvaluationDateWriter = styled.div`
`;

export const EvaluationLikesHates = styled.div`
  display: flex;
`;

const IconFrame = styled.img`
  margin-right: 6px;
`;

export const UpvoteIcon = (props: {}) => <IconFrame {...props} src={UpvoteIconSrc} srcSet={`${UpvoteIcon2xSrc} 2x, ${UpvoteIcon3xSrc} 3x`} />;

export const DownvoteIcon = (props: {}) => <IconFrame {...props} src={DownvoteIconSrc} srcSet={`${DownvoteIcon2xSrc} 2x, ${DownvoteIcon3xSrc} 3x`} />;

export const EvaluationVotes = styled.div`
  margin-left: 16px;
  span {
    font-family: ${(props: any) => props.theme.fontFamily.number};
  }
`;

export const NoStyleButton = styled.button`
  padding: 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

type Props = {
  evaluation: Map<string, any>,
};

export default ({ evaluation }: Props) => (
  <EvaluationCard>
    <EvaluationCardTitles>
      {evaluation.getIn(['lecture', 'name'])}<div>학기 데이터{/* TODO: change it to semester data*/}</div>
    </EvaluationCardTitles>
    <EvaluationMeta>
      {evaluation.getIn(['lecture', 'course', 'department', 'name'])}&nbsp;&middot;&nbsp;{evaluation.getIn(['lecture', 'course', 'targetGrade'])}학년&nbsp;&middot;&nbsp;{evaluation.getIn(['lecture', 'professor', 'name'])} 교수
                      </EvaluationMeta>
    <EvaluationGrades>
      <EvaluationGrade>{evaluation.get('score')}</EvaluationGrade><EvaluationDescription> /총점</EvaluationDescription>
      <EvaluationGrade>{evaluation.get('grading')}</EvaluationGrade><EvaluationDescription> /쉬움</EvaluationDescription>
      <EvaluationGrade>{evaluation.get('easiness')}</EvaluationGrade><EvaluationDescription> /학점 잘 줌</EvaluationDescription>
    </EvaluationGrades>
    <EvaluationContent>
      {evaluation.get('comment')}
    </EvaluationContent>
    <EvaluationActions>
      <EvaluationDateWriter>
        {parseDate(evaluation.get('updatedAt'))}
      </EvaluationDateWriter>
      <EvaluationLikesHates>
        <EvaluationVotes>
          <NoStyleButton>
            <UpvoteIcon />
          </NoStyleButton>
          <span>
            {evaluation.get('upvotesCount')}
          </span>
        </EvaluationVotes>
        <EvaluationVotes>
          <NoStyleButton>
            <DownvoteIcon />
          </NoStyleButton>
          <span>
            {evaluation.get('downvotesCount')}
          </span>
        </EvaluationVotes>
      </EvaluationLikesHates>
    </EvaluationActions>
  </EvaluationCard>
);
