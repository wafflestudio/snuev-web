// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { ClipLoader } from 'react-spinners';
import { createStructuredSelector } from 'reselect';
import DottedLine from '../../components/DottedLine';
import Footer from '../../components/Footer';
import { Creators as Actions } from './reducer';
import messages from './messages';
import { makeSelectPage } from './selectors';
import Input from './Input';
import {
  BackButton,
  Background,
  ChangeButton,
  NewPasswordText,
  ButtonText,
  ContentContainer,
  Form,
  InnerContainer,
  ResetPasswordIcon,
  ResetPasswordCompletedIcon,
  BodyText,
  LoginButton,
  ArrowRightIcon,
} from './index.style';

type Props = {
  page: Map<string, any>,
  params: Object,
  newPassword: ({ reset_token: string, password: string }) => void,
};

type State = {
  password: string,
  confirmationPassword: string,
  passwordCountError: string,
  passwordConfirmationError: string,
};

export class newPasswordPage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      password: '',
      confirmationPassword: '',
      passwordCountError: '',
      passwordConfirmationError: '',
    };
    (this: any).handleNewPassword = this.handleNewPassword.bind(this);
  }

  handleNewPassword(event: Event) {
    event.preventDefault();
    let isValid = true;
    if (this.state.password.length < 8) {
      this.setState({ passwordCountError: messages.error.count });
      isValid = false;
    } else {
      this.setState({ passwordCountError: '' });
      isValid = true;
    }
    if (this.state.password !== this.state.confirmationPassword) {
      this.setState({ passwordConfirmationError: messages.error.confirmation });
      isValid = false;
    } else {
      this.setState({ passwordConfirmationError: '' });
      isValid = true;
    }
    if (isValid) {
      this.props.newPassword({ reset_token: this.props.params.reset_token, password: this.state.password });
    }
  }

  render() {
    const { page } = this.props;
    if (page.getIn(['newPassword', 'isFetching'])) {
      return (
        <div>
          <ClipLoader />
        </div>
      );
    }
    if (page.getIn(['newPassword', 'success'])) {
      return (
        <IntlProvider messages={messages}>
          <Background>
            <Helmet
              title="SNUEV - 새 비밀번호 설정"
              meta={[
                { name: 'description', content: '서울대학교 강의평가 서비스, SNUEV의 새 비밀번호 설정 페이지입니다.' },
              ]}
            />
            <InnerContainer>
              <DottedLine />
              <ContentContainer>
                <ResetPasswordCompletedIcon />
                <NewPasswordText>
                  {messages.newPasswordCompleted}
                </NewPasswordText>
                <BodyText>
                  {messages.safelyChanged}
                </BodyText>
                <LoginButton to="/sign_in">
                  <ButtonText>
                    {messages.login}
                  </ButtonText>
                  <ArrowRightIcon />
                </LoginButton>
              </ContentContainer>
              <Footer />
              <DottedLine />
            </InnerContainer>
          </Background>
        </IntlProvider>
      );
    }
    return (
      <IntlProvider messages={messages}>
        <Background>
          <Helmet
            title="SNUEV - 새 비밀번호 설정"
            meta={[
            { name: 'description', content: '서울대학교 강의평가 서비스, SNUEV의 새 비밀번호 설정 페이지입니다.' },
            ]}
          />
          <InnerContainer>
            <DottedLine />
            <ContentContainer>
              <Form onSubmit={this.handleNewPassword}>
                <ResetPasswordIcon />
                <NewPasswordText>
                  {messages.newPassword}
                </NewPasswordText>
                <Input
                  type="password"
                  value={this.state.password}
                  onChange={({ target }) => this.setState({ // eslint-disable-line
                    password: target.value,
                    passwordCountError: '',
                  })}
                  placeholder={messages.input.passwordHint}
                  error={this.state.passwordCountError}
                />
                <Input
                  type="password"
                  value={this.state.confirmationPassword}
                  onChange={({ target }) => this.setState({ // eslint-disable-line
                    confirmationPassword: target.value,
                    passwordConfirmationError: '',
                  })}
                  placeholder={messages.input.confirmationPasswordHint}
                  error={this.state.passwordConfirmationError}
                />
                <ChangeButton type="submit">
                  <ButtonText>
                    {messages.change}
                  </ButtonText>
                </ChangeButton>
                <BackButton to="/sign_in" />
              </Form>
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
  page: makeSelectPage(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  newPassword: (credentials: { reset_token: string, password: string }) => dispatch(Actions.newPasswordRequest(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(newPasswordPage);
