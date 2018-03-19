import { createPageSelectors } from '../../utils/createPageSelectors';

const {
  makeSelectIsFetching,
  makeSelectError,
} = createPageSelectors('newPasswordPage');

export {
  makeSelectIsFetching,
  makeSelectError,
};
