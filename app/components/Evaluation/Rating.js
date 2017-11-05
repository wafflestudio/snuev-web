import React, { PropTypes } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const wrapperStyle = { width: 400, margin: 50 };

export default function Rating(props) {
  return (
    <div>
      {props.name}:
      <input type="number" name={props.name} value={props.value} onChange={props.onChange} />
      <input type="number" name={props.name} value={props.value} onChange={props.onChange} />
      <div style={wrapperStyle}>
        <Slider min={0} max={10} value={props.value} onChange={props.onSliderChange} />
      </div>
    </div>
  );
}

Rating.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onSliderChange: PropTypes.func.isRequired,
};
