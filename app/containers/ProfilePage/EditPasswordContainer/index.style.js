// @flow

import styled from 'styled-components';

import { typo, media } from '../../../style-utils';

type Props = {
  theme: any,
};

export const Background = styled.form`
  width: 100%;
  height; 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

export const CurrentPasswordWrapper = styled.div`
  width: 100%;
  height: 44px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

export const NewPasswordWrapper = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  ${typo.body1}
  width: 120px;
  height: 100%;
  opacity: 0.9;
  margin-right: 50px;
  line-height: 44px;

  ${media.tablet`
    margin-right: 20px;
  `}

  ${media.phone`
    margin-right: 10px;
  `}
`;

export const Input = styled.input`
  ${typo.body2}
  width: 300px;
  height: 100%;
  opacity: 0.9;
  border-radius: 2px;
  line-height: 44px;
  background-color: ${(props: Props) => props.theme.color.grayBackground1};
  padding-left: 20px;
  padding-right: 20px;

  &:focus {
    outline: none;
  }

  ${media.phone`
    width: 220px;
  `}
`;

export const ConfirmButtonWrapper = styled.div`
  width: 470px;
  height: 44px;
  margin-top: 20px;
  display: flex;
  flex-direction: row-reverse;

  ${media.tablet`
    width: 440px;
  `}

  ${media.phone`
    width: 350px;
  `}
`;

export const ConfirmButton = styled.button`
  ${typo.body1}
  width: 86px;
  height: 40px;
  border-radius: 1px;
  background-color: ${(props: Props) => props.theme.color.white};
  border: solid 1px ${(props: Props) => props.theme.color.primary};
  color: ${(props: Props) => props.theme.color.primary};
`;

export const ErrorMessage = styled.div`
  ${typo.body2}
  height: 20px;
  margin-left: 170px;
  line-height: 1.54;
  color: ${(props: Props) => props.theme.color.error};
  margin-bottom: 10px;
  visibility: ${(props: Props) => props.error ? 'visible' : 'hidden'};
`;
