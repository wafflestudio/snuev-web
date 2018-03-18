// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

import {
  makeSelectAppLayout,
} from '../global/selectors';

const ColumnWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const RowWrapper = styled.div`
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
    <ColumnWrapper>
      <NavBar />
      <RowWrapper>
        {props.appLayout.get('showSideBar') &&
          <SideBar />
        }
        <Component {...props} />
      </RowWrapper>
    </ColumnWrapper>
  )
);
