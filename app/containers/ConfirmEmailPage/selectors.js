import { createPageSelectors } from '../../utils/createPageSelectors';

const {
  makeSelectIsFetching,
  makeSelectError,
  makeSelectSuccess,
} = createPageSelectors('confirmEmailPage', 'success');


export {
  makeSelectIsFetching,
  makeSelectError,
  makeSelectSuccess,
};
