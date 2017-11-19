/*
 *
 * SignupPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectSignupPage from './selectors';
import { Creators as Actions } from './reducer';

export class SignupPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      nickname: '',
      department: '컴퓨터공학부',
    };
    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.passwordConfirmationChange = this.passwordConfirmationChange.bind(this);
    this.nicknameChange = this.nicknameChange.bind(this);
    this.departmentChange = this.departmentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nameChange(event) {
    this.setState({ name: event.target.value });
  }

  emailChange(event) {
    this.setState({ username: event.target.value, email: `${event.target.value}@snu.ac.kr` });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  passwordConfirmationChange(event) {
    this.setState({ passwordConfirmation: event.target.value });
  }

  nicknameChange(event) {
    this.setState({ nickname: event.target.value });
  }

  departmentChange(event) {
    this.setState({ department: event.target.value });
  }

  handleSubmit(e) {
    if (this.state.password === this.state.passwordConfirmation) {
      e.preventDefault();
      this.props.onSignupRequest({ username: this.state.username, password: this.state.password, nickname: this.state.nickname });
    } else {
      alert('비밀번호를 확인하세요.');
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            이름 :
            <input type="text" value={this.state.name} onChange={this.nameChange}/>
          </label>
          <br/>
          <label>
            이메일 :
            <input type="text" value={this.state.username} onChange={this.emailChange}/>
            @snu.ac.kr
          </label>
          <br/>
          <label>
            비밀번호 :
            <input type="password" value={this.state.password} onChange={this.passwordChange}/>
          </label>
          <br/>
          <label>
            비밀번호 확인 :
            <input type="password" value={this.state.passwordConfirmation} onChange={this.passwordConfirmationChange}/>
          </label>
          <br/>
          <label>
            닉네임 :
            <input type="text" value={this.state.nickname} onChange={this.nicknameChange}/>
          </label>
          <br/>
          <label>
            전공 학부 :
            <select value={this.state.department} onChange={this.departmentChange}>
              <option value="컴퓨터공학부">컴퓨터공학부</option>
              <option value="전기전자공학부">전기전자공학부</option>
              <option value="영어영문학과">영어영문학과</option>
            </select>
          </label>
          <br/>
          <input type="submit" value="완료"/>
        </form>
      </div>

    );
  }
}

SignupPage.propTypes = {
  onSignupRequest: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  SignupPage: makeSelectSignupPage()
});

function mapDispatchToProps(dispatch) {
  return {
    onSignupRequest: (data) => {
      dispatch(Actions.signupRequest(data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
