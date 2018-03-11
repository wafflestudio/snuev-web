import { createSelector } from 'reselect';
import { createPageSelectors } from '../../utils/createPageSelectors';
import { makeSelectEntities } from '../../global/selectors';
import { denormalize } from '../../utils/denormalize';

const makeSelectPage = () => (state) => state.get('lecturePage');

const makeSelectLectureHelper = () => createSelector(
  makeSelectPage(),
  (page) => page.get('lecture')
);

const makeSelectEvaluationsHelper = () => createSelector(
  makeSelectPage(),
  (page) => page.get('evaluations')
);

const makeSelectMyEvaluationHelper = () => createSelector(
  makeSelectPage(),
  (page) => page.get('myEvaluation')
);

const lectureSelectorMakers = createPageSelectors(makeSelectLectureHelper);

const makeSelectLecture = () => createSelector(
  makeSelectEntities(),
  lectureSelectorMakers.makeSelectPage(),
  (entities, lecture) => denormalize(entities, 'lectures', lecture.get('id')),
);
const makeSelectLectureIsFetching = lectureSelectorMakers.makeSelectIsFetching;
const makeSelectLectureError = lectureSelectorMakers.makeSelectError;

const evaluationsSelectorMakers = createPageSelectors(makeSelectEvaluationsHelper, 'hasMore');

const makeSelectEvaluations = () => createSelector(
  makeSelectEntities(),
  evaluationsSelectorMakers.makeSelectPage(),
  (entities, evaluations) => denormalize(entities, 'evaluations', evaluations.get('ids')),
);
const makeSelectEvaluationsHasMore = evaluationsSelectorMakers.makeSelectHasMore;
const makeSelectEvaluationsIsFetching = evaluationsSelectorMakers.makeSelectIsFetching;
const makeSelectEvaluationsError = evaluationsSelectorMakers.makeSelectError;

const myEvaluationSelectorMakers = createPageSelectors(makeSelectMyEvaluationHelper);

const makeSelectMyEvaluation = () => createSelector(
  makeSelectEntities(),
  myEvaluationSelectorMakers.makeSelectPage(),
  (entities, myEvaluation) => denormalize(entities, 'evaluations', myEvaluation.get('id'))
);

export {
  makeSelectLecture,
  makeSelectLectureIsFetching,
  makeSelectLectureError,
  makeSelectEvaluations,
  makeSelectEvaluationsHasMore,
  makeSelectEvaluationsIsFetching,
  makeSelectEvaluationsError,
  makeSelectMyEvaluation,
};
