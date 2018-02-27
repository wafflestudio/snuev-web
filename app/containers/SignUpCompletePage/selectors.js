import { createSelector } from 'reselect';
import { createPageSelectors } from '../../utils/createPageSelectors';

const {
  makeSelectPage,
  makeSelectIsFetching,
  makeSelectError,
  makeSelectPayload,
} = createPageSelectors('signUpCompletePage', 'signUpComplete');

const makeSelectSignUpComplete = makeSelectPayload;

export {
  makeSelectIsFetching,
  makeSelectError,
  makeSelectSignUpComplete,
};
