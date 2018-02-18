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
  getEvaluationsSuccess: ['ids'],
});

/* ------------- Initial State ------------- */

export const initialState = fromJS({
  id: {
    lecture: null,
    evaluation: null,
  },
  isFetching: false,
  error: null,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { id }) =>
  state.merge({ isFetching: true, error: null }).setIn(['id', 'lecture'], id);

// successful api lookup
export const success = (state) =>
  state.merge({ isFetching: false, error: null });

// Something went wrong somewhere.
export const failure = (state, { error }) =>
  state.merge({ isFetching: false, error }).setIn(['id', 'lecture'], null);

export const getEvaluationsSuccess = (state, { ids }) =>
  state.setIn(['id', 'evaluation'], ids);

/* ------------- Hookup Reducers To Types ------------- */

// should convert uppercase to screaming snake_case
export default createReducer(initialState, {
  [Types.GET_LECTURE_REQUEST]: request,
  [Types.GET_LECTURE_SUCCESS]: success,
  [Types.GET_LECTURE_FAILURE]: failure,
  [Types.GET_EVALUATIONS_SUCCESS]: getEvaluationsSuccess,
});
