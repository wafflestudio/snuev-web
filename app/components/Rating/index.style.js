import React from 'react';
import styled from 'styled-components';
import starEmpty from '../../images/star-empty.svg';
import starFull from '../../images/star-full.svg';

const StarFrame = styled.img`
  width: 30px;
  height: 30px;
`;

const SmallStarFrame = styled.img`
  width: 17px;
  height: 17px;
`;

export const StarEmpty = (props) => <StarFrame src={starEmpty} {...props} />;
export const StarFull = (props) => <StarFrame src={starFull} {...props} />;
export const SmallStarEmpty = (props) => <SmallStarFrame src={starEmpty} {...props} />;
export const SmallStarFull = (props) => <SmallStarFrame src={starFull} {...props} />;
