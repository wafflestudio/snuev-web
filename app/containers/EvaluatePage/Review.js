import React, { PropTypes } from 'react';

export default function Review(props) {
  return (
    <div>
      Review
      <input type="text" name="review" value={props.review} onChange={props.onChange} />
      <input type="text" name="review" value={props.review} onChange={props.onChange} />
    </div>
  );
}

Review.propTypes = {
  review: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
