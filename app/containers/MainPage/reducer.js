import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

const LATEST_EVALUATIONS = 'latestEvaluations';
const MOST_EVALUATED_LECTURES = 'mostEvaluatedLectures';
const TOP_RATED_LECTURES = 'topRatedLectures';
const MOST_LIKED_EVALUATIONS = 'mostLikedEvaluations';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  getLatestEvaluationsRequest: null,
  getLatestEvaluationsSuccess: ['ids'],
  getLatestEvaluationsFailure: ['error'],
  getMostEvaluatedLecturesRequest: null,
  getMostEvaluatedLecturesSuccess: ['ids'],
  getMostEvaluatedLecturesFailure: ['error'],
  getTopRatedLecturesRequest: null,
  getTopRatedLecturesSuccess: ['ids'],
  getTopRatedLecturesFailure: ['error'],
  getMostLikedEvaluationsRequest: null,
  getMostLikedEvaluationsSuccess: ['ids'],
  getMostLikedEvaluationsFailure: ['error'],
});

/* ------------- Initial State ------------- */

export const initialState = fromJS({
  [LATEST_EVALUATIONS]: {
    ids: null,
    isFetching: false,
    error: null,
  },
  [MOST_EVALUATED_LECTURES]: {
    ids: null,
    isFetching: false,
    error: null,
  },
  [TOP_RATED_LECTURES]: {
    ids: null,
    isFetching: false,
    error: null,
  },
  [MOST_LIKED_EVALUATIONS]: {
    ids: null,
    isFetching: false,
    error: null,
  },
});

/* ------------- Reducers ------------- */

export const request = (key) => (state) =>
  state.mergeDeep({ [key]: { isFetching: true, error: null } });

export const success = (key) => (state, { ids }) =>
  state.mergeDeep({ [key]: { ids, isFetching: false, error: null } });

export const failure = (key) => (state, { error }) =>
  state.mergeDeep({ [key]: { isFetching: false, error } });

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(initialState, {
  [Types.GET_LATEST_EVALUATIONS_REQUEST]: request(LATEST_EVALUATIONS),
  [Types.GET_LATEST_EVALUATIONS_SUCCESS]: success(LATEST_EVALUATIONS),
  [Types.GET_LATEST_EVALUATIONS_FAILURE]: failure(LATEST_EVALUATIONS),
  [Types.GET_MOST_EVALUATED_LECTURES_REQUEST]: request(MOST_EVALUATED_LECTURES),
  [Types.GET_MOST_EVALUATED_LECTURES_SUCCESS]: success(MOST_EVALUATED_LECTURES),
  [Types.GET_MOST_EVALUATED_LECTURES_FAILURE]: failure(MOST_EVALUATED_LECTURES),
  [Types.GET_TOP_RATED_LECTURES_REQUEST]: request(TOP_RATED_LECTURES),
  [Types.GET_TOP_RATED_LECTURES_SUCCESS]: success(TOP_RATED_LECTURES),
  [Types.GET_TOP_RATED_LECTURES_FAILURE]: failure(TOP_RATED_LECTURES),
  [Types.GET_MOST_LIKED_EVALUATIONS_REQUEST]: request(MOST_LIKED_EVALUATIONS),
  [Types.GET_MOST_LIKED_EVALUATIONS_SUCCESS]: success(MOST_LIKED_EVALUATIONS),
  [Types.GET_MOST_LIKED_EVALUATIONS_FAILURE]: failure(MOST_LIKED_EVALUATIONS),
});
