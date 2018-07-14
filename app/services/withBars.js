// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import NavBar from '../components/NavBar';
import SideBar from '../containers/SideBar';

import {
  makeSelectAppLayout,
} from '../global/selectors';
import { media } from '../style-utils';

type Props = {
  theme: {
    navBarHeight: number,
    sideBarMaxWidth: number,
    appMaxWidth: number,
  },
  appLayout: Map<string, any>,
};

const Wrapper = styled.div`
  max-width: ${(props: Props) => props.theme.appMaxWidth}px;
  width: 100%;
  margin: 0 auto;
  ${media.desktop`
    margin: 0 30px;
  `}
  ${media.phone`
    margin: 0;
  `}
`;

const MainContent = styled.div`
  padding-top: ${(props: Props) => props.theme.navBarHeight + 30}px;
  margin-left: ${(props: Props) =>
    props.showSideBar ?
      `${props.theme.sideBarMaxWidth + 60}px` : '0px'};
  ${media.tablet`
    margin-left: ${(props: Props) =>
      props.showSideBar ?
        `${props.theme.tabletSideBarMaxWidth + 48}px` : '0px'};
  `}
  ${media.phone`
    padding-top: ${(props: Props) => props.theme.mobileNavBarHeight + 30}px;
    margin-left: 0;
  `}
`;

const mapStateToProps = createStructuredSelector({
  appLayout: makeSelectAppLayout(),
});

export default (Component: React.Component) => connect(mapStateToProps)(
  (props: Props) => (
    <Wrapper>
      <NavBar />
      {props.appLayout.get('showSideBar') &&
        <SideBar />
      }
      <MainContent showSideBar={props.appLayout.get('showSideBar')}>
        <Component {...props} />
      </MainContent>
    </Wrapper>
  )
);
