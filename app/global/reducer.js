import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  validateRequest: ['data'],
  validateSuccess: ['payload'],
  validateFailure: ['error'],
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
export const request = (state, { data }) =>
  state.merge({ data, isFetching: true, payload: null, error: null });

// successful api lookup
export const success = (state, { payload }) =>
  state.merge({ isFetching: false, payload, error: null });

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ isFetching: false, payload: null, error: true });
  // body...

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(initialState, {
  [Types.VALIDATE_REQUEST]: request,
  [Types.VALIDATE_SUCCESS]: success,
  [Types.VALIDATE_FAILURE]: failure,
});
