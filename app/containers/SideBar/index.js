// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectLectures,
  makeSelectGlobal,
} from '../../global/selectors';

import {
  SideBarWrapper,
} from './index.style';

import Lecture from './Lecture';

type Props = {
  lectures: List<Map<string, any>>,
  location: {},
  global: Map<string, any>,
};

const SideBar = ({ lectures, location, global }: Props) => (
  <SideBarWrapper>
    {global.getIn(['lectures', 'isFetching']) ? (
      <div>Loading...</div>
    ) : (
      lectures.map((lecture: Map<string, any>) => (
        <Link key={lecture.get('id')} to={{ pathname: `/lectures/${lecture.get('id')}`, search: location.search }}>
          <Lecture lecture={lecture} />
        </Link>
      ))
    )}
  </SideBarWrapper>
);

const mapStateToProps = createStructuredSelector({
  lectures: makeSelectLectures(),
  global: makeSelectGlobal(),
});

export default withRouter(connect(mapStateToProps)(SideBar));
