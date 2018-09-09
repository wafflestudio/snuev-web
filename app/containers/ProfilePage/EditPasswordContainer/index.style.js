import styled from 'styled-components';

import { typo, media } from '../../../style-utils';

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
`;

export const Input = styled.input`
  ${typo.body2}
  width: 300px;
  height: 100%;
  opacity: 0.9;
  border-radius: 2px;
  line-height: 44px;
  background-color: #f0f1f5;
  padding-left: 20px;
  padding-right: 20px;

  &:focus {
    outline: none;
  } 
`;

export const ConfirmButtonWrapper = styled.div`
  width: 470px;
  height: 44px;
  margin-top: 20px;
  display: flex;
  flex-direction: row-reverse;
`;

export const ConfirmButton = styled.button`
  ${typo.body2}
  width: 86px;
  height: 40px;
  border-radius: 1px;
  background-color: #ffffff;
  border: solid 1px #4f48c4;
  color: #4f48c4;
`;

export const ErrorMessage = styled.div`
  height: 20px;
  margin-left: 170px;
  font-family: NotoSansCJKkr;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.54;
  letter-spacing: normal;
  color: #e54459;
  margin-bottom: 10px;
  visibility: ${(props) => props.error ? 'visible' : 'hidden'};
`;
