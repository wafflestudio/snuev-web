import React from 'react';
import Rating from 'react-rating';
import { StarEmpty, StarFull, SmallStarEmpty, SmallStarFull } from './index.style';

export default (props) => (
  <Rating
    emptySymbol={props.small ? <SmallStarEmpty /> : <StarEmpty />}
    fullSymbol={props.small ? <SmallStarFull /> : <StarFull />}
    {...props}
  />
);
