import styled from 'styled-components';

import { typo, media } from '../../../style-utils';
import SearchIcon from '../../../images/ic-search.png';

export const Background = styled.div`
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
    background-color: #f0f1f5;
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

export const DepartmentWrapper = styled.form`
  width: 300px;
  height: 100%;
  justify-content: center;
`;

export const ResendEmailButton = styled.button`
  ${typo.body2}
  width: fit-content;
  height: 24px;
  color: #4f48c4;
  border-bottom: solid 1px #4f48c4;
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
  z-index: 100;
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
  background-color: ${(props) => props.highlighted ? '#eee' : '#ffffff'};

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