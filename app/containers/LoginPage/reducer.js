/*
 *
 * LoginPage reducer
 *
 */

import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  loginRequest: ['data'],
  loginSuccess: ['payload'],
  loginFailure: null,
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
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
});
