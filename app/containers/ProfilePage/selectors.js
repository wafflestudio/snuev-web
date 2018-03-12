import { createSelector } from 'reselect';
import { createPageSelectors } from '../../utils/createPageSelectors';
import { makeSelectEntities } from '../../global/selectors';
import { denormalize } from '../../utils/denormalize';

const {
  makeSelectIsFetching,
  makeSelectError,
  makeSelectPayload,
} = createPageSelectors('profilePage', 'profile');

const makeSelectProfile = makeSelectPayload;

const makeSelectDepartments = () => createSelector(
  makeSelectEntities(),
  (entities) => denormalize(entities, 'departments', null),
);

export {
  makeSelectIsFetching,
  makeSelectError,
  makeSelectProfile,
  makeSelectDepartments,
};
