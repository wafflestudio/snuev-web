// @flow
import React from 'react';
import styled from 'styled-components';
import { media } from '../../style-utils';
import type { Theme } from '../../theme';

const Wrapper = styled.div`
  margin-top: 30px;
  height: 73px;
`;

const Input = styled.input`
  width: 300px;
  height: 44px;
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  border-bottom: solid 1px ${(props: { theme: Theme }) => props.theme.color.lightGray}; 
  &:focus { outline: none; };

  ${media.phone`
    width: 259px;
    font-size: 13px;
    margin-top: 10px;
    margin-bottom: 0px;
  `}
`;

const ErrorMessage = styled.p`
  height: 16px;
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  font-size: 12px;
  color: ${(props: { theme: Theme }) => props.theme.color.error}
`;

type Props = {
  error?: string,
};

export default (props: Props) => {
  const { error, ...inputProps } = props;
  return (
    <Wrapper>
      <Input {...inputProps} />
      {error &&
      <ErrorMessage>
        {error}
      </ErrorMessage>
      }
    </Wrapper>
  );
};
