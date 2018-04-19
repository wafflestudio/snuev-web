// @flow
import React from 'react';
import Slider from './react-slider';
import './slider.css';

import {
  SliderWrapper,
  SliderLabel,
  Name,
  Score,
  HandleWrapper,
  RelativeDiv,
  OnClickWrapper,
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

  constructor(props: Props) {
    super(props);
    this.makeHandle = this.makeHandle.bind(this);
  }

  makeHandle(props: any) {
    return (
      <OnClickWrapper offset={props.offset} isDragging={props.dragging}>
        <HandleWrapper isDragging={props.dragging}>
          <RelativeDiv>
            <Slider.Handle {...props} />
          </RelativeDiv>
        </HandleWrapper>
      </OnClickWrapper>
    );
  }

  render() {
    const { value, name, width, onChange } = this.props;
    return (
      <SliderWrapper width={width}>
        <SliderLabel>
          <Name>{name}</Name>
          <Score>{value}</Score>
        </SliderLabel>
        <Slider
          min={0}
          max={10}
          value={value}
          onChange={onChange}
          handle={this.makeHandle}
        />
      </SliderWrapper>
    );
  }
}


export default CustomSlider;
