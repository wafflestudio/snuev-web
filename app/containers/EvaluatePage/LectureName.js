import React, { PropTypes } from 'react';

export default function LectureName(props) {
  return (
    <div>
      <label>
        Name:
        <input type="text" name="lectureName" value={props.lectureName} onChange={props.onChange} />
        <input type="text" name="lectureName" value={props.lectureName} onChange={props.onChange} />
      </label>
    </div>
  );
}

LectureName.propTypes = {
  lectureName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
