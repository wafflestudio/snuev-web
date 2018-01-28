/**
*
* NavBar
*
*/

import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-fa';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import LogoImg from '../../images/logo.png';
import SnuttLogoImg from '../../images/snutt_logo.svg';
import NavSearch from '../NavSearch';

const NavBarWrapper = styled.header`
  grid-area: navbar;
  margin: 0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #cccccc;
  background-color: white;
`;

const Logo = styled.img`
  height: 25px;
`;

const SnuttLogo = styled.img`
  width: 20px;
  height: 20px;
  margin-right: .5em;
`;

const Search = styled.div`
  flex-basis: 30%;
  margin-left: 20px;
  line-height: 40px;

  input {
    flex-grow: 1;
    margin-left: 5px;
    padding: 6px 10px;
    width: calc(100% - 30px);
    font-size: 16px;
    border-bottom: 2px solid #cccccc;

    &:focus {
      outline: none;
      border-color: #aaaaaa;
    }
  }
`;

const NavMenu = styled.ul`
  flex-direction: row;
  display: flex;
  margin: 0 0 0 auto;
  line-height: 40px;
  list-style: none;
  padding-left: 0;

  li {
    margin-left: 20px;
    font-size: 15px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

function NavBar() {
  return (
    <NavBarWrapper>
      <Logo src={LogoImg} />
      <Search>
        <Icon name="search" />
        <NavSearch />
      </Search>
      <NavMenu>
        <li>
          <a href="https://snutt.kr">
            <SnuttLogo src={SnuttLogoImg} alt="SNUTT" /><FormattedMessage {...messages.navItems.snutt} />
          </a>
        </li>
        <li><FormattedMessage {...messages.navItems.blog} /></li>
        <li><FormattedMessage {...messages.navItems.profile} /></li>
        <li><FormattedMessage {...messages.navItems.logout} /></li>
      </NavMenu>
    </NavBarWrapper>
  );
}

NavBar.propTypes = {

};

export default NavBar;
