/**
*
* NavBar
*
*/

import React from 'react';
import { Icon } from 'react-fa';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import NavSearch from '../../containers/NavSearch';

import { NavBarWrapper, Logo, SnuttLogo, Search, NavMenu } from './index.style';

const NavBar = () => (
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
      <li><FormattedMessage {...messages.navItems.blog} /></li>
      <li><FormattedMessage {...messages.navItems.profile} /></li>
      <li><FormattedMessage {...messages.navItems.logout} /></li>
    </NavMenu>
  </NavBarWrapper>
);

export default NavBar;
