import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import LogoImage from '../../images/img-logo-220-px.png';

export const Background = styled.div`
  min-height: 700px;
  background-color: ${(props) => props.theme.color.grayBackground1};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginForm = styled.form`
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerContainer = styled.div`
  background-color: ${(props) => props.theme.color.white};
  width: 660px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  position: relative;
  padding: 20px;
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.05);
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoFrame = styled.img`
  width: 220px;
  height: 60px;
  object-fit: contain;
`;

export const Logo = (props) => <LogoFrame src={LogoImage} {...props} />;

export const WelcomeText = styled.div`
  width: 331px;
  height: 48px;
  opacity: 0.8;
  font-family: NotoSansCJKkr;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--black-two);
  margin-top: 46px;
`;

export const PermissionText = styled.div`
  width: 230px;
  height: 19px;
  opacity: 0.5;
  font-family: NotoSansCJKkr;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--black-two);
  margin-top: 16px;
  margin-bottom: 60px;
`;

export const Input = styled.input`
  width: 300px;
  height: 44px;
  opacity: 0.7;
  font-size: 17px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  background-color: ${(props) => props.theme.color.white};
  border-bottom: solid 1px #959aac;
  &:focus { outline: none; };
  margin-top: 11px;
  margin-bottom: 18px;
  color: var(--black-two);
`;

export const LoginButton = styled.button`
  width: 140px;
  height: 140px;
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.08);
  border-radius: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4f48c4;
  position: absolute;
  left: 590px;
  top: 60%;
  &:hover { background-color: #3e37b0; };
  &:focus { background-color: #2b2592; outline: none; };
`;

export const LoginText = styled.div`
  width: 56px;
  height: 29px;
  font-family: NotoSansCJKkr;
  font-size: 20px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

export const CircleTextWrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

export const MiniCircle = styled.div`
  width: 10px;
  height: 10px;
  background-color: #4f48c4;
  border-radius: 5px;
  margin-right: 6px;
`;

export const SignUpLink = styled(Link)`
  width: 52px;
  height: 20px;
  opacity: 0.8;
  font-family: NotoSansCJKkr;
  font-size: 13px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--black-two);
`;

export const RecoverPasswordLink = styled(Link)`
  width: 81px;
  height: 20px;
  opacity: 0.8;
  font-family: NotoSansCJKkr;
  font-size: 13px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--black-two);
`;

export const Footer = styled.div`
  width: 100%;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const SnuevTeamWrapper = styled.div`
  width: 132px;
  height: 19px;
  opacity: 0.4;
  font-family: NotoSansCJKkr;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--black-two);
  margin-right: 30px;
`;

export const SnuevGithubWrapper = styled.div`
  width: 86px;
  height: 19px;
  opacity: 0.4;
  font-family: NotoSansCJKkr;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--black-two);
  margin-right: 30px;
`;

export const DeveloperWrapper = styled.div`
  width: 87px;
  height: 19px;
  opacity: 0.4;
  font-family: NotoSansCJKkr;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--black-two);
`;
