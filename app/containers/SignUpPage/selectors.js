import { createPageSelectors } from '../../utils/createPageSelectors';

const {
  makeSelectIsFetching,
  makeSelectError,
} = createPageSelectors('signUpPage');

export {
  makeSelectIsFetching,
  makeSelectError,
};
