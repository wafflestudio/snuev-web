// @flow
import styled from 'styled-components';

type WrapperProps = {
  width: number,
  margin: number,
};

export const SliderWrapper = styled.div`
  width: ${(props: WrapperProps) => props.width};
`;

export const SliderLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px; 
`;

export const Name = styled.div`
  font-size: 16px;
`;

export const Score = styled.div`
  font-size: 26px;
  font-family: Lato;
`;

type HandleProps = {
  offset: string,
  isDragging: boolean,
};

export const HandleWrapper = styled.div`
  visibility: visible;
  height: 18px;
  width: 18px;
  left: ${(props: HandleProps) => props.offset}%;
  border-radius: 50%;
  background-color: ${(props: HandleProps) => props.isDragging ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)'};
  border: solid 1px #4f48c4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OnClickWrapper = styled.div`
  visibility: ${(props: HandleProps) => props.isDragging ? 'visible' : 'hidden'};
  height: 30px;
  width: 30px;
  position: absolute;
  left: ${(props: HandleProps) => props.offset}%;
  margin-left: -16px;
  margin-top: -14px;
  border-radius: 50%;
  background-color: rgba(79, 72, 196, 0.15);
  border:  solid 1px rgba(79, 72, 196, 0.4);;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RelativeDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const activeDotStyle = {
  visibility: 'hidden',
};

export const dotStyle = {
  width: '1px',
  height: '6px',
  borderRadius: 0,
  border: 'none',
  backgroundColor: '#cccccc',
  bottom: '0',
  marginLeft: '-1px',
};

