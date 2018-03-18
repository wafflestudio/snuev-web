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

const RowWrapper = styled.div`
  margin-top: ${(props: Object) => props.theme.navBarHeight}px;
  display: flex;
  flex: 1;
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
      <RowWrapper>
        {props.appLayout.get('showSideBar') &&
          <SideBar />
        }
        <Component {...props} />
      </RowWrapper>
    </div>
  )
);
