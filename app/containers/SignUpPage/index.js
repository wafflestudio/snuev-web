/*
 *
 * SignUpPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Creators as Actions } from './reducer';
import messages from './messages';
import {
  Background,
  SignUpForm,
  Logo,
  CreateAccountText,
  Input,
  UsernameInputText,
  DepartmentInput,
  SignUpButton,
  SignUpText,
  LoginWrapper,
  LoginText,
  LoginLink,
} from './index.style';

export class SignUpPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      nickname: '',
      department: '컴퓨터공학부',
    };
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(event) {
    event.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    return (
      <Background>
        <Helmet
          title="SignUpPage"
          meta={[
            { name: 'description', content: 'Description of SignUpPage' },
          ]}
        />
        <SignUpForm onSubmit={this.handleSignUp}>
          <Logo />
          <CreateAccountText>
            {messages.createAccount}
          </CreateAccountText>
          <Input
            type="text"
            value={this.state.username}
            onChange={(event) => this.setState({ username: event.target.value })}
            placeholder={messages.input.emailHint}
          />
          <UsernameInputText>
            {messages.usernameInputText}
          </UsernameInputText>
          <Input
            type="password"
            value={this.state.password}
            onChange={(event) => this.setState({ password: event.target.value })}
            placeholder={messages.input.passwordHint}
          />
          <Input
            type="text"
            value={this.state.nickname}
            onChange={(event) => this.setState({ nickname: event.target.value })}
            placeholder={messages.input.nicknameHint}
          />
          <DepartmentInput>
              value={this.state.department}
              onChange={(event) => this.setState({ department: event.target.value })}>
              <option value="컴퓨터공학부">컴퓨터공학부</option>
              <option value="전기전자공학부">전기전자공학부</option>
              <option value="영어영문학과">영어영문학과</option>
          </DepartmentInput>
          <SignUpButton type="submit">
            <SignUpText>
              {messages.signup}
            </SignUpText>
          </SignUpButton>
          <LoginWrapper>
            <LoginText>
              {messages.login.question}
            </LoginText>
            <LoginLink to="sign_in">
              {messages.login.message}
            </LoginLink>
          </LoginWrapper>
        </SignUpForm>
      </Background>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUp: ({ username, password, nickname }) => dispatch(Actions.signUpRequest({ username, password, nickname })),
});

export default connect(null, mapDispatchToProps)(SignUpPage);
