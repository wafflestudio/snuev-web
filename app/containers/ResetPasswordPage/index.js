// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { IntlProvider, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Creators as Actions } from './reducer';
import messages from './messages';
import { makeSelectPage } from './selectors';
import DottedLine from '../../components/DottedLine';
import Footer from '../../components/Footer';
import EmailInput from './EmailInput';
import {
  BackButton,
  Background,
  ConfirmationButton,
  ConfirmationText,
  ContentContainer,
  Form,
  InnerContainer,
  ResetPasswordIcon,
  ResetPasswordText,
} from './index.style';

type Props = {
  resetPassword: (State) => void,
};

type State = {
  username: string,
};

export class ResetPasswordPage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
    };
    (this: any).handleResetPassword = this.handleResetPassword.bind(this);
  }

  handleResetPassword(event: Event) {
    event.preventDefault();
    this.props.resetPassword(this.state);
  }

  render() {
    return (
      <IntlProvider messages={messages}>
        <Background>
          <Helmet
            title="SNUEV - 비밀번호 재설정"
            meta={[
            { name: 'description', content: '서울대학교 강의평가 서비스, SNUEV의 비밀번호 재설정 페이지입니다.' },
            ]}
          />
          <InnerContainer>
            <DottedLine />
            <ContentContainer>
              <Form onSubmit={this.handleResetPassword}>
                <ResetPasswordIcon />
                <ResetPasswordText>
                  {messages.resetPassword}
                </ResetPasswordText>
                <EmailInput
                  type="text"
                  value={this.state.username}
                onChange={({ target }) => this.setState({ username: target.value })} // eslint-disable-line
                  placeholder={messages.input.usernameHint}
                />
                <ConfirmationButton type="submit">
                  <ConfirmationText>
                    {messages.confirmation}
                  </ConfirmationText>
                </ConfirmationButton>
                <BackButton to="sign_in" />
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
  resetPassword: (credentials: { username: string }) => dispatch(Actions.resetPasswordRequest(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ResetPasswordPage));
