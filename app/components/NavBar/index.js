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
import { NavBarWrapper, Logo, SnuttLogo, Search, NavMenu, NavBarInnerWrapper, SearchFilterIcon, LogoutButton } from './index.style';

type Props = {
  user: any,
  departments: Map<string, any>,
  appLayout: Map<string, any>,
  signOut: () => void,
  getDepartments: () => void,
  showSearchFilter: () => void,
  hideSearchFilter: () => void,
};

export class NavBar extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    (this: any).handleLogOut = this.handleLogOut.bind(this);
    (this: any).handleSearchFilter = this.handleSearchFilter.bind(this);
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
                <li className="bookmarks">
                  <button>
                    <FormattedMessage {...messages.navItems.bookmarks} />
                  </button>
                </li>
                <li>
                  <Link to="/profile">
                    <FormattedMessage
                      id="user.nickname"
                      defaultMessage="{nickname} 님"
                      values={{
                        nickname: this.props.user.get('nickname'),
                      }}
                    />
                  </Link>
                </li>
                <li>
                  <LogoutButton onClick={this.handleLogOut}>
                    <FormattedMessage {...messages.navItems.logout} />
                  </LogoutButton>
                </li>
              </React.Fragment>
            }
            {!user &&
              <li>
                <Link to="/sign_in">
                  <FormattedMessage {...messages.navItems.login} />
                </Link>
              </li>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
