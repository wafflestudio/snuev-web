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
