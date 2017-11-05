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
      rating: 0,
      teachingSkill: 0,
      looseness: 0,
      gradeSatisfaction: 0,
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
          rating={this.state.rating}
          teachingSkill={this.state.teachingSkill}
          looseness={this.state.looseness}
          gradeSatisfaction={this.state.gradeSatisfaction}
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
