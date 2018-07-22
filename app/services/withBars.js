// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';

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
  showSideBar: boolean,
  theme: any,
};

const Wrapper = styled.div`
  width: 100%;
  margin: 0 30px;
  ${media.tablet`
    margin: 0 auto;
  `}
  ${media.phone`
    margin: 0;
  `}
`;

const MainContent = styled.div`
  padding-top: ${(props: Props) => props.theme.navBarHeight}px;
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
    padding-left: 30px;
    padding-right: 30px;
    margin-left: 0;

    .focusLecture & {
      padding-top: 60px;
    }
  `}
`;

const mapStateToProps = createStructuredSelector({
  appLayout: makeSelectAppLayout(),
});

export default (Component: React.ComponentType<Props>) => connect(mapStateToProps)(
  (props: Props) => (
    <Wrapper className={classNames({ focusLecture: props.appLayout.get('focusLecture') })}>
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
