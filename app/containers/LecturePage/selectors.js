import { createSelector } from 'reselect';
import { makeSelectEntities } from '../../global/selectors';
import { denormalize } from '../../utils/denormalize';

const makeSelectPage = () => (state) => state.get('lecturePage');

const makeSelectLecture = () => createSelector(
  makeSelectEntities(),
  makeSelectPage(),
  (entities, page) => denormalize(entities, 'lectures', page.getIn(['lecture', 'id'])),
);

const makeSelectEvaluations = () => createSelector(
  makeSelectEntities(),
  makeSelectPage(),
  (entities, page) => denormalize(entities, 'evaluations', page.getIn(['evaluations', 'ids'])),
);

const makeSelectMyEvaluation = () => createSelector(
  makeSelectEntities(),
  makeSelectPage(),
  (entities, page) => denormalize(entities, 'evaluations', page.getIn(['myEvaluation', 'id']))
);

export {
  makeSelectPage,
  makeSelectLecture,
  makeSelectEvaluations,
  makeSelectMyEvaluation,
};
