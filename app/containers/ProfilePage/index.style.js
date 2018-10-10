// @flow

import * as React from 'react';
import styled from 'styled-components';
import Map from 'immutable';
import { typo, media } from '../../style-utils';
import ChooseIcon from '../../images/img-choose.png';

type Props = {
  theme: Map<string, any>,
  currentPage: boolean,
};

export const Background = styled.div`
  width: 100%;
  left: 0;
  min-height: 700px;
  height: 100%;
  background-color: ${(props: Props) => props.theme.color.white};
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
  color: ${(props: Props) => props.theme.color.black};

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
  background-color: ${(props: Props) => props.theme.color.grayBackground1};
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
  color: ${(props: Props) => props.currentPage ? props.theme.color.primary : props.theme.color.black};
  opacity: ${(props: Props) => props.currentPage ? '1' : '0.6'};
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

export const BeforeSelectBackground = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${(props: Props) => props.theme.color.white};
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const ChooseIconFrame = styled.img`
  width: 108px;
  height: 108px;
  margin-bottom: 10px;
`;

export const IconChoose = (props: {}) => <ChooseIconFrame src={ChooseIcon} {...props} />;

export const ChooseText = styled.p`
  ${typo.body1}
  text-align: center;
  margin: 0;
  opacity: 0.6;
  color: ${(props: Props) => props.theme.color.black};
`;
