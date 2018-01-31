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
import {
  Background,
  LoginWrapper,
  Logo,
  WelcomeText,
  Input,
  RecoverPasswordLink,
  LoginButton,
  LoginText,
  SignUpWrapper,
  SignUpText,
  SignUpLink
} from './index.style'

import LogoImage from '../../images/logo.png'

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

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
          <Input
            type="text"
            value={this.state.username}
            onChange={(event) => this.setState({ username: event.target.value })}
            placeholder={messages.input.usernameHint}
          />
          <Input
            type="password"
            value={this.state.password}
            onChange={(event) => this.setState({ password: event.target.value })}
            placeholder={messages.input.passwordHint}
          />
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
