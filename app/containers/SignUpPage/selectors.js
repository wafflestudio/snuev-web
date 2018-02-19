import { createSelector } from 'reselect';
import { createPageSelectors } from '../../utils/createPageSelectors';

const {
  makeSelectPage,
  makeSelectIsFetching,
  makeSelectError,
} = createPageSelectors('signUpPage');

const makeSelectSignUp = () => createSelector(
  makeSelectPage(),
  (page) => page.get('signUp')
);

export {
  makeSelectIsFetching,
  makeSelectError,
  makeSelectSignUp,
};
