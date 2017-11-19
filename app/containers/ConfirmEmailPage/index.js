/*
 *
 * ConfirmEmailPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectConfirmEmailPage from './selectors';
import { Creators as Actions } from './reducer';

export class ConfirmEmailPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.getUser = this.getUser.bind(this);
    this.confirmEmail = this.confirmEmail.bind(this);
    this.state = {
      TOKEN: '',
    };
  }

  render() {
    console.log("asdf");
    return (
      <div>
        <button value="인증" style={{width:50, height:50}} onClick={this.emailConfirm} />
        <br/>
        <button value="사용자 정보" style={{width: 50, height: 50}} onClick={this.getUser} />
      </div>
    );
  }

  emailConfirm() {
    this.props.confirmEmail(this.state.TOKEN);
  }

  getUser() {
    this.props.getUser();
  }
}

/*const mapStateToProps = (state) => ({
  test: 'test '

});*/

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(Actions.getUserRequest()),
  confirmEmail: (TOKEN) => dispatch(Actions.confirmEmailRequest(TOKEN))
});

export default connect(null, mapDispatchToProps)(ConfirmEmailPage);
