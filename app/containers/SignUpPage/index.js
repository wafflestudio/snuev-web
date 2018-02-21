// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
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
import { makeSelectIsFetching, makeSelectError } from './selectors';

type Props = {
  signUp: (State) => void,
};

type State = {
  username: string,
  password: string,
  nickname: string,
  department: string,
};


export class SignUpPage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      nickname: '',
      department: '컴퓨터공학부',
    };
    (this: any).handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(event: SyntheticEvent<HTMLButtonElement>) {
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
            onChange={({ target }) => this.setState({ username: target.value })} // eslint-disable-line
            placeholder={messages.input.usernameHint}
          />
          <UsernameInputText>
            {messages.usernameInputText}
          </UsernameInputText>
          <Input
            type="password"
            value={this.state.password}
            onChange={({ target }) => this.setState({ password: target.value })} // eslint-disable-line
            placeholder={messages.input.passwordHint}
          />
          <Input
            type="text"
            value={this.state.nickname}
            onChange={({ target }) => this.setState({ nickname: target.value })} // eslint-disable-line
            placeholder={messages.input.nicknameHint}
          />
          <DepartmentInput
            value={this.state.department}
            onChange={({ target }) => this.setState({ department: target.value })} // eslint-disable-line
          >
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

const mapStateToProps = createStructuredSelector({
  isFetching: makeSelectIsFetching(),
  error: makeSelectError(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  signUp: (credentials: { username: string, password: string, nickname: string }) => dispatch(Actions.signUpRequest(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
