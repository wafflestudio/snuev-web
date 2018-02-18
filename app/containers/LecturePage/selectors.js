import { createSelector } from 'reselect';
import { createPageSelectors } from '../../utils/createPageSelectors';
import { makeSelectEntities } from '../../global/selectors';
import { denormalize } from '../../utils/denormalize';

const {
  makeSelectPage,
  makeSelectIsFetching,
  makeSelectError,
} = createPageSelectors('lecturePage');

const makeSelectLecture = () => createSelector(
  makeSelectEntities(),
  makeSelectPage(),
  (entities, page) => denormalize(entities, 'lectures', page.getIn(['id', 'lecture'])),
);

const makeSelectEvaluations = () => createSelector(
  makeSelectEntities(),
  makeSelectPage(),
  (entities, page) => denormalize(entities, 'evaluations', page.getIn(['id', 'evaluation'])),
);

export {
  makeSelectIsFetching,
  makeSelectError,
  makeSelectLecture,
  makeSelectEvaluations,
};
