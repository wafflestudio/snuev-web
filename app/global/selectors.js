import { createSelector } from 'reselect';
import { List } from 'immutable';
import { denormalize } from '../utils/denormalize';

const makeSelectGlobal = () => (state) => state.get('global');

const makeSelectEntities = () => createSelector(
  makeSelectGlobal(),
  (global) => global.get('entities'),
);

const makeSelectAppLayout = () => createSelector(
  makeSelectGlobal(),
  (global) => global.get('appLayout'),
);

const makeSelectUser = () => createSelector(
  makeSelectEntities(),
  makeSelectGlobal(),
  (entities, global) => denormalize(entities, 'users', global.getIn(['user', 'id'])),
);

const makeSelectCourses = () => createSelector(
  makeSelectEntities(),
  makeSelectGlobal(),
  (entities, global) => denormalize(entities, 'courses', global.getIn(['courses', 'ids'])) || List(),
);

const makeSelectLectures = () => createSelector(
  makeSelectEntities(),
  makeSelectGlobal(),
  (entities, global) => denormalize(entities, 'lectures', global.getIn(['lectures', 'ids'])) || List(),
);

const makeSelectRoute = () => (state) => state.get('route');

const makeSelectPrev = () => createSelector(
  makeSelectRoute(),
  (route) => route.get('locationBeforeTransitions'),
);

const makeSelectBookmarks = () => createSelector(
  makeSelectGlobal(),
  (global) => global.get('bookmarks'),
);

const makeSelectSearchFilter = () => createSelector(
  makeSelectGlobal(),
  (global) => global.get('searchFilter'),
);

const makeSelectDepartments = () => createSelector(
  makeSelectEntities(),
  (entities) => denormalize(entities, 'departments', 'all'),
);

const makeSelectVotes = () => createSelector(
  makeSelectGlobal(),
  (global) => global.get('votes'),
);

const makeSelectEveryLecture = () => createSelector(
  makeSelectEntities(),
  (entities) => denormalize(entities, 'lectures', 'all'),
);

const makeSelectBookmarkedLectures = () => createSelector(
  makeSelectEntities(),
  makeSelectGlobal(),
  (entities, global) => denormalize(entities, 'lectures', global.getIn(['bookmarkedLectures', 'ids'])) || List(),
);

export {
  makeSelectGlobal,
  makeSelectAppLayout,
  makeSelectEntities,
  makeSelectUser,
  makeSelectCourses,
  makeSelectLectures,
  makeSelectPrev,
  makeSelectBookmarks,
  makeSelectSearchFilter,
  makeSelectDepartments,
  makeSelectVotes,
  makeSelectEveryLecture,
  makeSelectBookmarkedLectures,
};
