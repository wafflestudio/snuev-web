import { createSelector } from 'reselect';
import { makeSelectNormalizedData } from 'global/selectors';
import { denormalize } from 'utils/denormalize';

/**
 * Direct selector to the lectureDetailPage state domain
 */
const selectLectureDetailPageDomain = () => (state) => state.get('lecturePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LectureDetailPage
 */

const makeSelectData = () => createSelector(
  selectLectureDetailPageDomain(),
  (substate) => substate.get('data'),
);

const makeSelectIsFetching = () => createSelector(
  selectLectureDetailPageDomain(),
  (substate) => substate.get('isFetching'),
);

const makeSelectError = () => createSelector(
  selectLectureDetailPageDomain(),
  (substate) => substate.get('error'),
);

const makeSelectLecture = () => createSelector(
  makeSelectNormalizedData(),
  selectLectureDetailPageDomain(),
  (normalizedData, substate) => denormalize(normalizedData, 'lectures', substate.get('data')),
);

export {
  selectLectureDetailPageDomain,
  makeSelectData,
  makeSelectIsFetching,
  makeSelectError,
  makeSelectLecture,
};
