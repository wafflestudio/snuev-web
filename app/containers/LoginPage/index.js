/*
 *
 * LoginPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectLoginPage from './selectors';
import { Creators as Actions } from './reducer';

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  usernameChange(event) {
    this.setState({ username: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onLoginRequest({ username: this.state.username, password: this.state.password });
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <label>
            아이디 :
            <input type="text" value={this.state.username} onChange={this.usernameChange}/>
          </label>
          <br/>
          <label>
            비밀번호 :
            <input type="password" value={this.state.password} onChange={this.passwordChange}/>
          </label>
          <br/>
          <input type="submit" value="로그인"/>
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  onLoginRequest: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  LoginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoginRequest: (data) => {
      dispatch(Actions.loginRequest(data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
