// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { List, Map } from 'immutable';
import { ClipLoader } from 'react-spinners';
import { IntlProvider, FormattedHTMLMessage } from 'react-intl';
import qs from 'query-string';
import messages from './messages';

import {
  makeSelectLectures,
  makeSelectGlobal,
} from '../../global/selectors';

import {
  SideBarWrapper,
  NoResultWrapper,
  NoResultIcon,
  NoResultText,
} from './index.style';

import Lecture from './Lecture';

type Props = {
  lectures: List<Map<string, any>>,
  location: { search: string }, // eslint-disable-line react/no-unused-prop-types
  global: Map<string, any>,
};

const SideBar = ({ lectures, location, global }: Props) => {
  if (global.getIn(['lectures', 'isFetching'])) {
    return (
      <SideBarWrapper>
        <ClipLoader />
      </SideBarWrapper>
    );
  } else if (lectures.size === 0) {
    return (
      <IntlProvider messages={messages}>
        <SideBarWrapper>
          <NoResultWrapper>
            <NoResultIcon />
            <NoResultText>
              <FormattedHTMLMessage
                {...messages.noResult}
                values={{ query: qs.parse(location.search).q }}
              />
            </NoResultText>
          </NoResultWrapper>
        </SideBarWrapper>
      </IntlProvider>
    );
  }
  return (
    <SideBarWrapper>
      {
        lectures.map((lecture: Map<string, any>) => (
          <Link key={lecture.get('id')} to={{ pathname: `/lectures/${lecture.get('id')}`, search: location.search }} activeClassName="active">
            <Lecture lecture={lecture} />
          </Link>
        ))
      }
    </SideBarWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  lectures: makeSelectLectures(),
  global: makeSelectGlobal(),
});

export default withRouter(connect(mapStateToProps)(SideBar));
