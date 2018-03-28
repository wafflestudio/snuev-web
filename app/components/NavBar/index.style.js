import React from 'react';
import styled from 'styled-components';

import LogoImage from '../../images/logo.png';
import SnuttLogoImage from '../../images/snutt_logo.svg';

export const NavBarWrapper = styled.header`
  top: 0;
  position: fixed;
  display: flex;
  width: 100%;
  max-width: ${(props) => props.theme.appMaxWidth}px;
  justify-content: space-between;
  height: ${(props) => props.theme.navBarHeight}px;
  align-items: center;
  background-color: rgba(255,255,255,.97);
`;

const LogoFrame = styled.img`
  height: 25px;
`;

export const Logo = (props) => <LogoFrame src={LogoImage} {...props} />;

const SnuttLogoFrame = styled.img`
  width: 20px;
  height: 20px;
  margin-right: .5em;
`;

export const SnuttLogo = (props) => <SnuttLogoFrame src={SnuttLogoImage} {...props} />;

export const Search = styled.div`
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

export const NavMenu = styled.ul`
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

export const UserButton = styled.button`
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  cursor: pointer;
`;
