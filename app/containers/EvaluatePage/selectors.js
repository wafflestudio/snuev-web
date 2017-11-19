import { createSelector } from 'reselect';

/**
 * Direct selector to the evaluatePage state domain
 */
const selectEvaluatePageDomain = () => (state) => state.get('evaluatePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EvaluatePage
 */

const makeSelectEvaluatePage = () => createSelector(
  selectEvaluatePageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectEvaluatePage;
export {
  selectEvaluatePageDomain,
};
