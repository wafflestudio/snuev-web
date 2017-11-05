import React, { PropTypes } from 'react';
import LectureName from './LectureName';
import Rating from './Rating';
import Review from './Review';
// import styled from 'styled-components';



function Evaluation(props) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div>
      <div>
        <h1>강의 평가하기</h1>
      </div>
      <form>
        <LectureName
          lectureName={props.lectureName}
          onChange={props.handleChange}
        />
        <Rating
          name="rating"
          value={props.rating}
          onChange={props.handleChange}
          onSliderChange={props.makeHandleSliderChange('rating')}
        />
        <Rating
          name="teachingSkill"
          value={props.teachingSkill}
          onChange={props.handleChange}
          onSliderChange={props.makeHandleSliderChange('teachingSkill')}
        />
        <Rating
          name="looseness"
          value={props.looseness}
          onChange={props.handleChange}
          onSliderChange={props.makeHandleSliderChange('looseness')}
        />
        <Rating
          name="gradeSatisfaction"
          value={props.gradeSatisfaction}
          onChange={props.handleChange}
          onSliderChange={props.makeHandleSliderChange('gradeSatisfaction')}
        />
        <Review
          review={props.review}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
}

Evaluation.propTypes = {
  lectureName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  teachingSkill: PropTypes.number.isRequired,
  looseness: PropTypes.number.isRequired,
  gradeSatisfaction: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  makeHandleSliderChange: PropTypes.func.isRequired,
};

export default Evaluation;
