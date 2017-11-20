/**
*
* NavBar
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  margin: 0;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;

  border-bottom: 1px solid #cccccc;
  background-color: white;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 36px;
  line-height: 36px;
  color: #0065e3;
`;

const SearchInput = styled.input`
  font-size: 14px;
  margin-left: 30px;
  border-bottom: 2px solid #cccccc;

  &:focus {
    outline: none;
    border-color: #aaaaaa;
  }
`;

function NavBar() {
  return (
    <Wrapper>
      <Logo>
        <FormattedMessage {...messages.title} />
      </Logo>
      <SearchInput type="text" />
    </Wrapper>
  );
}

NavBar.propTypes = {

};

export default NavBar;
