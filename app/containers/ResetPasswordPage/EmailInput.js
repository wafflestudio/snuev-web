// @flow
import React from 'react';
import styled from 'styled-components';
import { FormattedHTMLMessage } from 'react-intl';
import { media, typo } from '../../style-utils';
import type { Theme } from '../../theme';

const Wrapper = styled.div`
  margin-top: 20px;
  ${media.phone`
    margin-top: 0px;
  `}
`;

const Input = styled.input`
  width: 200px;
  height: 44px;
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  border-bottom: solid 1px ${(props: { theme: Theme }) => props.theme.color.lightGray};
  margin-top: 20px;
  &:focus { outline: none; };

  ${media.phone`
    width: 190px;
    font-size: 13px;
    margin-top: 10px;
    margin-bottom: 0px;
  `}
`;

export const UsernameInputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EmailDomainText = styled.p`
  ${typo.header3}
  height: 44px;
  line-height: 42px;
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  border-bottom: solid 1px ${(props: { theme: Theme }) => props.theme.color.lightGray};
  margin-top: 20px;
  color: ${(props: { theme: Theme }) => props.theme.color.hint};
  ${media.phone`
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

export const UsernameInputText = styled.div`
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  font-size: 13px;
  color: ${(props: { theme: Theme }) => props.theme.color.hint};

  ${media.phone`
    margin-top: 10px;
  `}
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
      <UsernameInputText>
        <FormattedHTMLMessage id="usernameInputText" />
      </UsernameInputText>
      {error &&
      <ErrorMessage>
        {error}
      </ErrorMessage>
      }
    </Wrapper>
  );
};
