// @flow
import React from 'react';
import Slider from 'rc-slider';
import './slider.css';

import {
  SliderWrapper,
  SliderLabel,
  Name,
  Score,
  HandleWrapper,
  RelativeDiv,
  OnClickWrapper,
  activeDotStyle,
  dotStyle,
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
    this.marks = {
      // rc-slider의 marks 기능을 이용하여 vertical marks를 표현.
      // string을 수정하여 vertical mark 아래 라벨을 넣을 수 있다.
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
    };
    this.refRoot = React.createRef();
  }

  componentDidMount() {
    const railDiv = this.refRoot.current.querySelector('.rc-slider-rail');
    const startMark = document.createElement('div');
    startMark.style.cssText = 'width: 2px;height: 14px;background-color: #4f48c4;position: absolute;left: 0;bottom: -6px;';
    const endMark = document.createElement('div');
    endMark.style.cssText = 'width: 2px;height: 14px;background-color: #cccccc;position: absolute;right: 0;bottom: -6px;';
    railDiv.appendChild(startMark);
    railDiv.appendChild(endMark);
  }

  makeHandle(props: any) {
    const { value, dragging, index, ...restProps } = props; // eslint-disable-line
    return (
      <OnClickWrapper offset={props.offset} isDragging={props.dragging}>
        <HandleWrapper isDragging={props.dragging}>
          <RelativeDiv>
            <Slider.Handle {...restProps} />
          </RelativeDiv>
        </HandleWrapper>
      </OnClickWrapper>
    );
  }

  render() {
    const { value, name, width, onChange } = this.props;
    return (
      <SliderWrapper width={width} innerRef={this.refRoot}>
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
          marks={this.marks}
          activeDotStyle={activeDotStyle}
          dotStyle={dotStyle}
        />
      </SliderWrapper>
    );
  }
}


export default CustomSlider;
