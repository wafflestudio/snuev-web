import { createSelector } from 'reselect';
import { createPageSelectors } from '../utils/createPageSelectors';
import { denormalize } from '../utils/denormalize';

const makeSelectGlobal = () => (state) => state.get('global');

const makeSelectEntities = () => createSelector(
  makeSelectGlobal(),
  (global) => global.get('entities')
);

const makeSelectSignInHelper = () => createSelector(
  makeSelectGlobal(),
  (global) => global.get('signIn')
);
const makeSelectUserHelper = () => createSelector(
  makeSelectGlobal(),
  (global) => global.get('user')
);

const signInSelectorMakers = createPageSelectors(makeSelectSignInHelper);
const makeSelectSignInPayload = signInSelectorMakers.makeSelectPayload;
const makeSelectSignInIsFetching = signInSelectorMakers.makeSelectIsFetching;
const makeSelectSignInError = signInSelectorMakers.makeSelectError;

const userSelectorMakers = createPageSelectors(makeSelectUserHelper);

const makeSelectUser = () => createSelector(
  makeSelectEntities(),
  userSelectorMakers.makeSelectPage(),
  (entities, user) => denormalize(entities, 'users', user.get('id')),
);
const makeSelectUserIsFetching = userSelectorMakers.makeSelectIsFetching;
const makeSelectUserError = userSelectorMakers.makeSelectError;


export {
  makeSelectEntities,
  makeSelectSignInPayload,
  makeSelectSignInIsFetching,
  makeSelectSignInError,
  makeSelectUser,
  makeSelectUserIsFetching,
  makeSelectUserError,
};
