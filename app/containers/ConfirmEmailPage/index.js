// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';
import { Creators as Actions } from './reducer';
import { makeSelectPage } from './selectors';
import { getAuthToken } from '../../services/localStorage';

type Props = {
  page: Map<string, any>,
  params: Object,
  confirmEmail: (token: string) => void,
  resendEmail: () => void,
};

export class ConfirmEmailPage extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.confirmEmail(this.props.params.confirmation_token);
  }

  render() {
    if (this.props.page.getIn(['confirmEmail', 'isFetching'])) {
      return (
        <div>
          로딩중입니다.
        </div>
      );
    }
    if (this.props.page.getIn(['confirmEmail', 'success'])) {
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
          <button onClick={this.props.resendEmail}>
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
  page: makeSelectPage(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  confirmEmail: (token: string) => dispatch(Actions.confirmEmailRequest(token)),
  resendEmail: () => dispatch(Actions.resendEmailRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmEmailPage);
