// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import Map from 'immutable';

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
import DetailSearchHoverImage from '../../images/ic-detailsearch-hover.png';
import DetailSearchSelectedImage from '../../images/ic-detailsearch-focus.png';
import DetailSearchOnImage from '../../images/ic-detailsearch-on-normal.png';
import DetailSearchOnHoverImage from '../../images/ic-detailsearch-on-hover.png';
import DetailSearchOnSelectedImage from '../../images/ic-detailsearch-on-focus.png';

type Props = {
  theme: Map<string, any>,
  open: boolean,
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
  z-index: ${(props: Props) => props.theme.zIndex.navBar};
  ${media.tablet`
    .navMenuText {
      display: none;
    }
  `}
  ${media.phone`
    height: ${(props: Props) => props.theme.mobileNavBarHeight}px;
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
  margin: 0 20px;
  height: 100%;
  display: grid;
  grid-template-columns: 110px 260px auto;
  grid-column-gap: 20px;
  grid-template-areas: "logo search navmenu";
  align-items: center;
  ${media.tablet`
    margin: 0 auto;
    grid-template-areas: "logo search . navmenu";
    grid-template-columns: 130px 260px auto auto;
  `}
  ${media.phone`
    grid-template-columns: 110px auto auto;
    grid-template-areas:
      "logo . navmenu"
      "search search search";
    margin: 0 20px;
  `}
`;

export const LogoButton = styled.button`
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const LogoFrame = styled.img`
  grid-area: logo;
  height: 29px;

  ${media.tablet`
    margin-left: 20px;
  `}

  ${media.phone`
    margin-left: 0;
  `}
`;

export const Logo = (props: Props) => <LogoFrame src={LogoImage} {...props} />;

const SnuttLogoFrame = styled.img`
  width: 20px;
  height: 20px;
  margin-right: .5em;

  ${media.tablet`
    margin-right: 0;
  `}
`;

export const SnuttLogo = (props: Props) => <SnuttLogoFrame src={SnuttLogoImage} {...props} />;

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
  background: ${(props: Props) => props.open ? `url(${DetailSearchSelectedImage}) no-repeat 100% 50%` : `url(${DetailSearchImage}) no-repeat 100% 50%`};
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    background: ${(props: Props) => props.open ? `url(${DetailSearchSelectedImage}) no-repeat 100% 50%` : `url(${DetailSearchHoverImage}) no-repeat 100% 50%`};
  }
  &:focus {
    outline: none;
  }
`;

export const SearchFilterOnIcon = styled.button`
  width: 35px;
  height: 100%;
  background: ${(props: Props) => props.open ? `url(${DetailSearchOnSelectedImage}) no-repeat 100% 50%` : `url(${DetailSearchOnImage}) no-repeat 100% 50%`};
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    background: ${(props: Props) => props.open ? `url(${DetailSearchOnSelectedImage}) no-repeat 100% 50%` : `url(${DetailSearchOnHoverImage}) no-repeat 100% 50%`};
  }
  &:focus {
    outline: none;
  }
`;

export const NavMenu = styled.div`
  grid-area: navmenu;
  display: flex;
  margin: 0 0 0 auto;
  line-height: 40px;
  padding-left: 0;

  ${media.tablet`
    margin-right: 40px;
  `}

  ${media.phone`
    margin-right: 0;
  `}
`;

export const SnuttButton = styled.a`
  ${typo.body2}
  &:hover {
    color: ${(props: Props) => props.theme.color.primary};
  }
  &:focus {
    outline: none;
  }
`;

export const BookmarkButton = styled.button`
  ${typo.body2}
  background: url(${IconBookmark}) no-repeat 0% 50%;
  background-size: 20px 20px;
  cursor: pointer;
  margin-left: 40px;
  padding-left: 28px;
  &:hover {
    background: url(${IconBookmarkHover}) no-repeat 0% 50%;
    color: ${(props: Props) => props.theme.color.primary};
  }
  &:focus {
    outline: none;
  }

  ${media.tablet`
    padding-left: 20px;
    padding-right: 0px;
  `}

  ${media.phone`
    margin-left: 30px;
  `}
`;

export const ProfileButton = styled.button`
  ${typo.body2}
  background: url(${IconProfile}) no-repeat 0% 50%;
  background-size: 20px 20px;
  cursor: pointer;
  margin-left: 40px;
  padding-left: 28px;
  &:hover {
    background: url(${IconProfileHover}) no-repeat 0% 50%;
    color: ${(props: Props) => props.theme.color.primary};
  }
  &:focus {
    outline: none;
  }

  ${media.tablet`
    padding-left: 20px;
    padding-right: 0px;
  `}

  ${media.phone`
    margin-left: 30px;
  `}
`;

export const LogoutButton = styled.button`
  ${typo.body2}
  background: url(${IconLogout}) no-repeat 0% 50%;
  background-size: 20px 20px;
  cursor: pointer;
  margin-left: 40px;
  padding-left: 28px;
  &:hover {
    background: url(${IconLogoutHover}) no-repeat 0% 50%;
    color: ${(props: Props) => props.theme.color.primary};
  }
  &:focus {
    outline: none;
  }

  ${media.tablet`
    padding-left: 20px;
    padding-right: 0px;
  `}

  ${media.phone`
    margin-left: 30px;
  `}
`;

export const LoginButton = styled(Link)`
  ${typo.body2}
  background: url(${IconLogin}) no-repeat 0% 50%;
  background-size: 20px 20px;
  cursor: pointer;
  margin-left: 40px;
  padding-left: 28px;
  &:hover {
    background: url(${IconLoginHover}) no-repeat 0% 50%;
    color: ${(props: Props) => props.theme.color.primary};
  }
  &:focus {
    outline: none;
  }

  ${media.tablet`
    padding-left: 20px;
    padding-right: 0px;
  `}

  ${media.phone`
    margin-left: 30px;
  `}
`;

export const SignUpButton = styled(Link)`
  ${typo.body2}
  background: url(${IconProfile}) no-repeat 0% 50%;
  background-size: 20px 20px;
  cursor: pointer;
  margin-left: 40px;
  padding-left: 28px;
  &:hover {
    background: url(${IconProfileHover}) no-repeat 0% 50%;
    color: ${(props: Props) => props.theme.color.primary};
  }
  &:focus {
    outline: none;
  }

  ${media.tablet`
    padding-left: 20px;
    padding-right: 0px;
  `}

  ${media.phone`
    margin-left: 30px;
  `}
`;
