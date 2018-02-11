import React from 'react';
import styled from 'styled-components';
import Rating from '../../components/Rating';

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

export default () => (
  <Wrapper>
    <ColumnWrapper>
      <RowWrapper>
        <SpaceBetween>
          <div>
            <Score>
              9.5
            </Score>
            <Rating small initialRating={5} readonly />
            <DateText>
              2017/05/12 작성
            </DateText>
          </div>
          <div>
            <SemesterText>
              2017 봄 학기
            </SemesterText>
          </div>
        </SpaceBetween>
      </RowWrapper>
      <ReviewText>
        것은 가장 싶이 원대하고, 그들은 그들에게 같지 것이다. 목숨을 가진 그들에게 있는 거선의 생생하며, 열락의 뿐이다. 그들은 뛰노는 하여도 위하여 만물은 아니한 속잎나고, 것이다. 광야에서 따뜻한 거선의 사랑의 밝은 것이다. 영원히 열락의 뛰노는 무엇을 스며들어 그와 두기 것이다. 실로 지혜는 열락의 풀이 사막이다. 우는 보내는 곧 위하여 커다란 있는가? 만천하의 할지니, 때에, 천고에 우리 없는 영원히 이것이다. 위하여서, 보는 실현에 고동을 아름다우냐? 위하여 얼마나 이 새가 튼튼하며, 품으며, 피고, 사랑의 없는 것이다. 가치를 청춘의 능히 있을 그것을 방지하는 청춘은 있는 듣는다.
      </ReviewText>
    </ColumnWrapper>
  </Wrapper>
);
