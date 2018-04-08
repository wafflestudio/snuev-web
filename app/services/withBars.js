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

const MainContent = styled.div`
  padding-top: ${(props: {}) => props.theme.navBarHeight + 30}px;
  margin-left: ${(props: {}) =>
    props.showSideBar ?
      `${props.theme.sideBarMaxWidth + 60}px` : '0px'};
`;

type Props = {
  appLayout: Map<string, any>,
};

const mapStateToProps = createStructuredSelector({
  appLayout: makeSelectAppLayout(),
});

export default (Component: React.Component) => connect(mapStateToProps)(
  (props: Props) => (
    <div>
      <NavBar />
      {props.appLayout.get('showSideBar') &&
        <SideBar />
      }
      <MainContent showSideBar={props.appLayout.get('showSideBar')}>
        <Component {...props} />
      </MainContent>
    </div>
  )
);
