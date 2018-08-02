// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { IntlProvider, FormattedHTMLMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
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
  Input,
  LoginButton,
  LoginText,
  CircleTextWrapper,
  MiniCircle,
  SignUpLink,
  RecoverPasswordLink,
  Footer,
  SnuevTeamWrapper,
  SnuevGithubWrapper,
  DeveloperWrapper,
} from './index.style';

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
      <IntlProvider messages={messages}>
        <Background>
          <Helmet
            title="LoginPage"
            meta={[
              { name: 'description', content: 'Description of LoginPage' },
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
                <CircleTextWrapper>
                  <MiniCircle />
                  <SignUpLink to="sign_up">
                    {messages.signup}
                  </SignUpLink>
                </CircleTextWrapper>
                <CircleTextWrapper>
                  <MiniCircle />
                  <RecoverPasswordLink to="reset_password">
                    {messages.recoverPassword}
                  </RecoverPasswordLink>
                </CircleTextWrapper>
                <LoginButton type="submit">
                  <LoginText>
                    {messages.login}
                  </LoginText>
                </LoginButton>
              </LoginForm>
            </ContentContainer>
            <Footer>
              <SnuevTeamWrapper>
                {messages.snuevTeam}
              </SnuevTeamWrapper>
              <SnuevGithubWrapper>
                {messages.snuevGithub}
              </SnuevGithubWrapper>
              <DeveloperWrapper>
                {messages.developer}
              </DeveloperWrapper>
            </Footer>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
