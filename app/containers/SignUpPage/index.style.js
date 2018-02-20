import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import LogoImage from '../../images/logo.png';

export const Background = styled.div`
  background-color: #efefef;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SignUpForm = styled.form`
  width: 1440px;
  height: 1024px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoFrame = styled.img`
  width: 182px;
  height: 39px;
  object-fit: contain;
  margin-top: 235px;
  margin-bottom: 50px;
`;

export const Logo = (props) => <LogoFrame src={LogoImage} {...props} />;

export const CreateAccountText = styled.p`
  width: 120px;
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
  margin-bottom: 32px;
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
  font-family: NanumGothic;
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
  width: 70px;
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

export const LoginWrapper = styled.div`
  width: 460px;
  height: 15px;
  display: flex;
  flex: 1;
  margin-top: 8px;
  padding-left: 6px;
`;

export const LoginText = styled.text`
  width: 111.3px;
  height: 15px;
  font-family: NanumGothic;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #111111;
`;

export const LoginLink = styled(Link)`
  width: 55.7px;
  height: 15px;
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #222222;
`;
