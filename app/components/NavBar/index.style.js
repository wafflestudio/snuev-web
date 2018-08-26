// @flow
import React from 'react';
import styled from 'styled-components';

import { media, typo } from '../../style-utils';
import LogoImage from '../../images/img-gnb-logo@2x.png';
import SnuttLogoImage from '../../images/snutt_logo.svg';
import IconSearch from '../../images/ic-search@2x.png';
import IconBookmark from '../../images/ic-bookmark.png';
import IconBookmarkHover from '../../images/ic-bookmark-hover.png';
import IconProfile from '../../images/ic-profile-normal.png';
import IconProfileHover from '../../images/ic-profile-hover.png';
import IconLogin from '../../images/ic-login-normal.png';
import IconLoginHover from '../../images/ic-login-hover.png';
import IconLogout from '../../images/ic-logout-normal.png';
import IconLogoutHover from '../../images/ic-logout-hover.png';
import DetailSearchImage from '../../images/ic-detailsearch-normal.png';

type Props = {
  theme: any,
};

export const NavBarWrapper = styled.header`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  width: 100%;
  height: ${(props: Props) => props.theme.navBarHeight}px;
  background-color: rgba(255,255,255,.97);
  border-bottom: solid 1px rgba(0,0,0,0.1);
  z-index: 1;
  ${media.tablet`
    .navMenuText {
      display: none;
    }
  `}
  ${media.phone`
    height: ${(props: Props) => props.theme.mobileNavBarHeight}px;

    .navMenuText {
      display: none;
    }

    .focusLecture & {
      display: none;
    }
  `}
  display: flex;
  justify-content: center;
`;

export const NavBarInnerWrapper = styled.div`
  max-width: ${(props: Props) => props.theme.appMaxWidth}px;
  width: 100%;
  margin: 0 30px;
  height: 100%;
  display: grid;
  grid-template-columns: 110px 260px auto;
  grid-column-gap: 20px;
  grid-template-areas: "logo search navmenu";
  align-items: center;
  ${media.tablet`
    margin: 0 auto;
  `}
  ${media.tablet`
    grid-template-areas: "logo search . navmenu";
    grid-template-columns: 110px 260px auto 260px;
  `}
  ${media.phone`
    grid-template-columns: 110px auto 200px;
    grid-template-areas:
      "logo . navmenu"
      "search search search";
    margin: 0 20px;
  `}
`;

const LogoFrame = styled.img`
  grid-area: logo;
  height: 29px;
`;

type FrameProps = {

};

export const Logo = (props: FrameProps) => <LogoFrame src={LogoImage} {...props} />;

const SnuttLogoFrame = styled.img`
  width: 20px;
  height: 20px;
  margin-right: .5em;
`;

export const SnuttLogo = (props: FrameProps) => <SnuttLogoFrame src={SnuttLogoImage} {...props} />;

export const Search = styled.div`
  grid-area: search;
  box-sizing: border-box;
  padding-left: 35px;
  line-height: 38px;
  height: 38px;
  border-bottom: solid 1px rgba(0, 0, 0, .6);
  background: url(${IconSearch}) no-repeat 0% 50%;
  background-size: 30px 30px;
  display: flex;
  justify-content: space-between;
`;

export const SearchFilterIcon = styled.button`
  width: 35px;
  height: 100%;
  background: url(${DetailSearchImage}) no-repeat 100% 50%;
  margin-left: 5px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const NavMenu = styled.ul`
  grid-area: navmenu;
  display: flex;
  margin: 0 0 0 auto;
  line-height: 40px;
  list-style: none;

  button, a {
    margin-left: 40px;

    ${media.tablet`
      margin-left: 30px;
    `}

    ${media.phone`
      margin-left: 10px;
    `}
  }

  li {
    margin-left: 20px;
    ${media.tablet`
      margin-left: 40px;
    `}
    ${media.phone`
      margin-left: 40px;
    `}

    button, a, span {
      ${typo.body2}
    }

    &.bookmarks {
      padding-left: 20px;
      background: url(${IconBookmark}) no-repeat 0% 50%;
      background-size: 20px 20px;
      cursor: pointer;
      &:hover {
        background: url(${IconBookmarkHover}) no-repeat 0% 50%;
      }

      ${media.tablet`
        margin-top: 3px;
        padding-top: 30px;
      `}

      ${media.phone`
        margin-top: 3px;
        padding-top: 30px;
      `}
    }

    &.profile {
      padding-left: 30px;
      background: url(${IconProfile}) no-repeat 0% 50%;
      background-size: 20px 20px;
      cursor: pointer;
      &:hover {
        background: url(${IconProfileHover}) no-repeat 0% 50%;
      }

      ${media.tablet`
        margin-top: 6px;
        padding-top: 30px;
      `}

      ${media.phone`
        margin-top: 6px;
        padding-top: 30px;
      `}
    }

    &.logout {
      padding-left: 20px;
      background: url(${IconLogout}) no-repeat 0% 50%;
      background-size: 20px 20px;
      cursor: pointer;
      &:hover {
        background: url(${IconLogoutHover}) no-repeat 0% 50%;
      }

      ${media.tablet`
        margin-top: 3px;
        padding-top: 30px;
      `}

      ${media.phone`
        margin-top: 3px;
        padding-top: 30px;
      `}
    }

    &.login {
      padding-left: 30px;
      background: url(${IconLogin}) no-repeat 0% 50%;
      background-size: 20px 20px;
      cursor: pointer;
      &:hover {
        background: url(${IconLoginHover}) no-repeat 0% 50%;
      }

      ${media.tablet`
        margin-top: 6px;
        padding-top: 30px;
      `}

      ${media.phone`
        margin-top: 6px;
        padding-left: 20px;
        padding-top: 30px;
      `}
    }

    &.signUp {
      padding-left: 30px;
      background: url(${IconProfile}) no-repeat 0% 50%;
      background-size: 20px 20px;
      cursor: pointer;
      &:hover {
        background: url(${IconProfileHover}) no-repeat 0% 50%;
      }

      ${media.tablet`
        margin-top: 6px;
        padding-top: 30px;
      `}

      ${media.phone`
        margin-top: 6px;
        padding-top: 30px;
      `}
    }

    &:first-child {
      margin-left: 0;
    }

  }
`;
