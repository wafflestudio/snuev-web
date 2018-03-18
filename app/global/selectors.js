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

const makeSelectCourses = () => createSelector(
  makeSelectEntities(),
  makeSelectGlobal(),
  (entities, global) => denormalize(entities, 'courses', global.getIn(['courses', 'ids'])),
);

export {
  makeSelectGlobal,
  makeSelectEntities,
  makeSelectUser,
  makeSelectCourses,
};
