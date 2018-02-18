/**
 *
 * @flow
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

import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Creators as GlobalActions } from '../../global/reducer';
import { getAuthToken } from '../../services/localStorage';
import { makeSelectUserIsFetching } from '../../global/selectors';

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
`;

type Props = {
  isFetchingUser: boolean,
  getCurrentUser: () => void,
  children: React.Node,
};

class App extends React.PureComponent<Props> {
  componentWillMount() {
    if (getAuthToken()) {
      this.props.getCurrentUser();
    }
  }

  render() {
    if (this.props.isFetchingUser) {
      return (
        <div>
          Loading Screen
        </div>
      );
    }
    return (
      <AppWrapper>
        {React.Children.toArray(this.props.children)}
      </AppWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetchingUser: makeSelectUserIsFetching(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  getCurrentUser: () => dispatch(GlobalActions.userRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
