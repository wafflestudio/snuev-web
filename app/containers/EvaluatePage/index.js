/*
 *
 * EvaluatePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectEvaluatePage from './selectors';
import Evaluation from '../../components/Evaluation';

export class EvaluatePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      lectureName: '',
      score: 0,
      easiness: 0,
      grading: 0,
      review: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.makeHandleSliderChange = this.makeHandleSliderChange.bind(this);
  }

  handleChange(event) {
    const obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  makeHandleSliderChange = (name) => {
    return (value) => {
      this.setState({
        [name]: value,
      });
    };
  }


  render() {
    return (
      <div>
        <div>
          <Helmet
            title="EvaluatePage"
            meta={[
              { name: 'description', content: 'Description of EvaluatePage' },
            ]}
          />
        </div>
        <Evaluation
          lectureName={this.state.lectureName}
          score={this.state.score}
          easiness={this.state.easiness}
          grading={this.state.grading}
          review={this.state.review}
          handleChange={this.handleChange}
          makeHandleSliderChange={this.makeHandleSliderChange}
        />
      </div>
    );
  }
}

EvaluatePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  EvaluatePage: makeSelectEvaluatePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EvaluatePage);
