import { createSelector } from 'reselect';
import { createPageSelectors } from '../../utils/createPageSelectors';

const {
  makeSelectPage,
  makeSelectIsFetching,
  makeSelectError,
  makeSelectPayload,
} = createPageSelectors('signUpPage', 'signUp');

const makeSelectSignUp = makeSelectPayload;

export {
  makeSelectIsFetching,
  makeSelectError,
  makeSelectSignUp,
};
