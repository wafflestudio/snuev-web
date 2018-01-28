/*
 *
 * LoginPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import makeSelectLoginPage from './selectors';
import messages from './messages';

import LogoImage from '../../images/logo.png'

const Background = styled.div`
	background-color: #efefef;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LoginWrapper = styled.div`
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

const Logo = styled.img`
	width: 182px;
	height: 39px;
	object-fit: contain;
	margin-top: 80px;
	margin-bottom: 10px;
`;

const WelcomeText = styled.p`
	width: 273px;
	height: 42px;
	font-family: NanumMyeongjo;
	font-size: 18px;
	font-weight: bold;
	text-align: center;
	color: #666666;
	margin-bottom: 16px;
`;

const Input = styled.input`
	width: 300px;
	height: 36px;
	border-radius: 3px;
	background-color: #ffffff;
	border: solid 1px #dbdbdb;
	margin-top: 24px;
`;

const RecoverPasswordLink = styled.a`
	width: 128px;
	height: 14px;
	font-family: NanumGothic;
	font-size: 12px;
	font-weight: bold;
	text-align: left;
	color: #2066be;
	margin-top: 10px;
	margin-left: 48px;
	align-self: left;
`;

const LoginButton = styled.button`
	width: 300px;
	height: 36px;
	border-radius: 3px;
	background-color: #2066be;
	margin-top: 20px;
`;

const LoginText = styled.text`
	width: 46px;
	height: 17px;
	font-family: NanumGothic;
	font-size: 15px;
	font-weight: bold;
	text-align: center;
	color: #ffffff;
`;

const SignUpWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 48px;
  align-self: left;
`;

const SignUpText = styled.text`
	width: 104px;
	height: 14px;
	font-family: NanumGothic;
	font-size: 12px;
	text-align: left;
	color: #111111;
`;

const SignUpLink = styled.a`
	width: 46px;
	height: 14px;
	font-family: NanumGothic;
	font-size: 12px;
	font-weight: bold;
	text-align: left;
	color: #2066be;
	margin-left: 14px;
`;

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Background>
        <Helmet
          title="LoginPage"
          meta={[
            { name: 'description', content: 'Description of LoginPage' },
          ]}
        />
        <LoginWrapper>
          <Logo src={LogoImage} />
          <WelcomeText>
            {messages.welcome}
          </WelcomeText>
          <Input />
          <Input type="password" />
          <RecoverPasswordLink>
            {messages.recoverPassword}
          </RecoverPasswordLink>
          <LoginButton>
            <LoginText>
              {messages.login}
            </LoginText>
          </LoginButton>
          <SignUpWrapper>
            <SignUpText>
              {messages.signup.question}
            </SignUpText>
            <SignUpLink>
              {messages.signup.message}
            </SignUpLink>
          </SignUpWrapper>

        </LoginWrapper>
      </Background>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  LoginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
