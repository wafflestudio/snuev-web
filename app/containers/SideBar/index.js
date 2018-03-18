// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectLectures,
} from '../../global/selectors';

import {
  SideBarWrapper,
} from './index.style';

import Lecture from './Lecture';

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
          <Link key={lecture.get('id')} to={{ pathname: `/lectures/${lecture.get('id')}`, search: location.search }}>
            <Lecture lecture={lecture} />
          </Link>
        ))}
      </SideBarWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  lectures: makeSelectLectures(),
});

export default withRouter(connect(mapStateToProps)(SideBar));
