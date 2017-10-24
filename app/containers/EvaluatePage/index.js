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
import LectureName from './LectureName';
import Rating from './Rating';
import Review from './Review';


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
        <div>
          <div>
            <h1>강의 평가하기</h1>
          </div>
          <form>
            <LectureName
              lectureName={this.state.lectureName}
              onChange={this.handleChange}
            />
            <Rating
              name="rating"
              value={this.state.rating}
              onChange={this.handleChange}
              onSliderChange={this.makeHandleSliderChange('rating')}
            />
            <Rating
              name="teachingSkill"
              value={this.state.teachingSkill}
              onChange={this.handleChange}
              onSliderChange={this.makeHandleSliderChange('teachingSkill')}
            />
            <Rating
              name="looseness"
              value={this.state.looseness}
              onChange={this.handleChange}
              onSliderChange={this.makeHandleSliderChange('looseness')}
            />
            <Rating
              name="gradeSatisfaction"
              value={this.state.gradeSatisfaction}
              onChange={this.handleChange}
              onSliderChange={this.makeHandleSliderChange('gradeSatisfaction')}
            />
            <Review
              review={this.state.review}
              onChange={this.handleChange}
            />
          </form>
        </div>
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
