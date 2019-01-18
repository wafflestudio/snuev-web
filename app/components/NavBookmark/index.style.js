// @flow

import styled from 'styled-components';
import { Link } from 'react-router';

import { typo } from '../../style-utils';

type Props = {
  theme: Map<string, any>,
};

export const Background = styled.div`
  width: 320px;
  height: 360px;
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  display: flex;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  overflow: auto;
`;

export const LectureWrapper = styled(Link)`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  cursor: pointer;
  padding: 10px 20px;
`;

export const LectureTitle = styled.div`
  ${typo.body2}
  color: ${(props: Props) => props.theme.color.black};
  line-height: 20px; 
  max-height: 40px; 
  text-align: left; 
  word-wrap: break-word; 
  display: block;
  display: -webkit-box; 
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const LectureBasicInfoWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
`;

export const LectureBasicInfo = styled.div`
  font-size: 12px;
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
