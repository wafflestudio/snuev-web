import React, { PropTypes } from 'react';

//not use this component now
//it will be deleted

export default function SubRating(props) {
  return (
    <div>
      <div>
        강의력
        <input type="number" name="teachingSkill" value={props.teachingSkill} onChange={props.onChange} />
        <input type="number" name="teachingSkill" value={props.teachingSkill} onChange={props.onChange} />
      </div>
      <div>
        널널함
        <input type="number" name="looseness" value={props.looseness} onChange={props.onChange} />
        <input type="number" name="looseness" value={props.looseness} onChange={props.onChange} />
      </div>
      <div>
        학점만족도
        <input type="number" name="gradeSatisfaction" value={props.gradeSatisfaction} onChange={props.onChange} />
        <input type="number" name="gradeSatisfaction" value={props.gradeSatisfaction} onChange={props.onChange} />
      </div>
    </div>
  );
}


SubRating.propTypes = {
  teachingSkill: PropTypes.number.isRequired,
  looseness: PropTypes.number.isRequired,
  gradeSatisfaction: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
