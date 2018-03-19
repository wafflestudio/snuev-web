// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { Creators as Actions } from './reducer';
// import messages from './messages';
import { makeSelectIsFetching, makeSelectError } from './selectors';

type Props = {
  resetPassword: (State) => void,
};

type State = {
  username: string,
};

export class ResetPasswordPage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
    };
    (this: any).handleResetPassword = this.handleResetPassword.bind(this);
  }

  handleResetPassword(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.props.resetPassword(this.state);
  }

  render() {
    return (
      <div>
        <Helmet
          title="ResetPasswordPage"
          meta={[
            { name: 'description', content: 'Description of ResetPasswordPage' },
          ]}
        />
        <form onSubmit={this.handleResetPassword}>
          <input
            type="text"
            value={this.state.username}
            onChange={({ target }) => this.setState({ username: target.value })} // eslint-disable-line
            placeholder="아이디"
          />
          <br />
          <button type="submit">
            이메일 전송
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: makeSelectIsFetching(),
  error: makeSelectError(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  resetPassword: (credentials: { username: string }) => dispatch(Actions.resetPasswordRequest(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordPage);
