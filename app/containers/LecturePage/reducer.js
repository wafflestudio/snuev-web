/*
 *
 * LecturePage reducer
 *
 */

import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  getLectureRequest: ['id'],
  getLectureSuccess: null,
  getLectureFailure: ['error'],
  getEvaluationsRequest: ['id', 'page'],
  getEvaluationsSuccess: ['ids'],
  getEvaluationsFailure: ['error'],
  createEvaluationRequest: ['id', 'data'],
  createEvaluationSuccess: ['id'],
  createEvaluationFailure: ['error'],
});

/* ------------- Initial State ------------- */

export const initialState = fromJS({
  lecture: {
    id: null,
    isFetching: false,
    error: null,
  },
  evaluations: {
    ids: [],
    hasMore: false,
    isFetching: false,
    error: null,
  },
  evaluationForm: {
    isFetching: false,
    error: null,
  },
});

/* ------------- Reducers ------------- */

export const lectureRequest = (state, { id }) =>
  state.mergeDeep({ lecture: { id, isFetching: true, error: null } });

export const lectureSuccess = (state) =>
  state.mergeDeep({ lecture: { isFetching: false, error: null } });

export const lectureFailure = (state, { error }) =>
  state.mergeDeep({ lecture: { id: null, isFetching: false, error } });

export const evaluationsRequest = (state) =>
  state.mergeDeep({ evaluations: { isFetching: true, error: null } });

export const evaluationsSuccess = (state, { ids }) => ids.length ?
  state.mergeDeep({
    evaluations: {
      ids: state.getIn(['evaluations', 'ids']).concat(ids),
      hasMore: true,
      isFetching: false,
      error: null,
    },
  }) :
  state.mergeDeep({
    evaluations: {
      hasMore: false,
      isFetching: false,
      error: null,
    },
  });

export const evaluationsFailure = (state, { error }) =>
  state.mergeDeep({ evaluations: { isFetching: false, error } });

export const evaluationFormRequest = (state) =>
  state.mergeDeep({ evaluationForm: { isFetching: true, error: null } });

export const evaluationFormSuccess = (state, { id }) =>
  state.mergeDeep({
    evaluations: {
      ids: state.getIn(['evaluations', 'ids']).unshift(id),
    },
    evaluationForm: {
      isFetching: false,
      error: null,
    },
  });

export const evaluationFormFailure = (state, { error }) =>
  state.mergeDeep({ evaluationForm: { isFetching: false, error } });

/* ------------- Hookup Reducers To Types ------------- */

// should convert uppercase to screaming snake_case
export default createReducer(initialState, {
  [Types.GET_LECTURE_REQUEST]: lectureRequest,
  [Types.GET_LECTURE_SUCCESS]: lectureSuccess,
  [Types.GET_LECTURE_FAILURE]: lectureFailure,
  [Types.GET_EVALUATIONS_REQUEST]: evaluationsRequest,
  [Types.GET_EVALUATIONS_SUCCESS]: evaluationsSuccess,
  [Types.GET_EVALUATIONS_FAILURE]: evaluationsFailure,
  [Types.CREATE_EVALUATION_REQUEST]: evaluationFormRequest,
  [Types.CREATE_EVALUATION_SUCCESS]: evaluationFormSuccess,
  [Types.CREATE_EVALUATION_FAILURE]: evaluationFormFailure,
});
