// @flow
import React from 'react';
import styled from 'styled-components';
import { media, typo } from '../../style-utils';
import type { Theme } from '../../theme';

const Wrapper = styled.div`
  height: 100px;
`;

const Input = styled.input`
  width: 200px;
  height: 44px;
  opacity: 0.7;
  font-size: 17px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  border-bottom: solid 1px ${(props: { theme: Theme }) => props.theme.color.lightGray};
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

export const UsernameInputContainer = styled.div`
  display: flex;
  height: 55px;
  flex-direction: row;
`;

export const EmailDomainText = styled.p`
  ${typo.header3}
  width: 100px;
  height: 44px;
  line-height: 42px;
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  border-bottom: solid 1px ${(props: { theme: Theme }) => props.theme.color.lightGray};
  margin-top: 11px;
  color: ${(props: { theme: Theme }) => props.theme.color.hint};
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
      <UsernameInputContainer>
        <Input {...inputProps} />
        <EmailDomainText>
          @snu.ac.kr
        </EmailDomainText>
      </UsernameInputContainer>
      {error &&
      <ErrorMessage>
        {error}
      </ErrorMessage>
      }
    </Wrapper>
  );
};
