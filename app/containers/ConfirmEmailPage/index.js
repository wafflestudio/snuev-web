// @flow
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Creators as Actions } from './reducer';
import { makeSelectIsFetching, makeSelectSuccess, makeSelectError } from './selectors';
import { getAuthToken } from '../../services/localStorage';

type Props = {
  isFetching: boolean,
  error?: Object[],
  success: boolean,
  params: Object,
  confirmEmail: (token: string) => void,
};

export class ConfirmEmailPage extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.confirmEmail(this.props.params.confirmation_token);
  }

  render() {
    if (this.props.isFetching) {
      return (
        <div>
          로딩중입니다.
        </div>
      );
    }
    if (this.props.success) {
      return (
        <div>
          이메일 인증에 성공하였습니다.
        </div> 
      );
    }
    if (getAuthToken()) {
      return (
        <div>
          이메일 인증에 실패하였습니다.
          <br />
          <button>
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
  error: makeSelectError(),
  success: makeSelectSuccess(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  confirmEmail: (token: string) => dispatch(Actions.confirmEmailRequest(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmEmailPage);
