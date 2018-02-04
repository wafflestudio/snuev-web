/*
 *
 * ConfirmEmailPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectIsFetching, { makeSelectPayload, makeSelectError } from './selectors';
import { Creators as Actions } from './reducer';
import { Creators as GlobalActions } from 'global/reducer';

export class ConfirmEmailPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    //this.validate();
    this.confirmEmail = this.confirmEmail.bind(this);
    this.validate = this.validate.bind(this);
    this.confirmEmail();
  }

  render() {
    if (this.props.isFetching.isFetching) {
      return (
        <div>
          로딩중입니다.
        </div>
      );
    } else {
      if (this.props.payload) {
        return (
          <div>
            이메일이 인증에 성공하였습니다.
          </div>
        );
      } else {
        return (
          <div>
            이메일 인증에 실패하였습니다.
          </div>
        );
      }
    }
  }

  confirmEmail() {
    this.props.confirmEmail(this.props.params.confirmation_token);
  }

  //needs to be implementeds
  validate() {
    this.props.validate();
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: makeSelectIsFetching(),
  payload: makeSelectPayload(),
});


const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(Actions.getUserRequest()),
  confirmEmail: (TOKEN) => dispatch(Actions.confirmEmailRequest(TOKEN)),
  validate: () => dispatch(GlobalActions.validateRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmEmailPage);
