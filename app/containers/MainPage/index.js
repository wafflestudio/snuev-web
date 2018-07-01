// @flow
import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectLatestEvaluations,
  makeSelectMostEvaluatedLectures,
  makeSelectTopRatedLectures,
  makeSelectMostLikedEvaluations,
} from './selectors';
import { Creators as Actions } from './reducer';
import withBars from '../../services/withBars';
import Evaluation from './Evaluation';

type LectureType = {

};

type EvaluationType = {

};

type Props = {
  latestEvaluations: [EvaluationType],
  mostEvaluatedLectures: [LectureType],
  topRatedLectures: [LectureType],
  mostLikedEvaluations: [EvaluationType],
  getLatestEvaluations: () => void,
  getMostEvaluatedLectures: () => void,
  getTopRatedLectures: () => void,
  getMostLikedEvaluations: () => void,
};

export class MainPage extends React.PureComponent<Props> { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getLatestEvaluations();
    this.props.getMostEvaluatedLectures();
    this.props.getTopRatedLectures();
    this.props.getMostLikedEvaluations();
  }

  render() {
    return (
      <div>
        <Helmet
          title="MainPage"
          meta={[
            { name: 'description', content: 'Description of MainPage' },
          ]}
        />
        {this.props.mostLikedEvaluations &&
          this.props.mostLikedEvaluations.map((evaluation: EvaluationType) => (
            <Evaluation key={evaluation.id} evaluation={evaluation} />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  latestEvaluations: makeSelectLatestEvaluations(),
  mostEvaluatedLectures: makeSelectMostEvaluatedLectures(),
  topRatedLectures: makeSelectTopRatedLectures(),
  mostLikedEvaluations: makeSelectMostLikedEvaluations(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  getLatestEvaluations: () => dispatch(Actions.getLatestEvaluationsRequest()),
  getMostEvaluatedLectures: () => dispatch(Actions.getMostEvaluatedLecturesRequest()),
  getTopRatedLectures: () => dispatch(Actions.getTopRatedLecturesRequest()),
  getMostLikedEvaluations: () => dispatch(Actions.getMostLikedEvaluationsRequest()),
});

export default withBars(connect(mapStateToProps, mapDispatchToProps)(MainPage));
