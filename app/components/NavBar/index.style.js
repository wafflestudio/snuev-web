import React from 'react';
import styled from 'styled-components';

import { media } from '../../style-utils';
import LogoImage from '../../images/img-gnb-logo.png';
import SnuttLogoImage from '../../images/snutt_logo.svg';
import IconSearch from '../../images/ic-search.png';
import IconBookmark from '../../images/ic-bookmark.png';

export const NavBarWrapper = styled.header`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  width: 100%;
  height: ${(props) => props.theme.navBarHeight}px;
  background-color: rgba(255,255,255,.97);
  border-bottom: solid 1px rgba(0,0,0,.2);
  z-index: 1;
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
  height: 29px;
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
  box-sizing: border-box;
  max-width: 260px;
  margin: 0 20px;
  padding-left: 35px;
  line-height: 38px;
  height: 38px;
  border-bottom: solid 1px rgba(0,0,0,.6);
  background: url(${IconSearch}) no-repeat 0% 50%;
  background-size: 30px 30px;
`;

export const NavMenu = styled.ul`
  flex-direction: row;
  display: flex;
  margin: 0 0 0 auto;
  line-height: 40px;
  list-style: none;
  padding-left: 0;

  li {
    margin-left: 40px;

    button, a, span {
      font-size: ${(props) => props.theme.fontSize.body2}px;
      color: ${(props) => props.theme.color.body2};
    }

    &.bookmarks {
      padding-left: 20px;
      background: url(${IconBookmark}) no-repeat 0% 50%;
      background-size: 20px 20px;
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
