/*
 *
 * LectureDetailPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Immutable from 'immutable';
import { makeSelectError, makeSelectIsFetching, makeSelectLecture } from './selectors';
import { Creators as Actions } from './reducer';


export class LectureDetailPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onGetLectureDetailRequest(this.props.params.lectureId);
  }

  render() {
    const { isFetching, error, lecture } = this.props;
    return (
      <div>
        {/* <Helmet
          title=""
          meta={[
            { name: 'description', content: 'Description of LectureDetailPage' },
          ]}
        /> */}
        {
          isFetching ?
            '로딩 중'
            : null
        }
        {
          error ?
            `에러 ${JSON.stringify(error)}`
            : null
        }
        {
          !isFetching && !error && lecture ?
            `${JSON.stringify(lecture.toJS())}`
            : null
        }
      </div>
    );
  }
}

LectureDetailPage.propTypes = {
  onGetLectureDetailRequest: PropTypes.func.isRequired,
  params: PropTypes.object,
  isFetching: PropTypes.bool,
  error: PropTypes.object,
  lecture: PropTypes.instanceOf(Immutable.Map),
};

const mapStateToProps = createStructuredSelector({
  isFetching: makeSelectIsFetching(),
  error: makeSelectError(),
  lecture: makeSelectLecture(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetLectureDetailRequest: (lectureId) => {
      dispatch(Actions.getLectureDetailRequest(lectureId));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LectureDetailPage);
