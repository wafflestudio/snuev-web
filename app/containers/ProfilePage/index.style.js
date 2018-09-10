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

  ${media.phone`
    width: 360px;
    margin-top: 20px;
  `}
`;

export const PageTabBar = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  margin-top: 22px;
  opacity: 0.9;
  background-color: #f0f1f5;
  justify-content: center;

  ${media.tablet`
    height: 50px;
  `}
`;

export const PageTabInnerWrapper = styled.div`
  width: 640px;
  height: 100%;
  display: flex;
  align-items: center;

  ${media.phone`
    width: 360px;
  `}
`;

export const PageTab = styled.button`
  ${typo.header3}
  height: 27px;
  color: ${(props) => props.currentPage ? '#4f48c4' : '#000000'};
  opacity: ${(props) => props.currentPage ? '1' : '0.6'};
  margin-right: 50px;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  ${media.phone`
    margin-right: 16px;
  `}
`;

export const InnerWrapper = styled.div`
  width: 640px;
  min-height: 400px;

  ${media.tablet`
    width: 460px;
  `}

  ${media.phone`
    width: 360px;
  `}
`;
