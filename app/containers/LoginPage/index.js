// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
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
import { makeSelectGlobal } from '../../global/selectors';

type Props = {
  signIn: (State) => void,
};

type State = {
  username: string,
  password: string,
};

export class LoginPage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    (this: any).handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn(event: SyntheticEvent<HTMLButtonElement>) {
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
            onChange={({ target }) => this.setState({ username: target.value })} // eslint-disable-line
            placeholder={messages.input.usernameHint}
          />
          <Input
            type="password"
            value={this.state.password}
            onChange={({ target }) => this.setState({ password: target.value })} // eslint-disable-line
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

const mapStateToProps = createStructuredSelector({
  global: makeSelectGlobal(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  signIn: (credentials: { username: string, password: string }) => dispatch(Actions.signInRequest(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
