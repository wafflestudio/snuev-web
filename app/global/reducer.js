import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';
import normalize from 'json-api-normalizer';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  normalizeData: ['data'],
  sampleRequest: ['keyword'],
  signInRequest: ['data'],
  signInSuccess: ['payload'],
  signInFailure: ['error'],
  userRequest: null,
  userSuccess: ['id'],
  userFailure: ['error'],
  signOut: null,
});

/* ------------- Initial State ------------- */

export const initialState = fromJS({
  entities: null,
  keyword: null,
  signIn: {
    payload: null,
    isFetching: false,
    error: null,
  },
  user: {
    id: null,
    isFetching: false,
    error: null,
  },
});

/* ------------- Reducers ------------- */

// request the data from an api
export const normalizeData = (state, { data }) =>
  state.mergeDeep({ entities: normalize(data) });

export const search = (state, { keyword }) =>
  state.merge({ keyword });

export const signInRequest = (state) =>
  state.mergeDeep({ signIn: { isFetching: true, error: null } });

export const signInSuccess = (state, { payload }) =>
  state.mergeDeep({ signIn: { isFetching: false, error: null, payload } });

export const signInFailure = (state, { error }) =>
  state.mergeDeep({ signIn: { isFetching: false, error } });

export const userRequest = (state) =>
  state.mergeDeep({ user: { isFetching: true, error: null, id: null } });

export const userSuccess = (state, { id }) =>
  state.mergeDeep({ user: { isFetching: false, error: null, id } });

export const userFailure = (state, { error }) =>
  state.mergeDeep({ user: { isFetching: false, error, id: null } });

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(initialState, {
  [Types.NORMALIZE_DATA]: normalizeData,
  [Types.SAMPLE_REQUEST]: search,
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_IN_FAILURE]: signInFailure,
  [Types.USER_REQUEST]: userRequest,
  [Types.USER_SUCCESS]: userSuccess,
  [Types.USER_FAILURE]: userFailure,
});
