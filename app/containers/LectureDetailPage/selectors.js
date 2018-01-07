import { createSelector } from 'reselect';

/**
 * Direct selector to the lectureDetailPage state domain
 */
const selectLectureDetailPageDomain = () => (state) => state.get('lectureDetailPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LectureDetailPage
 */

const makeSelectLectureDetailPage = () => createSelector(
  selectLectureDetailPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectLectureDetailPage;
export {
  selectLectureDetailPageDomain,
};
