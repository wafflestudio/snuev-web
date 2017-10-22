import React from 'react'
export default class SubRating extends React.PureComponent {
  render() {
    return(
      <div>
        <div>
          강의력
          <input type="number" name ="teachingSkill" value={this.props.teachingSkill} onChange={this.props.onChange} />
          <input type="number" name ="teachingSkill" value={this.props.teachingSkill} onChange={this.props.onChange} />
        </div>
        <div>
          널널함
          <input type="number" name ="looseness" value={this.props.looseness} onChange={this.props.onChange} />
          <input type="number" name ="looseness" value={this.props.looseness} onChange={this.props.onChange} />
        </div>
        <div>
          학점만족도
          <input type="number" name ="gradeSatisfaction" value={this.props.gradeSatisfaction} onChange={this.props.onChange} />
          <input type="number" name ="gradeSatisfaction" value={this.props.gradeSatisfaction} onChange={this.props.onChange} />
        </div>
      </div>
    );
  }
}
