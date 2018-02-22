// @flow
import React from 'react';
import styled from 'styled-components';
import { Map } from 'immutable';

import Rating from '../../components/Rating';
import { parseSemesterSeason, parseDate } from '../../utils/parse';

import { Wrapper, ColumnWrapper, RowWrapper, SpaceBetween } from './index.style';

const Score = styled.text`
  height: 23px;
  font-family: NanumGothic;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: #1854e7;
  margin-left: 10px;
  margin-right: 7px;
`;

const DateText = styled.text`
  font-family: NanumGothic;
  font-size: 13px;
  text-align: left;
  color: #666666;
  margin-left: 10px;
`;

const SemesterText = styled.text`
  font-family: NanumGothic;
  font-size: 15px;
  text-align: left;
  color: #111111;
`;

const ReviewText = styled.p`
  font-family: NanumGothic;
  font-size: 14px;
  line-height: 1.43;
  text-align: left;
  color: #111111;
`;

type Props = {
  evaluation: Map<string, any>,
};

export default ({ evaluation }: Props) => (
  <Wrapper>
    <ColumnWrapper>
      <RowWrapper>
        <SpaceBetween>
          <div>
            <Score>
              {evaluation.get('score').toFixed(1)}
            </Score>
            <Rating small initialRating={evaluation.get('score')} readonly />
            <DateText>
              {evaluation.get('createdAt') === evaluation.get('updatedAt') ?
                `${parseDate(evaluation.get('createdAt'))} 작성` :
                `${parseDate(evaluation.get('updatedAt'))} 수정`}
            </DateText>
          </div>
          <div>
            <SemesterText>
              {evaluation.getIn(['semester', 'season']) && evaluation.getIn(['semester', 'year']) ?
                `${evaluation.getIn(['semester', 'year'])} ${parseSemesterSeason(evaluation.getIn(['semester', 'season']))}` :
                ''
              }
            </SemesterText>
          </div>
        </SpaceBetween>
      </RowWrapper>
      <ReviewText>
        {evaluation.get('comment')}
      </ReviewText>
    </ColumnWrapper>
  </Wrapper>
);
