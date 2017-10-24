import React from 'react'
export default class Review extends React.PureComponent {
  render() {
    return(
      <div>
        Review
        <input type="text" name ="review" value={this.props.review} onChange={this.props.onChange} />
        <input type="text" name ="review" value={this.props.review} onChange={this.props.onChange} />
      </div>
    );
  }
}
