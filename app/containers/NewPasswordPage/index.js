// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { Creators as Actions } from './reducer';
// import messages from './messages';
import { makeSelectPage } from './selectors';

type Props = {
  params: Object,
  newPassword: (token: string, password: string) => void,
};

type State = {
  password: string,
};

export class newPasswordPage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      password: '',
    };
    (this: any).handleNewPassword = this.handleNewPassword.bind(this);
  }

  handleNewPassword(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.props.newPassword(this.props.params.reset_token, this.state.password);
  }

  render() {
    return (
      <div>
        <Helmet
          title="SNUEV - 새 비밀번호 설정"
          meta={[
            { name: 'description', content: '서울대학교 강의평가 서비스, SNUEV의 새 비밀번호 설정 페이지입니다.' },
          ]}
        />
        <form onSubmit={this.handleNewPassword}>
          <input
            type="password"
            value={this.state.password}
            onChange={({ target }) => this.setState({ password: target.value })} // eslint-disable-line
            placeholder="새 비밀번호"
          />
          <br />
          <button type="submit">
            비밀번호 변경
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  page: makeSelectPage(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  newPassword: (token: string, password: string) => dispatch(Actions.newPasswordRequest(token, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(newPasswordPage);
