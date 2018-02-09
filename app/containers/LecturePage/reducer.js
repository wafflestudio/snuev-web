/*
 *
 * EvaluatePage reducer
 *
 */

import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

import normalize from '../../services/normalize';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  getLectureRequest: ['id'],
  getLectureSuccess: ['payload'],
  getLectureFailure: ['error'],
});


/* ------------- Initial State ------------- */

export const initialState = fromJS({
  isFetching: false,
  payload: null,
  error: null,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
  state.merge({ isFetching: true, payload: null, error: null });

// successful api lookup
export const success = (state, { payload }) =>
  state.merge({ isFetching: false, payload: normalize(payload), error: null });

// Something went wrong somewhere.
export const failure = (state, { error }) =>
  state.merge({ isFetching: false, payload: null, error });

/* ------------- Hookup Reducers To Types ------------- */

// should convert uppercase to screaming snake_case
export default createReducer(initialState, {
  [Types.GET_LECTURE_REQUEST]: request,
  [Types.GET_LECTURE_SUCCESS]: success,
  [Types.GET_LECTURE_FAILURE]: failure,
});
