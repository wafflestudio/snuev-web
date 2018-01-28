import { createSelector } from 'reselect';

/**
 * Direct selector to the mainPage state domain
 */
const selectGlobalDomain = () => (state) => state.get('global');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MainPage
 */

const makeSelectGlobalPage = () => createSelector(
  selectGlobalDomain(),
  (substate) => substate.toJS()
);

const makeSelectNormalizedData = () => createSelector(
  selectGlobalDomain(),
  (substate) => substate.get('normalizedData'),
);

export default selectGlobalDomain;
export {
  makeSelectGlobalPage,
  makeSelectNormalizedData,
};
