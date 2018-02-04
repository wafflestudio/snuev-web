/*
 *
 * ConfirmEmailPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectIsFetching, { makeSelectPayload } from './selectors';
import { Creators as Actions } from './reducer';

export class ConfirmEmailPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.confirmEmail = this.confirmEmail.bind(this);
    this.confirmEmail();
  }

  confirmEmail() {
    this.props.confirmEmail(this.props.params.confirmation_token);
  }

  render() {
    if (this.props.isFetching.isFetching) {
      return (
        <div>
          로딩중입니다.
        </div>
      );
    }
    if (this.props.payload) {
      return (
        <div>
          이메일 인증에 성공하였습니다.
        </div>
      );
    }
    if (localStorage.getItem('auth_token')) {
      return (
        <div>
          이메일 인증에 실패하였습니다.
          <br />
          <button
            type="button"
          >
            이메일 재전송
          </button>
        </div>
      );
    }
    return (
      <div>
        유효하지 않은 페이지입니다.
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: makeSelectIsFetching(),
  payload: makeSelectPayload(),
});

const mapDispatchToProps = (dispatch) => ({
  confirmEmail: (TOKEN) => dispatch(Actions.confirmEmailRequest(TOKEN)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmEmailPage);
