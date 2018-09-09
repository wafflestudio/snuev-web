import styled from 'styled-components';

import { typo, media } from '../../../style-utils';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const LectureTitle = styled.div`
  ${typo.header2}
  width: 100%;
  opacity: 0.8;
  color: #000000;
  margin-bottom: 2px;
`;

export const LectureBasicInfoWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
`;

export const LectureBasicInfo = styled.div`
  ${typo.body2}
  opacity: 0.6;
  color: #000000;
`;

export const Dot = styled.div`
  width: 2px;
  height: 2px;
  opacity: 0.5;
  background-color: #000000;
  margin-left: 5px;
  margin-right: 5px;
`;
