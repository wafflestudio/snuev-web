import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  sampleRequest: ['keyword'],
  signInRequest: ['data'],
  signInSuccess: ['payload'],
  signInFailure: ['error'],
  userInformationRequest: null,
  userInformationSuccess: ['payload'],
  userInformationFailure: ['error'],
  signOut: null,
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
  [Types.SAMPLE_REQUEST]: search,
  [Types.SIGN_IN_REQUEST]: request,
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_IN_FAILURE]: failure,
  [Types.USER_INFORMATION_REQUEST]: request,
  [Types.USER_INFORMATION_SUCCESS]: success,
  [Types.USER_INFORMATION_FAILURE]: failure,
});
