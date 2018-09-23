// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedHTMLMessage, injectIntl, IntlProvider } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';
import { Creators as Actions } from './reducer';
import messages from './messages';
import {
  BackButton,
  Background,
  BackHintText,
  BackText,
  BodyText,
  ContentContainer,
  CreateAccountText,
  EmailContainer,
  EmailIcon,
  EmailText,
  InnerContainer,
  ReturnButton,
  ReturnText,
  SignUpButton,
  SignUpForm,
  SignUpIcon,
  SignUpText,
  TitleText,
} from './index.style';
import Footer from '../../components/Footer';
import Input from './Input';
import DepartmentInput from './DepartmentInput';
import EmailInput from './EmailInput';
import DottedLine from '../../components/DottedLine';
import { makeSelectUser } from '../../global/selectors';
import { makeSelectDepartments, makeSelectPage } from './selectors';

type Department = {
  id: string,
  name: string,
};

type SignUp = {
  username: string,
  password: string,
  nickname: string,
  department_id: string,
};

type Props = {
  page: Map<string, any>,
  departments: any,
  user: any,
  router: { push: Function },
  signUp: (SignUp) => void,
  getDepartments: () => void,
};

type State = {
  username: string,
  password: string,
  nickname: string,
  department_id: string,
  usernameError: string,
  passwordError: string,
  nicknameError: string,
  departmentError: string,
};

export class SignUpPage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      nickname: '',
      department_id: '',
      usernameError: '',
      passwordError: '',
      nicknameError: '',
      departmentError: '',
    };
    (this: any).handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    this.props.getDepartments();
  }

  componentDidUpdate(prevProps: Props) {
    const signUpErrorPrev = prevProps.page.get('error');
    const signUpError = this.props.page.get('error');
    if (signUpErrorPrev !== signUpError && signUpError) {
      signUpError.forEach((error: Map<string, any>) => {
        if (error.get('title') === 'User already exists') {
          this.setState({ usernameError: messages.error.usernameExists });
        }
      });
    }
  }

  handleSignUp(event: Event) {
    event.preventDefault();
    let isValid = true;
    if (!this.state.username) {
      this.setState({ usernameError: messages.error.usernameBlank });
      isValid = false;
    }
    if (this.state.password.length < 8) {
      this.setState({ passwordError: messages.error.passwordValid });
      isValid = false;
    }
    if (!this.state.password) {
      this.setState({ passwordError: messages.error.passwordBlank });
      isValid = false;
    }
    if (!this.state.nickname) {
      this.setState({ nicknameError: messages.error.nicknameBlank });
      isValid = false;
    }
    if (!this.state.department_id) {
      this.setState({ departmentError: messages.error.departmentBlank });
      isValid = false;
    }
    if (isValid) {
      this.props.signUp(this.state);
    }
  }

  render() {
    const { user } = this.props;
    if (user) {
      if (user.get('isConfirmed')) {
        this.props.router.push('/');
        return (<div />);
      }
      return (
        <IntlProvider messages={messages}>
          <Background>
            <Helmet
              title="SNUEV - 회원가입"
              meta={[
              { name: 'description', content: '서울대학교 강의평가 서비스, SNUEV 회원가입 페이지입니다.' },
              ]}
            />
            <InnerContainer>
              <DottedLine />
              <ContentContainer>
                <EmailIcon />
                <TitleText>
                  <FormattedHTMLMessage id="completeTitle" />
                </TitleText>
                <BodyText>
                  <FormattedHTMLMessage id="completeBody" />
                </BodyText>
                <EmailContainer>
                  <EmailText>
                    {user.get('email')}
                  </EmailText>
                </EmailContainer>
              </ContentContainer>
              <DottedLine />
              <ReturnButton to="/">
                <ReturnText>
                  <FormattedHTMLMessage id="completeBack" />
                </ReturnText>
              </ReturnButton>
            </InnerContainer>
          </Background>
        </IntlProvider>
      );
    }
    return (
      <IntlProvider messages={messages}>
        <Background>
          <Helmet
            title="SNUEV - 회원가입"
            meta={[
              { name: 'description', content: '서울대학교 강의평가 서비스, SNUEV 회원가입 페이지입니다.' },
            ]}
          />
          <InnerContainer>
            <DottedLine />
            <ContentContainer>
              <SignUpForm onSubmit={this.handleSignUp}>
                <SignUpIcon />
                <CreateAccountText>
                  {messages.createAccount}
                </CreateAccountText>
                <div>
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
                </div>
                <DepartmentInput
                  departments={this.props.departments ? this.props.departments.toJS() : []}
                  onSelectDepartment={(department: Department) => this.setState({
                    department_id: department.id,
                    departmentError: '',
                  })}
                  error={this.state.departmentError}
                />
                <Input
                  type="text"
                  value={this.state.nickname}
                  onChange={({ target }) => this.setState({ // eslint-disable-line
                    nickname: target.value,
                    nicknameError: '',
                  })}
                  placeholder={messages.input.nicknameHint}
                  error={this.state.nicknameError}
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
                <SignUpButton type="submit">
                  <SignUpText>
                    {messages.signup}
                  </SignUpText>
                </SignUpButton>
                <BackButton to="/sign_in" />
                <BackText>
                  {messages.back.text}
                </BackText>
                <BackHintText>
                  {messages.back.hint}
                </BackHintText>
              </SignUpForm>
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
  user: makeSelectUser(),
  departments: makeSelectDepartments(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  signUp: (credentials: { username: string, password: string, nickname: string, department_id: string }) => dispatch(Actions.signUpRequest(credentials)),
  getDepartments: () => dispatch(Actions.getDepartmentsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(SignUpPage));
