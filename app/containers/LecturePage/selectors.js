import { createPageSelectors } from '../../utils/createPageSelectors';
import { createSelector } from 'reselect';
import { makeSelectEntities } from 'global/selectors';
import { denormalize } from 'utils/denormalize';

const {
  makeSelectPage,
  makeSelectData,
  makeSelectIsFetching,
  makeSelectError,
} = createPageSelectors('lecturePage');

const makeSelectLecture = () => createSelector(
  makeSelectEntities(),
  makeSelectPage(),
  (entities, page) => denormalize(entities, 'lectures', page.get('data')),
);

export {
  makeSelectData,
  makeSelectIsFetching,
  makeSelectError,
  makeSelectLecture,
};
