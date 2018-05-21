import React from 'react';
import styled from 'styled-components';
import CreateIconSrc from '../../../images/ic-write-small.png';
import CreateIcon2XSrc from '../../../images/ic-write-small@2x.png';
import CreateIcon3XSrc from '../../../images/ic-write-small@3x.png';

export const Wrapper = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const CreateIcon = (props) => <CreateIconFrame src={CreateIconSrc} srcSet={`${CreateIcon2XSrc} 2x, ${CreateIcon3XSrc} 3x`} {...props} />;

