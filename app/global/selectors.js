import { createSelector } from 'reselect';
import { createPageSelectors } from '../utils/createPageSelectors';

const makeSelectGlobal = () => (state) => state.get('global');
const makeSelectSignIn = () => createSelector(
  makeSelectGlobal(),
  (global) => global.get('signIn')
);
const makeSelectUser = () => createSelector(
  makeSelectGlobal(),
  (global) => global.get('user')
);

const signInSelectors = createPageSelectors(null, null, makeSelectSignIn);
const makeSelectSignInPayload = signInSelectors.makeSelectPayload;
const makeSelectSignInIsFetching = signInSelectors.makeSelectIsFetching;
const makeSelectSignInError = signInSelectors.makeSelectError;

const userSelectors = createPageSelectors(null, null, makeSelectUser);
const makeSelectUserPayload = userSelectors.makeSelectPayload;
const makeSelectUserIsFetching = userSelectors.makeSelectIsFetching;
const makeSelectUserError = userSelectors.makeSelectError;

const makeSelectEntities = () => createSelector(
  makeSelectGlobal(),
  (global) => global.get('entities'),
);

export {
  makeSelectEntities,
  makeSelectSignInPayload,
  makeSelectSignInIsFetching,
  makeSelectSignInError,
  makeSelectUserPayload,
  makeSelectUserIsFetching,
  makeSelectUserError,
};
