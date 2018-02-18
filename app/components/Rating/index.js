// @flow
import React from 'react';
import Rating from 'react-rating';
import { StarEmpty, StarFull, SmallStarEmpty, SmallStarFull } from './index.style';

type Props = {
  initialRating?: number,
  small?: boolean,
};

export default (props: Props) => {
  let { initialRating, ...otherProps } = props;
  initialRating = (initialRating || 0) / 2;
  return (
    <Rating
      emptySymbol={props.small ? <SmallStarEmpty /> : <StarEmpty />}
      fullSymbol={props.small ? <SmallStarFull /> : <StarFull />}
      initialRating={initialRating}
      {...otherProps}
    />
  );
};
