import { createSelector } from 'reselect';
import { makeSelectEntities } from '../../global/selectors';
import { denormalize } from '../../utils/denormalize';

const makeSelectPage = () => (state) => state.get('signUpPage');

const makeSelectDepartments = () => createSelector(
  makeSelectEntities(),
  (entities) => denormalize(entities, 'departments', 'all'),
);

export {
  makeSelectPage,
  makeSelectDepartments,
};
