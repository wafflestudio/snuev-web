import { createSelector } from 'reselect';
import { makeSelectEntities } from '../../global/selectors';
import { denormalize } from '../../utils/denormalize';

const makeSelectPage = () => (state) => state.get('mainPage');

const makeMakeSelect = (key, entityType) => () => createSelector(
  makeSelectEntities(),
  makeSelectPage(),
  (entities, page) => denormalize(entities, entityType, page.getIn([key, 'ids']))
);

const makeSelectLatestEvaluations = makeMakeSelect('latestEvaluations', 'evaluations');
const makeSelectMostEvaluatedLectures = makeMakeSelect('mostEvaluatedLectures', 'lectures');
const makeSelectTopRatedLectures = makeMakeSelect('topRatedLectures', 'lectures');
const makeSelectMostLikedEvaluations = makeMakeSelect('mostLikedEvaluations', 'evaluations');

export {
  makeSelectLatestEvaluations,
  makeSelectMostEvaluatedLectures,
  makeSelectTopRatedLectures,
  makeSelectMostLikedEvaluations,
};
