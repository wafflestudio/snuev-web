import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const ColumnWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const RowWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export default (Component) => (
  (props) => (
    <ColumnWrapper>
      <NavBar />
      <RowWrapper>
        <SideBar />
        <Component {...props} />
      </RowWrapper>
    </ColumnWrapper>
  )
);
