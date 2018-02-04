/*
 *
 * SignUpPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Creators as Actions } from './reducer';

export class SignUpPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      nickname: '',
      department: '컴퓨터공학부',
    };
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(event) {
    event.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    return (
      <div>
        <Helmet
          title="SignUpPage"
          meta={[
            { name: 'description', content: 'Description of SignUpPage' },
          ]}
        />
        <form onSubmit={this.handleSignUp}>
          <label>
            이메일 :
            <input
              type="text"
              value={this.state.username}
              onChange={(event) => this.setState({ username: event.target.value })}
            />
            @snu.ac.kr
          </label>
          <br />
          <label>
            비밀번호 :
            <input
              type="password"
              value={this.state.password}
              onChange={(event) => this.setState({ password: event.target.value })}
            />
          </label>
          <br />
          <label>
            닉네임 :
            <input
              type="text"
              value={this.state.nickname}
              onChange={(event) => this.setState({ nickname: event.target.value })}
            />
          </label>
          <br />
          <label>
            전공 학부 :
            <select
              value={this.state.department}
              onChange={(event) => this.setState({ department: event.target.value })}
            >
              <option value="컴퓨터공학부">컴퓨터공학부</option>
              <option value="전기전자공학부">전기전자공학부</option>
              <option value="영어영문학과">영어영문학과</option>
            </select>
          </label>
          <br />
          <input
            type="submit"
            value="완료"
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUp: ({ username, password, nickname }) => dispatch(Actions.signUpRequest({ username, password, nickname })),
});

export default connect(null, mapDispatchToProps)(SignUpPage);
