// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { Creators as Actions } from './reducer';
// import messages from './messages';
import withBars from '../../services/withBars';
import { makeSelectIsFetching, makeSelectError, makeSelectDepartments } from './selectors';
import { makeSelectUser } from '../../global/selectors';

type Props = {
  departments: any,
  user: any,
  updateProfile: (State) => void,
  getDepartments: () => void,
};

type State = {
  password: string,
  password_confirmation: string,
  nickname: string,
  department_id: string,
};

export class ProfilePage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      password: '',
      password_confirmation: '',
      nickname: '',
      department_id: '2',
    };
    (this: any).handleUpdateProfile = this.handleUpdateProfile.bind(this);
  }

  componentDidMount() {
    this.props.getDepartments();
  }

  componentWillReceiveProps() {
    this.setState({
      nickname: this.props.user.get('nickname'),
      department_id: this.props.user.get('department'),
    });
  }

  handleUpdateProfile(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.props.updateProfile(this.state);
  }

  render() {
    return (
      <div>
        <Helmet
          title="ProfilePage"
          meta={[
            { name: 'description', content: 'Description of ProfilePage' },
          ]}
        />
        <form onSubmit={this.handleUpdateProfile}>
          <input
            type="password"
            value={this.state.password}
            onChange={({ target }: { target: HTMLInputElement }) => this.setState({ password: target.value })}
            placeholder={'비밀번호'}
          />
          <br />
          <input
            type="password"
            value={this.state.password_confirmation}
            onChange={({ target }: { target: HTMLInputElement }) => this.setState({ password_confirmation: target.value })}
            placeholder={'비밀번호 확인'}
          />
          <br />
          <input
            type="text"
            value={this.state.nickname}
            onChange={({ target }: { target: HTMLInputElement }) => this.setState({ nickname: target.value })}
            placeholder={'별명'}
          />
          <br />
          <select
            value={this.state.department_id}
            onChange={({ target }: { target: any }) => this.setState({ department_id: target.value })}
          >
            {!!this.props.departments &&
              this.props.departments.map((department: any, id: number) => (
                <option value={department.get('id')} key={id}>
                  {department.get('name')}
                </option>
              ))
            }
          </select>
          <br />
          <button type="submit">
            개인정보 변경
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: makeSelectIsFetching(),
  error: makeSelectError(),
  departments: makeSelectDepartments(),
  user: makeSelectUser(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  updateProfile: (credentials: { password: string, password_confirmation: string, nickname: string, department_id: string }) => dispatch(Actions.updateProfileRequest(credentials)),
  getDepartments: () => dispatch(Actions.getDepartmentsRequest()),
});

export default withBars(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));
