import { createPageSelectors } from '../../utils/createPageSelectors';

const {
  makeSelectIsFetching,
  makeSelectError,
} = createPageSelectors('resetPasswordPage');

export {
  makeSelectIsFetching,
  makeSelectError,
};
