// @flow
import React from 'react';
import Rating from 'react-rating';
import { StarEmpty, StarFull, SmallStarEmpty, SmallStarFull } from './index.style';

type Props = {
  initialRating?: number,
  small?: boolean,
};

export default (props: Props) => {
  const { small, ...otherProps } = props;
  return (
    <Rating
      emptySymbol={small ? <SmallStarEmpty /> : <StarEmpty />}
      fullSymbol={small ? <SmallStarFull /> : <StarFull />}
      start={0}
      stop={10}
      step={2}
      fractions={2}
      {...otherProps}
    />
  );
};
