// @flow
import React from 'react';
import styled from 'styled-components';

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
  comment: string,
  score: number,
  easiness: number,
  grading: number,
  createdAt: string,
  updatedAt: string,
  semesterSeason: string,
  semesterYear: number,
};

export default (props: Props) => (
  <Wrapper>
    <ColumnWrapper>
      <RowWrapper>
        <SpaceBetween>
          <div>
            <Score>
              {props.score.toFixed(1)}
            </Score>
            <Rating small initialRating={props.score} readonly />
            <DateText>
              {props.createdAt === props.updatedAt ? `${parseDate(props.createdAt)} 작성` : `${parseDate(props.updatedAt)} 수정`}
            </DateText>
          </div>
          <div>
            <SemesterText>
              {props.semesterSeason && props.semesterYear ? `${props.semesterYear} ${parseSemesterSeason(props.semesterSeason)}` : ''}
            </SemesterText>
          </div>
        </SpaceBetween>
      </RowWrapper>
      <ReviewText>
        {props.comment}
      </ReviewText>
    </ColumnWrapper>
  </Wrapper>
);
