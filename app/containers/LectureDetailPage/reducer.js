/*
 *
 * LectureDetailPage reducer
 *
 */


import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  getLectureDetailRequest: ['data'],
  getLectureDetailSuccess: ['payload'],
  getLectureDetailFailure: null,
});


/* ------------- Initial State ------------- */

export const initialState = fromJS({
  data: null,
  isFetching: false,
  payload: null,
  error: false,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) => {
  return state.merge({ data, isFetching: true, payload: null, error: null });
};

// successful api lookup
export const success = (state, { payload }) => {
  console.log(payload);
  return state.merge({ isFetching: false, payload, error: null });
};

// Something went wrong somewhere.
export const failure = (state) =>
  state.merge({ isFetching: false, payload: null, error: true });

/* ------------- Hookup Reducers To Types ------------- */

// should convert uppercase to screaming snake_case
export default createReducer(initialState, {
  [Types.GET_LECTURE_DETAIL_REQUEST]: request,
  [Types.GET_LECTURE_DETAIL_SUCCESS]: success,
  [Types.GET_LECTURE_DETAIL_FAILURE]: failure,
});
