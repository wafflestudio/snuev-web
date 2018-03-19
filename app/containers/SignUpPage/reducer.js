import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  signUpRequest: ['data'],
  signUpSuccess: null,
  signUpFailure: ['error'],
  getDepartmentsRequest: null,
  getDepartmentsSuccess: null,
  getDepartmentsFailure: ['error'],
});

/* ------------- Initial State ------------- */

export const initialState = fromJS({
  isFetching: false,
  error: null,
});

/* ------------- Reducers ------------- */

export const request = (state) =>
  state.merge({ isFetching: true, error: null });

export const success = (state) =>
  state.merge({ isFetching: false, error: null });

export const failure = (state, { error }) =>
  state.merge({ isFetching: false, error });

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(initialState, {
  [Types.SIGN_UP_REQUEST]: request,
  [Types.SIGN_UP_SUCCESS]: success,
  [Types.SIGN_UP_FAILURE]: failure,
  [Types.GET_DEPARTMENTS_REQUEST]: request,
  [Types.GET_DEPARTMENTS_SUCCESS]: success,
  [Types.GET_DEPARTMENTS_FAILURE]: failure,
});
