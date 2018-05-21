import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import LogoImage from '../../images/img-gnb-logo.png';

export const Background = styled.div`
  background-color: #ffffff;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoFrame = styled.img`
  width: 182px;
  height: 39px;
  object-fit: contain;
`;

export const Logo = (props) => <LogoFrame src={LogoImage} {...props} />;

export const WaitingText = styled.p`
  height: 29px;
  font-family: AppleSDGothicNeo;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #222222;
  color: var(--black);
`;

export const WebMailText = styled.div`
  height: 50px;
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: center;
  color: #111111;
`;

export const ReturnLink = styled(Link)`
  width: 300px;
  height: 45px;
  margin-top: 54px;
`;

export const ReturnButton = styled.button`
  width: 300px;
  height: 45px;
  border-radius: 3px;
  background-color: #2066be;
`;

export const ReturnText = styled.div`
  width: 46px;
  height: 19px;
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;
