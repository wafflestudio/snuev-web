/*
 *
 * LecturePage reducer
 *
 */

import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  getLectureDetailRequest: ['data'],
  getLectureDetailSuccess: null,
  getLectureDetailFailure: ['error'],
});

/* ------------- Initial State ------------- */

export const initialState = fromJS({
  isFetching: false,
  error: null,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ data, isFetching: true, error: null });


// successful api lookup
export const success = (state) =>
  state.merge({ isFetching: false, error: null });

// Something went wrong somewhere.
export const failure = (state, { error }) =>
  state.merge({ isFetching: false, error });

/* ------------- Hookup Reducers To Types ------------- */

// should convert uppercase to screaming snake_case
export default createReducer(initialState, {
  [Types.GET_LECTURE_DETAIL_REQUEST]: request,
  [Types.GET_LECTURE_DETAIL_SUCCESS]: success,
  [Types.GET_LECTURE_DETAIL_FAILURE]: failure,
});
