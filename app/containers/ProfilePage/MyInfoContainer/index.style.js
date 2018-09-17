// @flow

import styled from 'styled-components';

import { typo, media } from '../../../style-utils';
import SearchIcon from '../../../images/ic-search.png';

export const Background = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;

  ${media.phone`
    padding-top: 20px;
  `}
`;


export const AttributeWrapper = styled.div`
  width: 100%;
  height: 44px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  ${typo.body1}
  width: 60px;
  height: 100%;
  opacity: 0.8;
  margin-right: 55px;
  line-height: 44px;

  ${media.tablet`
    width: 50px;
    margin-right: 10px;
  `}
`;

export const EmailAndResendEmailWrapper = styled.div`
  width: 400px;
  display: flex;
  align-items: center;

  ${media.phone`
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
    margin-top: 20px;
  `}
`;

export const EmailWrapper = styled.div`
  ${typo.body2}
  width: 300px;
  height: 100%;
  opacity: 0.9;
  line-height: 44px;
  padding-left: 20px;

  ${media.tablet`
    opacity: 0.9;
    font-size: 16px;
  `}

  ${media.phone`
    width: 264px;
  `}
`;

export const NicknameWrapper = styled.input`
  ${typo.body2}
  width: 300px;
  height: 100%;
  opacity: 0.9;
  border-radius: 4px;
  line-height: 44px;
  padding-left: 20px;

  &:hover {
    background-color: ${(props: Props) => props.theme.color.grayBackground1};
  }

  &:focus {
    outline: none;
  }

  ${media.tablet`
    opacity: 0.9;
    font-size: 16px;
  `}

  ${media.phone`
    width: 264px;
  `}
`;

export const DepartmentWrapper = styled.div`
  width: 300px;
  height: 100%;
  justify-content: center;
`;

export const ResendEmailButton = styled.button`
  ${typo.body2}
  width: fit-content;
  height: 24px;
  color: ${(props: Props) => props.theme.color.primary};
  border-bottom: solid 1px ${(props: Props) => props.theme.color.primary};
  cursor: pointer;
  padding: 0;

  ${media.phone`
    margin-left: 20px;
  `}
`;

export const AutoCompleteMenu = styled.div`
  background-color: white;
  border: solid 1px #ccc;
  position: relative;
  z-index: 1;
  max-height: 200px;
  overflow: auto;

  ${media.phone`
    width: 264px;
  `}
`;

export const AutoCompleteItem = styled.div`
  ${typo.body2}
  width: 298px;
  padding: 5px 0 5px 12px;
  background-color: ${(props: Props) => props.highlighted ? '#eee' : props.theme.color.white};

  ${media.tablet`
    opacity: 0.9;
    font-size: 16px;
  `}

  ${media.phone`
    width: 262px;
  `}
`;

export const SearchInput = styled.input`
  ${typo.body2}
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 44px;
  border-radius: 4px;

  &:focus {
    outline: none;
    background: rgb(240, 241, 245) url(${SearchIcon}) no-repeat 95% 50%;
  }

  &:hover {
    background: rgb(240, 241, 245) url(${SearchIcon}) no-repeat 95% 50%;
  }

  ${media.tablet`
    opacity: 0.9;
    font-size: 16px;
  `}

  ${media.phone`
    width: 264px;
  `}
`;

export const ConfirmButtonWrapper = styled.div`
  width: 510px;
  height: 44px;
  margin-top: 20px;
  display: flex;
  flex-direction: row-reverse;

  ${media.tablet`
    width: 445px;
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
