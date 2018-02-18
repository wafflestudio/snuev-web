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
  (entities, page) => denormalize(entities, 'lectures', page.get('data')),
);

export {
  makeSelectIsFetching,
  makeSelectError,
  makeSelectLecture,
};
