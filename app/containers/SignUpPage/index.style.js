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

export const SignUpForm = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoFrame = styled.img`
  width: 182px;
  height: 39px;
  object-fit: contain;
  margin-bottom: 20px;
`;

export const Logo = (props) => <LogoFrame src={LogoImage} {...props} />;

export const CreateAccountText = styled.p`
  height: 29px;
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #222222;
  color: #111111;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  width: 460px;
  height: 45px;
  border-radius: 2px;
  background-color: #ffffff;
  border: solid 1px #aaaaaa;
  margin-top: 20px;
`;

export const UsernameInputText = styled.text`
  width: 460px;
  height: 15px;
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: 10px;
  font-weight: normal;
  line-height: 15px;
  letter-spacing: normal;
  text-align: left;
  color: #4a4a4a;
  margin-top: 6px;
  padding-left: 9.6px;
`;

export const DepartmentInput = styled.select`
  width: 460px;
  height: 45px;
  border-radius: 3px;
  background-color: #ffffff;
  border: solid 1px #cccccc;
  margin-top: 20px;
`;

export const SignUpButton = styled.button`
  width: 460px;
  height: 45px;
  border-radius: 3px;
  background-color: #2066be;
  margin-top: 20px;
`;

export const SignUpText = styled.text`
  height: 19px;
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

export const LoginWrapper = styled.div`
  width: 460px;
  height: 15px;
  display: flex;
  flex: 1;
  margin-top: 8px;
  padding-left: 6px;
`;

export const LoginText = styled.text`
  height: 15px;
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #111111;
  margin-right: 30px;
`;

export const LoginLink = styled(Link)`
  height: 15px;
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #222222;
`;
