/*
 *
 * LoginPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Creators as Actions } from '../../global/reducer';
import messages from './messages';
import {
  Background,
  LoginForm,
  Logo,
  WelcomeText,
  Input,
  RecoverPasswordLink,
  LoginButton,
  LoginText,
  SignUpWrapper,
  SignUpText,
  SignUpLink,
} from './index.style';

export class LoginPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn(event) {
    event.preventDefault();
    this.props.signIn(this.state);
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
        <LoginForm onSubmit={this.handleSignIn}>
          <Logo />
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
          <LoginButton type="submit">
            <LoginText>
              {messages.login}
            </LoginText>
          </LoginButton>
          <SignUpWrapper>
            <SignUpText>
              {messages.signup.question}
            </SignUpText>
            <SignUpLink to="sign_up">
              {messages.signup.message}
            </SignUpLink>
          </SignUpWrapper>
        </LoginForm>
      </Background>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signIn: ({ username, password }) => dispatch(Actions.signInRequest({ username, password })),
});

export default connect(null, mapDispatchToProps)(LoginPage);
