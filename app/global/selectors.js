import { createSelector } from 'reselect';
import { createPageSelectors } from '../utils/createPageSelectors';
import { denormalize } from '../utils/denormalize';

const makeSelectGlobal = () => (state) => state.get('global');

const makeSelectEntities = () => createSelector(
  makeSelectGlobal(),
  (global) => global.get('entities'),
);

const makeSelectSignInHelper = () => createSelector(
  makeSelectGlobal(),
  (global) => global.get('signIn')
);
const makeSelectUserHelper = () => createSelector(
  makeSelectGlobal(),
  (global) => global.get('user')
);

const signInSelectors = createPageSelectors(null, null, makeSelectSignInHelper);
const makeSelectSignInPayload = signInSelectors.makeSelectPayload;
const makeSelectSignInIsFetching = signInSelectors.makeSelectIsFetching;
const makeSelectSignInError = signInSelectors.makeSelectError;

const userSelectors = createPageSelectors(null, null, makeSelectUserHelper);
const makeSelectUser = () => createSelector(
  makeSelectEntities(),
  makeSelectUserHelper(),
  (entities, user) => denormalize(entities, 'users', user.get('id')),
);
const makeSelectUserIsFetching = userSelectors.makeSelectIsFetching;
const makeSelectUserError = userSelectors.makeSelectError;


export {
  makeSelectEntities,
  makeSelectSignInPayload,
  makeSelectSignInIsFetching,
  makeSelectSignInError,
  makeSelectUser,
  makeSelectUserIsFetching,
  makeSelectUserError,
};
