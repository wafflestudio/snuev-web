// @flow

import styled from 'styled-components';
import { Link } from 'react-router';

import { typo } from '../../../style-utils';

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
  flex-direction: column;
  margin-bottom: 20px;
`;

export const LectureTitle = styled(Link)`
  ${typo.header2}
  width: 100%;
  opacity: 0.8;
  color: ${(props: Props) => props.theme.color.black};
  margin-bottom: 2px;
  cursor: pointer;
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
