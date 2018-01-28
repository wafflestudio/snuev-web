/**
*
* NavBar
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Icon } from 'react-fa';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const NavWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  margin: 0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #cccccc;
  background-color: white;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 36px;
  line-height: 40px;
  color: #0065e3;
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

function NavBar(props) {
  return (
    <NavWrapper>
      <Logo>
        <FormattedMessage {...messages.title} />
      </Logo>
      <Search>
        <form
          onSubmit={props.navBarOnSubmit}
        >
          <Icon name="search" />
          <input
            type="text"
            value={props.query}
            onChange={props.handleChange}
          />
        </form>
      </Search>
      <NavMenu>
        <li><FormattedMessage {...messages.navItems.blog} /></li>
        <li><FormattedMessage {...messages.navItems.profile} /></li>
        <li><FormattedMessage {...messages.navItems.logout} /></li>
      </NavMenu>
    </NavWrapper>
  );
}

NavBar.propTypes = {
  query: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  navBarOnSubmit: PropTypes.func.isRequired,
};

export default NavBar;
