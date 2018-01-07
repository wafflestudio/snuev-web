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
import makeSelectLectureDetailPage from './selectors';
import messages from './messages';
import { Creators as Actions } from './reducer';

export class LectureDetailPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onGetLectureDetailRequest(this.props.params.lectureId);
  }

  render() {
    return (
      <div>
        {/* <Helmet
          title=""
          meta={[
            { name: 'description', content: 'Description of LectureDetailPage' },
          ]}
        /> */}
      </div>
    );
  }
}

LectureDetailPage.propTypes = {
  onGetLectureDetailRequest: PropTypes.func.isRequired,
  params: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    onGetLectureDetailRequest: (lectureId) => {
      dispatch(Actions.getLectureDetailRequest({ lectureId }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LectureDetailPage);
