import { createSelector } from 'reselect';
import { createPageSelectors } from '../../utils/createPageSelectors';
import { makeSelectEntities } from '../../global/selectors';
import { denormalize } from '../../utils/denormalize';

const {
  makeSelectPage,
  makeSelectIsFetching,
  makeSelectError,
  makeSelectPayload,
} = createPageSelectors('confirmEmailPage', 'success');

const makeSelectSuccess = makeSelectPayload;

export {
  makeSelectIsFetching,
  makeSelectError,
  makeSelectSuccess,
};
