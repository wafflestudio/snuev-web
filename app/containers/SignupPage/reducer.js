/*
 *
 * SignupPage reducer
 *
 */


import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  signupRequest: ['data'],
  signupSuccess: ['payload'],
  signupFailure: null,
});


/* ------------- Initial State ------------- */

export const initialState = fromJS({
  isFetching: false,
  error: false,
  payload: null,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = state =>
  state.merge({ isFetching: true, error: null });

// successful api lookup
export const success = (state, { payload }) =>
  state.merge({ isFetching: false, payload, error: null });

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ isFetching: false, payload: null, error: true });

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(initialState, {
  [Types.SIGNUP_REQUEST]: request,
  [Types.SIGNUP_SUCCESS]: success,
  [Types.SIGNUP_FAILURE]: failure,
});
