// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { injectIntl, FormattedHTMLMessage, IntlProvider } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Creators as Actions } from './reducer';
import messages from './messages';
import {
  Background,
  InnerContainer,
  ContentContainer,
  EmailIcon,
  TitleText,
  BodyText,
  EmailContainer,
  EmailText,
  ReturnButton,
  ReturnText,
  SignUpForm,
  SignUpIcon,
  CreateAccountText,
  Input,
  UsernameInputText,
  DepartmentInput,
  SignUpButton,
  SignUpText,
  BackButton,
  BackText,
  BackHintText,
} from './index.style';
import DottedLine from '../../components/DottedLine';
import { makeSelectUser } from '../../global/selectors';
import { makeSelectPage, makeSelectDepartments } from './selectors';

type Props = {
  departments: any,
  user: any,
  router: { push: Function },
  signUp: (State) => void,
  getDepartments: () => void,
};

type State = {
  username: string,
  password: string,
  nickname: string,
  department_id: string,
};

export class SignUpPage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      nickname: '',
      department_id: '',
    };
    (this: any).handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    this.props.getDepartments();
  }

  handleSignUp(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.props.signUp(this.state);
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
              title="SignUpCompletePage"
              meta={[
                { name: 'description', content: 'Description of SignUpCompletePage' },
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
            title="SignUpPage"
            meta={[
              { name: 'description', content: 'Description of SignUpPage' },
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
                  <Input
                    type="text"
                    value={this.state.username}
                    onChange={({ target }) => this.setState({ username: target.value })} // eslint-disable-line
                    placeholder={messages.input.usernameHint}
                  />
                  <UsernameInputText>
                    <FormattedHTMLMessage id="usernameInputText" />
                  </UsernameInputText>
                </div>
                <Input
                  type="text"
                  value={this.state.nickname}
                  onChange={({ target }) => this.setState({ nickname: target.value })} // eslint-disable-line
                  placeholder={messages.input.nicknameHint}
                />
                <Input
                  type="password"
                  value={this.state.password}
                  onChange={({ target }) => this.setState({ password: target.value })} // eslint-disable-line
                  placeholder={messages.input.passwordHint}
                />
                <DepartmentInput
                  value={this.state.department_id}
                  onChange={({ target }) => this.setState({ department_id: target.value })} // eslint-disable-line
                >
                  {!!this.props.departments &&
                    this.props.departments.map((department: any, id: string) => (
                      <option value={department.get('id')} key={id}>
                        {department.get('name')}
                      </option>
                    ))
                  }
                </DepartmentInput>
                <SignUpButton type="submit">
                  <SignUpText>
                    {messages.signup}
                  </SignUpText>
                </SignUpButton>
                <BackButton to="/sign_in" />
                <BackText>
                  {messages.back.text}</BackText>
                <BackHintText>
                  {messages.back.hint}</BackHintText>
              </SignUpForm>
            </ContentContainer>
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
