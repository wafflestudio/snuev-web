/*
 *
 * ConfirmEmailPage reducer
 *
 */


import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  confirmEmailRequest: ['data'],
  confirmEmailSuccess: ['payload'],
  confirmEmailFailure: ['error'],
});


/* ------------- Initial State ------------- */

export const initialState = fromJS({
  data: null,
  isFetching: true,
  payload: null,
  error: null,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ data, isFetching: true, payload: null, error: null });

// successful api lookup
export const success = (state, { payload }) =>
  state.merge({ isFetching: false, payload, error: null });

// Something went wrong somewhere.
export const failure = (state) =>
  state.merge({ isFetching: false, payload: null, error: true });

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(initialState, {
  [Types.CONFIRM_EMAIL_REQUEST]: request,
  [Types.CONFIRM_EMAIL_SUCCESS]: success,
  [Types.CONFIRM_EMAIL_FAILURE]: failure,
});
