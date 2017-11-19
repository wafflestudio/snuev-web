import { createSelector } from 'reselect';

/**
 * Direct selector to the confirmEmailPage state domain
 */
const selectConfirmEmailPageDomain = () => (state) => state.get('confirmEmailPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ConfirmEmailPage
 */

const makeSelectConfirmEmailPage = () => createSelector(
  selectConfirmEmailPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectConfirmEmailPage;
export {
  selectConfirmEmailPageDomain,
};
