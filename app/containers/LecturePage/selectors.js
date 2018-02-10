import { createPageSelectors } from '../../utils/createPageSelectors';

export const {
  selectPage,
  makeSelectPayload,
  makeSelectIsFetching,
  makeSelectError,
} = createPageSelectors('lecturePage');
