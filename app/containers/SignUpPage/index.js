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
import { makeSelectPage, makeSelectDepartments } from './selectors';

type Props = {
  departments: any,
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
  page: makeSelectPage(),
  departments: makeSelectDepartments(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  signUp: (credentials: { username: string, password: string, nickname: string, department_id: string }) => dispatch(Actions.signUpRequest(credentials)),
  getDepartments: () => dispatch(Actions.getDepartmentsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
