import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  signUpRequest: ['data'],
  signUpSuccess: ['payload'],
  signUpFailure: ['error'],
});

/* ------------- Initial State ------------- */

export const initialState = fromJS({
  keyword: null,
  user: null,
  isFetching: false,
  error: null,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const search = (state, { keyword }) =>
  state.merge({ keyword });

export const request = (state) =>
  state.merge({ isFetching: true, error: null });

export const success = (state, { payload }) =>
  state.merge({ isFetching: false, error: null, user: payload });

export const failure = (state, { error }) =>
  state.merge({ isFetching: false, error });

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(initialState, {
  [Types.SIGN_UP_REQUEST]: request,
  [Types.SIGN_UP_SUCCESS]: success,
  [Types.SIGN_UP_FAILURE]: failure,
});
