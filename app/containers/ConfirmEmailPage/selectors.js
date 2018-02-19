import { createSelector } from 'reselect';
import { createPageSelectors } from '../../utils/createPageSelectors';
import { makeSelectEntities } from '../../global/selectors';
import { denormalize } from '../../utils/denormalize';

const {
  makeSelectPage,
  makeSelectIsFetching,
  makeSelectError,
} = createPageSelectors('confirmEmailPage');

const makeSelectSuccess = () => createSelector(
  makeSelectPage(),
  (page) => page.get('success')
);

export {
  makeSelectIsFetching,
  makeSelectError,
  makeSelectSuccess,
};
