import { createSelector } from 'reselect';
import { makeSelectEntities } from '../../global/selectors';
import { denormalize } from '../../utils/denormalize';

const makeSelectPage = () => (state) => state.get('profilePage');

const makeSelectMyEvaluations = () => createSelector(
  makeSelectEntities(),
  makeSelectPage(),
  (entities, page) => denormalize(entities, 'evaluations', page.getIn(['myEvaluations', 'ids'])),
);

export {
  makeSelectPage,
  makeSelectMyEvaluations,
};
