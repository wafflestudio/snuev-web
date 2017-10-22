import React from 'react'
export default class LectureName extends React.PureComponent {
  render() {
    return(
      <div>
          <label>
            Name:
            <input type="text" name ="lectureName" value={this.props.lectureName} onChange={this.props.onChange} />
            <input type="text" name ="lectureName" value={this.props.lectureName} onChange={this.props.onChange} />
          </label>
      </div>
    );
  }
}
