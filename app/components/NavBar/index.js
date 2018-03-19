// @flow
import React from 'react';
import { Icon } from 'react-fa';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import messages from './messages';
import NavSearch from '../NavSearch';
import { Creators as Actions } from '../../global/reducer';
import { makeSelectUser } from '../../global/selectors';
import { NavBarWrapper, Logo, SnuttLogo, Search, NavMenu } from './index.style';

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
    if (this.props.user) {
      return (
        <NavBarWrapper>
          <Logo />
          <Search>
            <Icon name="search" />
            <NavSearch />
          </Search>
          <NavMenu>
            <li>
              <a href="https://snutt.kr">
                <SnuttLogo alt="SNUTT" /><FormattedMessage {...messages.navItems.snutt} />
              </a>
            </li>
            <li>
              <FormattedMessage
                id="user.nickname"
                defaultMessage="{nickname} 님"
                values={{
                  nickname: this.props.user.get('nickname'),
                }}
              />
            </li>
            <li>
              <button onClick={this.handleLogOut}>
                <FormattedMessage {...messages.navItems.logout} />
              </button>
            </li>
          </NavMenu>
        </NavBarWrapper>
      );
    }
    return (
      <NavBarWrapper>
        <Logo />
        <Search>
          <Icon name="search" />
          <NavSearch />
        </Search>
        <NavMenu>
          <li>
            <a href="https://snutt.kr">
              <SnuttLogo alt="SNUTT" /><FormattedMessage {...messages.navItems.snutt} />
            </a>
          </li>
          <li>
            <a href="/sign_in">
              <FormattedMessage {...messages.navItems.login} />
            </a>
          </li>
        </NavMenu>
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
