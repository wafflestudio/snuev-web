// @flow
import React from 'react';
import styled from 'styled-components';
import { media } from '../../style-utils';
import { Theme } from '../../theme';

const Wrapper = styled.div`
  height: 100px;
  padding-botton: 30px;
`;

const Input = styled.input`
  width: 300px;
  height: 44px;
  opacity: 0.7;
  font-size: 17px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  border-bottom: solid 1px #959aac;
  &:focus { outline: none; };
  margin-top: 11px;
  color: var(--black-two);

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
