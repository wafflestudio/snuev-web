// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { browserHistory, Link } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';
import messages from './messages';
import NavSearch from '../../containers/NavSearch';
import { Creators as Actions } from '../../global/reducer';
import { makeSelectUser, makeSelectDepartments, makeSelectAppLayout } from '../../global/selectors';
import { NavBarWrapper, Logo, SnuttLogo, Search, NavMenu, NavBarInnerWrapper, SearchFilterIcon } from './index.style';

type Props = {
  user: any,
  departments: Map<string, any>,
  appLayout: Map<string, any>,
  signOut: () => void,
  getDepartments: () => void,
  showSearchFilter: () => void,
  hideSearchFilter: () => void,
  hideSideBar: () => void,
};

export class NavBar extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    (this: any).handleLogOut = this.handleLogOut.bind(this);
    (this: any).handleSearchFilter = this.handleSearchFilter.bind(this);
    (this: any).handleOnClickProfile = this.handleOnClickProfile.bind(this);
  }

  componentDidMount() {
    this.props.getDepartments();
  }

  handleLogOut(event: Event) {
    event.preventDefault();
    this.props.signOut();
    browserHistory.push('/');
  }

  handleSearchFilter(event: Event) {
    event.preventDefault();
    if (this.props.appLayout.get('showSearchFilter')) {
      this.props.hideSearchFilter();
    } else {
      this.props.showSearchFilter();
    }
  }

  handleOnClickProfile(event: Event) {
    event.preventDefault();
    this.props.hideSideBar();
    browserHistory.push('/profile');
  }

  render() {
    const { user } = this.props;
    return (
      <NavBarWrapper>
        <NavBarInnerWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <Search>
            <NavSearch />
            <SearchFilterIcon onClick={this.handleSearchFilter} />
          </Search>
          <NavMenu>
            <li>
              <a href="https://snutt.kr">
                <SnuttLogo alt="SNUTT" /><span className="navMenuText"><FormattedMessage {...messages.navItems.snutt} /></span>
              </a>
            </li>
            {user &&
              <React.Fragment>
                <button>
                  <li className="bookmarks">
                    <span className="navMenuText">
                      <FormattedMessage {...messages.navItems.bookmarks} />
                    </span>
                  </li>
                </button>
                <button onClick={this.handleOnClickProfile}>
                  <li className="profile">
                    <span className="navMenuText">
                      <FormattedMessage
                        {...messages.navItems.profile}
                        values={{ nickname: this.props.user.get('nickname') }}
                      />
                    </span>
                  </li>
                </button>
                <button onClick={this.handleLogOut}>
                  <li className="logout">
                    <span className="navMenuText">
                      <FormattedMessage {...messages.navItems.logout} />
                    </span>
                  </li>
                </button>
              </React.Fragment>
            }
            {!user &&
              <React.Fragment>
                <Link to="/sign_up">
                  <li className="signUp">
                    <span className="navMenuText">
                      <FormattedMessage {...messages.navItems.signUp} />
                    </span>
                  </li>
                </Link>
                <Link to="/sign_in">
                  <li className="login">
                    <span className="navMenuText">
                      <FormattedMessage {...messages.navItems.login} />
                    </span>
                  </li>
                </Link>
              </React.Fragment>
            }
          </NavMenu>
        </NavBarInnerWrapper>
      </NavBarWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  departments: makeSelectDepartments(),
  appLayout: makeSelectAppLayout(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  signOut: () => dispatch(Actions.signOut()),
  getDepartments: () => dispatch(Actions.getDepartmentsRequest()),
  showSearchFilter: () => dispatch(Actions.showSearchFilter()),
  hideSearchFilter: () => dispatch(Actions.hideSearchFilter()),
  hideSideBar: () => dispatch(Actions.hideSideBar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
