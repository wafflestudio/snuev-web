import { createSelector } from 'reselect';
import { denormalize } from '../utils/denormalize';

const makeSelectGlobal = () => (state) => state.get('global');

const makeSelectEntities = () => createSelector(
  makeSelectGlobal(),
  (global) => global.get('entities')
);

const makeSelectUser = () => createSelector(
  makeSelectEntities(),
  makeSelectGlobal(),
  (entities, global) => denormalize(entities, 'users', global.getIn(['user', 'id'])),
);

export {
  makeSelectGlobal,
  makeSelectEntities,
  makeSelectUser,
};
