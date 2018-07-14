// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { browserHistory, Link } from 'react-router';
import { createStructuredSelector } from 'reselect';
import messages from './messages';
import NavSearch from '../../containers/NavSearch';
import { Creators as Actions } from '../../global/reducer';
import { makeSelectUser } from '../../global/selectors';
import { NavBarWrapper, Logo, SnuttLogo, Search, NavMenu, NavBarInnerWrapper } from './index.style';

type Props = {
  user: any,
  signOut: () => void,
};

export class NavBar extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    (this: any).handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.props.signOut();
    browserHistory.push('/');
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
                  <button onClick={this.handleLogOut}>
                    <FormattedMessage {...messages.navItems.logout} />
                  </button>
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
});

const mapDispatchToProps = (dispatch: Function) => ({
  signOut: () => dispatch(Actions.signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
