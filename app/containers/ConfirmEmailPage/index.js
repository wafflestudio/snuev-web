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
//import { Creators as GlobalActions } from '.../global/reducer';

export class ConfirmEmailPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    //validate();
    this.getUser = this.getUser.bind(this);
    this.confirmEmail = this.confirmEmail.bind(this);
    this.validate = this.validate.bind(this);
    this.confirmEmail();
  }

  render() {
    return (
      <div>
        <button value='인증' style={{width:50, height:50}} onClick={ this.confirmEmail } />
        <br/>
        <button value='사용자 정보' style={{width: 50, height: 50}} onClick={ this.getUser } />
      </div>
    );
  }

  confirmEmail() {
    this.props.confirmEmail(this.props.params.confirmation_token);
  }

  getUser() {
    this.props.getUser();
  }

  validate() {
    this.props.validate();
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(Actions.getUserRequest()),
  confirmEmail: (TOKEN) => dispatch(Actions.confirmEmailRequest(TOKEN)),
  validate: () => dispatch(GlobalActions.validateRequest())
});

export default connect(null, mapDispatchToProps)(ConfirmEmailPage);
