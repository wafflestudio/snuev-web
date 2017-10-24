import 'rc-slider/assets/index.css';
import React from 'react'
import Slider from 'rc-slider';

const wrapperStyle = { width: 400, margin: 50 };

export default class Rating extends React.PureComponent {

  render() {
    return(
      <div>
        {this.props.name}:
        <input type="number" name ={this.props.name} value={this.props.value} onChange={this.props.onChange} />
        <input type="number" name ={this.props.name} value={this.props.value} onChange={this.props.onChange} />
        <div style={wrapperStyle}>
          <Slider min={0} max={10} value={this.props.value} onChange={this.props.onSliderChange}/>
        </div>
      </div>
    );
  }
}
