import { createSelector } from 'reselect';

/**
 * Direct selector to the signupPage state domain
 */
const selectSignupPageDomain = () => (state) => state.get('signupPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignupPage
 */

const makeSelectSignupPage = () => createSelector(
  selectSignupPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSignupPage;
export {
  selectSignupPageDomain,
};
