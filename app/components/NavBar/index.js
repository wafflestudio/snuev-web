// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';
import messages from './messages';
import NavSearch from '../../containers/NavSearch';
import { Creators as Actions, initialState } from '../../global/reducer';
import {
  makeSelectUser,
  makeSelectDepartments,
  makeSelectAppLayout,
  makeSelectSearchFilter,
} from '../../global/selectors';
import {
  NavBarWrapper,
  Logo,
  SnuttLogo,
  Search,
  NavMenu,
  NavBarInnerWrapper,
  SearchFilterIcon,
  SearchFilterOnIcon,
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
  // departments: Map<string, any>,
  appLayout: Map<string, any>,
  searchFilter: Map<string, any>,
  signOut: () => void,
  getDepartments: () => void,
  showSearchFilter: () => void,
  hideSearchFilter: () => void,
  showBookmark: () => void,
  hideBookmark: () => void,
  hideSideBar: () => void,
};

export class NavBar extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    (this: any).handleOnClickLogo = this.handleOnClickLogo.bind(this);
    (this: any).handleLogOut = this.handleLogOut.bind(this);
    (this: any).handleSearchFilter = this.handleSearchFilter.bind(this);
    (this: any).handleOnClickProfile = this.handleOnClickProfile.bind(this);
    (this: any).handleBookmark = this.handleBookmark.bind(this);
  }

  componentDidMount() {
    this.props.getDepartments();
  }

  handleOnClickLogo(event: Event) {
    event.preventDefault();
    this.props.hideSideBar();
    this.props.hideSearchFilter();
    this.props.hideBookmark();
    browserHistory.push('/');
  }

  handleLogOut(event: Event) {
    event.preventDefault();
    this.props.signOut();
    browserHistory.push('/');
    this.props.hideSearchFilter();
    this.props.hideBookmark();
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
    this.props.hideSearchFilter();
    this.props.hideBookmark();
    browserHistory.push('/profile');
  }

  handleBookmark(event: Event) {
    event.preventDefault();
    if (this.props.appLayout.get('showBookmark')) {
      this.props.hideBookmark();
    } else {
      this.props.showBookmark();
    }
  }

  render() {
    const { user, appLayout, searchFilter } = this.props;
    return (
      <NavBarWrapper>
        <NavBarInnerWrapper>
          <LogoButton onClick={this.handleOnClickLogo}>
            <Logo />
          </LogoButton>
          <Search>
            <NavSearch />
            {searchFilter.equals(initialState.get('searchFilter')) &&
              <SearchFilterIcon onClick={this.handleSearchFilter} open={appLayout.get('showSearchFilter')} />
            }
            {!searchFilter.equals(initialState.get('searchFilter')) &&
              <SearchFilterOnIcon onClick={this.handleSearchFilter} open={appLayout.get('showSearchFilter')} />
            }
          </Search>
          <NavMenu>
            <SnuttButton href="https://snutt.kr">
              <SnuttLogo alt="SNUTT" /><span className="navMenuText"><FormattedMessage {...messages.navItems.snutt} /></span>
            </SnuttButton>
            {user &&
              <React.Fragment>
                <BookmarkButton onClick={this.handleBookmark} open={appLayout.get('showBookmark')}>
                  <span className="navMenuText">
                    <FormattedMessage {...messages.navItems.bookmarks} />
                  </span>
                </BookmarkButton>
                <ProfileButton onClick={this.handleOnClickProfile}>
                  <span className="navMenuText">
                    <FormattedMessage
                      {...messages.navItems.profile}
                      values={{ nickname: user.get('nickname') }}
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
  searchFilter: makeSelectSearchFilter(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  signOut: () => dispatch(Actions.signOut()),
  getDepartments: () => dispatch(Actions.getDepartmentsRequest()),
  showSearchFilter: () => dispatch(Actions.showSearchFilter()),
  hideSearchFilter: () => dispatch(Actions.hideSearchFilter()),
  showBookmark: () => dispatch(Actions.showBookmark()),
  hideBookmark: () => dispatch(Actions.hideBookmark()),
  hideSideBar: () => dispatch(Actions.hideSideBar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
