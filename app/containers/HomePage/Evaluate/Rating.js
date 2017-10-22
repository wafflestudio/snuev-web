import 'rc-slider/assets/index.css';
import React from 'react'
import Slider from 'rc-slider';

const wrapperStyle = { width: 400, margin: 50 };

export default class Rating extends React.PureComponent {
  render() {
    return(
      <div>
        총점
        <input type="number" name ="rating" value={this.props.rating} onChange={this.props.onChange} />
        <input type="number" name ="rating" value={this.props.rating} onChange={this.props.onChange} />
        <div style={wrapperStyle}>
          <Slider min={0} max={10}  />
        </div>
      </div>
    );
  }
}
