import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  confirmEmailRequest: ['data'],
  confirmEmailSuccess: null,
  confirmEmailFailure: ['error'],
  resendEmailRequest: null,
  resendEmailSuccess: null,
  resendEmailFailure: ['error'],
});


/* ------------- Initial State ------------- */

export const initialState = fromJS({
  confirmEmail: {
    data: null,
    isFetching: false,
    success: null,
    error: null,
  },
  resendEmail: {
    isFetching: false,
    success: false,
    error: null,
  },
});

/* ------------- Reducers ------------- */

export const confirmEmailRequest = (state, { data }) =>
  state.mergeDeep({ confirmEmail: { data, isFetching: true, success: false, error: null } });

export const confirmEmailSuccess = (state) =>
  state.mergeDeep({ confirmEmail: { isFetching: false, success: true, error: null } });

export const confirmEmailFailure = (state, { error }) =>
  state.mergeDeep({ confirmEmail: { isFetching: false, success: false, error } });

export const resendEmailRequest = (state) =>
  state.mergeDeep({ resendEmail: { isFetching: true, success: false, error: null } });

export const resendEmailSuccess = (state) =>
  state.mergeDeep({ resendEmail: { isFetching: false, success: true, error: null } });

export const resendEmailFailure = (state, { error }) =>
  state.mergeDeep({ resendEmail: { isFetching: false, success: true, error } });

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(initialState, {
  [Types.CONFIRM_EMAIL_REQUEST]: confirmEmailRequest,
  [Types.CONFIRM_EMAIL_SUCCESS]: confirmEmailSuccess,
  [Types.CONFIRM_EMAIL_FAILURE]: confirmEmailFailure,
  [Types.RESEND_EMAIL_REQUEST]: resendEmailRequest,
  [Types.RESEND_EMAIL_SUCCESS]: resendEmailSuccess,
  [Types.RESEND_EMAIL_FAILURE]: resendEmailFailure,
});
