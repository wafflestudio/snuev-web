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
`;

export const LoginForm = styled.form`
  width: 375px;
  height: 507px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #ededed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoFrame = styled.img`
  width: 182px;
  height: 39px;
  object-fit: contain;
  margin-top: 80px;
  margin-bottom: 10px;
`;

export const Logo = (props) => <LogoFrame src={LogoImage} {...props} />;

export const WelcomeText = styled.p`
  width: 273px;
  height: 42px;
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #666666;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 300px;
  height: 36px;
  border-radius: 3px;
  background-color: #ffffff;
  border: solid 1px #dbdbdb;
  margin-top: 24px;
`;

export const RecoverPasswordLink = styled.a`
  width: 128px;
  height: 14px;
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  color: #2066be;
  margin-top: 10px;
  margin-left: 48px;
  align-self: left;
`;

export const LoginButton = styled.button`
  width: 300px;
  height: 36px;
  border-radius: 3px;
  background-color: #2066be;
  margin-top: 20px;
`;

export const LoginText = styled.text`
  width: 46px;
  height: 17px;
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
`;

export const SignUpWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 48px;
  align-self: left;
`;

export const SignUpText = styled.text`
  width: 104px;
  height: 14px;
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: 12px;
  text-align: left;
  color: #111111;
`;

export const SignUpLink = styled(Link)`
  width: 46px;
  height: 14px;
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  color: #2066be;
  margin-left: 14px;
`;
