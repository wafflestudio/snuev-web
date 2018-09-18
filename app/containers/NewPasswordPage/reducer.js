import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  newPasswordRequest: ['data'],
  newPasswordSuccess: null,
  newPasswordFailure: ['error'],
});

/* ------------- Initial State ------------- */

export const initialState = fromJS({
  newPassword: {
    isFetching: false,
    success: false,
    error: null,
  },
});

/* ------------- Reducers ------------- */

export const newPasswordRequest = (state) =>
  state.mergeDeep({ newPassword: { isFetching: true, error: null } });

export const newPasswordSuccess = (state) =>
  state.mergeDeep({ newPassword: { isFetching: false, success: true, error: null } });

export const newPasswordFailure = (state, { error }) =>
  state.mergeDeep({ newPassword: { isFetching: false, success: false, error } });

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(initialState, {
  [Types.NEW_PASSWORD_REQUEST]: newPasswordRequest,
  [Types.NEW_PASSWORD_SUCCESS]: newPasswordSuccess,
  [Types.NEW_PASSWORD_FAILURE]: newPasswordFailure,
});
