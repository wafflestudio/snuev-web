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
const makeSelectIsFetching = () => createSelector(
  makeSelectPage(),
  (state) => state.getIn(['latestEvaluations', 'isFetching'])
    || state.getIn(['mostEvaluatedLectures', 'isFetching'])
    || state.getIn(['topRatedLectures', 'isFetching'])
    || state.getIn(['mostLikedEvaluations', 'isFetching'])
);

export {
  makeSelectLatestEvaluations,
  makeSelectMostEvaluatedLectures,
  makeSelectTopRatedLectures,
  makeSelectMostLikedEvaluations,
  makeSelectIsFetching,
};
