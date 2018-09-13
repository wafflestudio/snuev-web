// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';
import messages from './messages';
import NavSearch from '../../containers/NavSearch';
import { Creators as Actions } from '../../global/reducer';
import { makeSelectUser, makeSelectDepartments, makeSelectAppLayout } from '../../global/selectors';
import {
  NavBarWrapper,
  Logo,
  SnuttLogo,
  Search,
  NavMenu,
  NavBarInnerWrapper,
  SearchFilterIcon,
  SnuttButton,
  BookmarkButton,
  ProfileButton,
  LogoutButton,
  LoginButton,
  SignUpButton,
  LogoButton,
} from './index.style';

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
    (this: any).handleOnClickLogo = this.handleOnClickLogo.bind(this);
    (this: any).handleLogOut = this.handleLogOut.bind(this);
    (this: any).handleSearchFilter = this.handleSearchFilter.bind(this);
    (this: any).handleOnClickProfile = this.handleOnClickProfile.bind(this);
  }

  componentDidMount() {
    this.props.getDepartments();
  }

  handleOnClickLogo(event: Event) {
    event.preventDefault();
    this.props.hideSideBar();
    browserHistory.push('/');
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
          <LogoButton onClick={this.handleOnClickLogo}>
            <Logo />
          </LogoButton>
          <Search>
            <NavSearch />
            <SearchFilterIcon onClick={this.handleSearchFilter} />
          </Search>
          <NavMenu>
            <SnuttButton href="https://snutt.kr">
              <SnuttLogo alt="SNUTT" /><span className="navMenuText"><FormattedMessage {...messages.navItems.snutt} /></span>
            </SnuttButton>
            {user &&
              <React.Fragment>
                <BookmarkButton>
                  <span className="navMenuText">
                    <FormattedMessage {...messages.navItems.bookmarks} />
                  </span>
                </BookmarkButton>
                <ProfileButton onClick={this.handleOnClickProfile}>
                  <span className="navMenuText">
                    <FormattedMessage
                      {...messages.navItems.profile}
                      values={{ nickname: this.props.user.get('nickname') }}
                    />
                  </span>
                </ProfileButton>
                <LogoutButton onClick={this.handleLogOut}>
                  <span className="navMenuText">
                    <FormattedMessage {...messages.navItems.logout} />
                  </span>
                </LogoutButton>
              </React.Fragment>
            }
            {!user &&
              <React.Fragment>
                <SignUpButton to="/sign_up">
                  <span className="navMenuText">
                    <FormattedMessage {...messages.navItems.signUp} />
                  </span>
                </SignUpButton>
                <LoginButton to="/sign_in">
                  <span className="navMenuText">
                    <FormattedMessage {...messages.navItems.login} />
                  </span>
                </LoginButton>
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
