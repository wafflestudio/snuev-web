// @flow
import React from 'react';
import styled from 'styled-components';
import CreateIconSrc from '../../../images/ic-write-small.png';
import CreateIcon2XSrc from '../../../images/ic-write-small@2x.png';
import CreateIcon3XSrc from '../../../images/ic-write-small@3x.png';
import type { Theme } from '../../../theme';
import { media } from '../../../style-utils';

export const Wrapper = styled.form`
  background-color: ${(props: Props) => props.theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.phone`
    height: 100%;
    width: 100%;
  `}
`;

export const Header = styled.div`
  font-size: 30px;
`;

export const SubHeader = styled.div`
  opacity: 0.8;
  font-size: 16px;
`;

export const LectureName = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px -40px 30px;
  ${media.phone`
    flex-direction: column;
  `}
`;

export const RatingMargin = styled.div`
  margin: 0px 40px;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 200px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  resize: none;
  padding: 21px 0px;
  &:focus {
    outline: none;
  }

  margin-bottom: 15px;
`;

const CreateIconFrame = styled.img`
`;

export const CreateIcon = (props: Props) => <CreateIconFrame src={CreateIconSrc} srcSet={`${CreateIcon2XSrc} 2x, ${CreateIcon3XSrc} 3x`} {...props} />;

export const Hint = styled.div`
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.sansSerif};
  color: ${(props: { error: boolean, theme: Theme }) => props.error ? props.theme.color.error : 'initial'};
  ${media.phone`
    padding-right: 30px;
  `}
`;

export const FlatButton = styled.button`
  color: ${(props: { cancel: boolean }) => props.cancel ? 'rgba(0,0,0,.4)' : 'initial'};
  margin-left: 30px;
  cursor: pointer;
  font-weight: 500;
  &:focus {
    outline: 0;
  }
  ${media.phone`
    width: 50px;
    margin-left: 0px;
  `}
`;

export const BottomComponentWrapper = styled.div`
  display: flex;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
