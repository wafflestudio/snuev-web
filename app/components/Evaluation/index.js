import React, { PropTypes } from 'react';
import LectureName from './LectureName';
import Rating from './Rating';
import Review from './Review';
import * as Style from './index.style';


function Evaluation(props) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div>
      <Style.Header>
        <h1>강의 평가하기</h1>
      </Style.Header>
      <form>
        <LectureName
          lectureName={props.lectureName}
          onChange={props.handleChange}
        />
        <Rating
          name="score"
          value={props.score}
          onChange={props.handleChange}
          onSliderChange={props.makeHandleSliderChange('score')}
        />
        <Rating
          name="easiness"
          value={props.easiness}
          onChange={props.handleChange}
          onSliderChange={props.makeHandleSliderChange('easiness')}
        />
        <Rating
          name="grading"
          value={props.grading}
          onChange={props.handleChange}
          onSliderChange={props.makeHandleSliderChange('grading')}
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
  score: PropTypes.number.isRequired,
  easiness: PropTypes.number.isRequired,
  grading: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  makeHandleSliderChange: PropTypes.func.isRequired,
};

export default Evaluation;
