import React from 'react';
import styled from 'styled-components';

import { media } from '../../style-utils';
import LogoImage from '../../images/logo.png';
import SnuttLogoImage from '../../images/snutt_logo.svg';

export const NavBarWrapper = styled.header`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  width: 100%;
  height: ${(props) => props.theme.navBarHeight}px;
  background-color: rgba(255,255,255,.97);
  border-bottom: solid 1px rgba(0,0,0,.2);
`;

export const NavBarInnerWrapper = styled.div`
  max-width: ${(props) => props.theme.appMaxWidth}px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.desktop`
    margin: 0 30px;
  `}
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
  flex-grow: 1;
  flex-shrink: 0;
  max-width: 320px;
  margin: 0 20px;
  line-height: 44px;
  height: 44px;
  border-radius: 22px;
  border: solid 1px #979797;

  input {
    width: 100%;
    height: 100%;
    margin: 0 20px;
    font-size: ${(props) => props.theme.fontSize.body1}px;

    &:focus {
      outline: none;
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
    margin-left: 44px;

    button, a, span {
      font-size: ${(props) => props.theme.fontSize.body2}px;
      color: ${(props) => props.theme.color.body2};
    }
    &:first-child {
      margin-left: 0;
    }

    ${media.desktop`
      margin-left: 20px;
    `}
  }
`;

export const UserButton = styled.button`
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  cursor: pointer;
`;
