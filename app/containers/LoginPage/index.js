// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { IntlProvider, FormattedHTMLMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';
import DottedLine from '../../components/DottedLine';
import { Creators as Actions } from '../../global/reducer';
import { makeSelectGlobal } from '../../global/selectors';

import messages from './messages';
import {
  Background,
  LoginForm,
  InnerContainer,
  ContentContainer,
  Logo,
  WelcomeText,
  PermissionText,
  LoginButton,
  LoginText,
  ComponentsWrapper,
  SignUpWrapper,
  RecoverPasswordWrapper,
  MiniCircle,
  SignUpLink,
  RecoverPasswordLink,
} from './index.style';
import Footer from '../../components/Footer';
import Input from './Input';
import EmailInput from './EmailInput';

type Props = {
  signIn: ({ username: string, password: string }) => void,
  global: Map<string, any>,
  hideSearchFilter: () => void,
};

type State = {
  username: string,
  password: string,
  usernameError: string,
  passwordError: string,
};

export class LoginPage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
    };
    (this: any).handleSignIn = this.handleSignIn.bind(this);
  }

  componentDidUpdate(prevProps: Props) {
    const signInErrorPrev = prevProps.global.getIn(['signIn', 'error']);
    const signInError = this.props.global.getIn(['signIn', 'error']);
    if (signInErrorPrev !== signInError && signInError) {
      this.setState({ passwordError: messages.error.credentials });
    }
  }

  handleSignIn(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    const { username, password } = this.state;
    if (!username) {
      this.setState({ usernameError: messages.error.usernameBlank });
    }
    if (!password) {
      this.setState({ passwordError: messages.error.passwordBlank });
    }
    if (username && password) {
      this.props.signIn({ username: username.replace('@snu.ac.kr', ''), password });
      this.props.hideSearchFilter();
    }
  }

  render() {
    return (
      <IntlProvider messages={messages}>
        <Background>
          <Helmet
            title="SNUEV - 로그인"
            meta={[
              { name: 'description', content: '서울대학교 강의평가 서비스, SNUEV 로그인 페이지입니다.' },
            ]}
          />
          <InnerContainer>
            <DottedLine />
            <ContentContainer>
              <LoginForm onSubmit={this.handleSignIn}>
                <Logo />
                <WelcomeText>
                  <FormattedHTMLMessage id="welcome" />
                </WelcomeText>
                <PermissionText>
                  <FormattedHTMLMessage id="permission" />
                </PermissionText>
                <EmailInput
                  type="text"
                  value={this.state.username}
                  onChange={({ target }) => this.setState({ // eslint-disable-line
                    username: target.value,
                    usernameError: '',
                  })}
                  placeholder={messages.input.usernameHint}
                  error={this.state.usernameError}
                />
                <Input
                  type="password"
                  value={this.state.password}
                  onChange={({ target }) => this.setState({ // eslint-disable-line
                    password: target.value,
                    passwordError: '',
                  })}
                  placeholder={messages.input.passwordHint}
                  error={this.state.passwordError}
                />
                <LoginButton type="submit">
                  <LoginText>
                    {messages.login}
                  </LoginText>
                </LoginButton>
                <ComponentsWrapper>
                  <SignUpWrapper>
                    <MiniCircle />
                    <SignUpLink to="sign_up">
                      {messages.signup}
                    </SignUpLink>
                  </SignUpWrapper>
                  <RecoverPasswordWrapper>
                    <MiniCircle />
                    <RecoverPasswordLink to="reset_password">
                      {messages.recoverPassword}
                    </RecoverPasswordLink>
                  </RecoverPasswordWrapper>
                </ComponentsWrapper>
              </LoginForm>
            </ContentContainer>
            <Footer />
            <DottedLine />
          </InnerContainer>
        </Background>
      </IntlProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  global: makeSelectGlobal(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  signIn: (credentials: { username: string, password: string }) => dispatch(Actions.signInRequest(credentials)),
  hideSearchFilter: () => dispatch(Actions.hideSearchFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
