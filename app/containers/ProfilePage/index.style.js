import styled from 'styled-components';
import { typo, media } from '../../style-utils';

export const Background = styled.div`
  width: 100%;
  left: 0;
  min-height: 700px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NicknameWrapper = styled.div`
  ${typo.header1}
  width: 640px;
  height: 56px;
  margin-top: 42px;
  opacity: 0.7;
  color: #000000;
`;

export const PageTabBar = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  margin-top: 22px;
  opacity: 0.9;
  background-color: #f0f1f5;
  justify-content: center;
`;

export const PageTabInnerWrapper = styled.div`
  width: 640px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const PageTab = styled.button`
  ${typo.header3}
  height: 27px;
  color: #4f48c4;
  margin-right: 50px;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

export const InnerWrapper = styled.div`
  width: 640px;
  min-height: 400px;
`;
