// @flow

import styled from 'styled-components';
import { Link } from 'react-router';

import { typo, media } from '../../../style-utils';

type Props = {
  theme: any,
};

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
  margin-bottom: 44px;
`;

export const BookmarkWrapper = styled.div`
  margin-top: 12px;

  ${media.tablet`
    margin-top: 8px;
  `}
`;

export const LectureWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

export const LectureTitle = styled(Link)`
  ${typo.header2}
  width: 100%;
  opacity: 0.8;
  color: ${(props: Props) => props.theme.color.black};
  margin-bottom: 10px;
  cursor: pointer;
`;

export const LectureBasicInfoWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const LectureBasicInfo = styled.div`
  ${typo.body2}
  opacity: 0.6;
  color: ${(props: Props) => props.theme.color.black};
`;

export const Dot = styled.div`
  width: 2px;
  height: 2px;
  opacity: 0.5;
  background-color: ${(props: Props) => props.theme.color.black};
  margin-left: 5px;
  margin-right: 5px;
`;

export const ScoreWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: flex-end;
`;

export const Score = styled.div`
  ${typo.score2}
  height: 40px;
  opacity: 0.9;
  color: ${(props: Props) => props.theme.color.black};
  margin-right: 4px;
`;

export const ScoreLabel = styled.div`
  ${typo.body2}
  opacity: 0.6;
  margin-right: 16px;

  ${media.phone`
    margin-right: 10px;
  `}
`;
