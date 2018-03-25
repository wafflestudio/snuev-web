// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectLectures,
} from '../../global/selectors';

const SideBarWrapper = styled.aside`
  width: 250px;
  min-width: 250px;
  height: 100%;
  border-right: solid 1px #cccccc;
`;

type Props = {
  lectures: List<Map<string, any>>,
  location: { search: string },
};

class SideBar extends React.Component<Props> { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { lectures, location } = this.props;
    return (
      <SideBarWrapper>
        {lectures.map((lecture: Map<string, any>) => (
          <div key={lecture.get('id')}>
            <Link to={{ pathname: `/lectures/${lecture.get('id')}`, search: location.search }}>
              {lecture.get('name')}
            </Link>
          </div>
        ))}
      </SideBarWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  lectures: makeSelectLectures(),
});

export default withRouter(connect(mapStateToProps)(SideBar));
