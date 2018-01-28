/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';

const AppWrapper = styled.div`
  height: 100%;
  display: grid;
  align-content: stretch;
  grid-template-columns: 300px auto;
  grid-template-rows: 80px auto;
  grid-template-areas:
    "navbar navbar"
    "sidebar main";
`;

const MainWrapper = styled.div`
  grid-area: main;
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <AppWrapper>
        <NavBar />
        <SideBar />
        <MainWrapper>
          {React.Children.toArray(this.props.children)}
        </MainWrapper>
      </AppWrapper>
    );
  }
}
