// @flow
import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import {
  SliderWrapper,
  SliderLabel,
  Name,
  Score,
} from './index.style';

type Props ={
  width: string,
  name: string,
  value: number,
  onChange: (any) => any,
};

type State = {

};

class CustomSlider extends React.Component<Props, State> { // eslint-disable-line react/prefer-stateless-function
  static defaultProps ={
    width: '150px',
  };

  render() {
    const { value, name, width, onChange } = this.props;
    return (
      <SliderWrapper width={width}>
        <SliderLabel>
          <Name>{name}</Name>
          <Score>{value}</Score>
        </SliderLabel>
        <Slider
          min={1}
          max={10}
          value={value}
          onChange={onChange}
        />
      </SliderWrapper>
    );
  }
}


export default CustomSlider;
