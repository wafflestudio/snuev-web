import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  updateProfileRequest: ['data'],
  updateProfileSuccess: null,
  updateProfileFailure: ['error'],
  resendConfirmationEmailRequest: null,
  resendConfirmationEmailSuccess: null,
  resendConfirmationEmailFailure: ['error'],
  editPasswordRequest: ['data'],
  editPasswordSuccess: null,
  editPasswordFailure: ['error'],
  myEvaluationsRequest: null,
  myEvaluationsSuccess: ['ids'],
  myEvaluationsFailure: ['error'],
});

/* ------------- Initial State ------------- */

export const initialState = fromJS({
  isFetching: false,
  error: null,
  resendConfirmationEmail: {
    isFetching: false,
    error: null,
  },
  editPassword: {
    isFetching: false,
    error: null,
  },
  myEvaluations: {
    ids: [],
    isFetching: false,
    error: null,
  },
});

/* ------------- Reducers ------------- */

export const request = (state) =>
  state.merge({ isFetching: true, error: null });

export const success = (state) =>
  state.merge({ isFetching: false, error: null });

export const failure = (state, { error }) =>
  state.merge({ isFetching: false, error });

export const resendConfirmationEmailRequest = (state) =>
  state.mergeDeep({ resendConfirmationEmail: { isFetching: true, error: null } });

export const resendConfirmationEmailSuccess = (state) =>
  state.mergeDeep({ resendConfirmationEmail: { isFetching: false, error: null } });

export const resendConfirmationEmailFailure = (state, { error }) =>
  state.mergeDeep({ resendConfirmationEmail: { isFetching: false, error } });

export const editPasswordRequest = (state) =>
  state.mergeDeep({ editPassword: { isFetching: true, error: null } });

export const editPasswordSuccess = (state) =>
  state.mergeDeep({ editPassword: { isFetching: false, error: null } });

export const editPasswordFailure = (state, { error }) =>
  state.mergeDeep({ editPassword: { isFetching: false, error } });

export const myEvaluationsRequest = (state) =>
  state.mergeDeep({ myEvaluations: { isFetching: true, error: null } });

export const myEvaluationsSuccess = (state, { ids }) => ids.length ?
  state.mergeDeep({
    myEvaluations: {
      ids: state.getIn(['myEvaluations', 'ids']).concat(ids).toSet().toList(),
      isFetching: false,
      error: null,
    },
  }) :
  state.mergeDeep({
    myEvaluations: {
      isFetching: false,
      error: null,
    },
  });

export const myEvaluationsFailure = (state, { error }) =>
  state.mergeDeep({ myEvaluations: { isFetching: false, error } });

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(initialState, {
  [Types.UPDATE_PROFILE_REQUEST]: request,
  [Types.UPDATE_PROFILE_SUCCESS]: success,
  [Types.UPDATE_PROFILE_FAILURE]: failure,
  [Types.RESEND_CONFIRMATION_EMAIL_REQUEST]: resendConfirmationEmailRequest,
  [Types.RESEND_CONFIRMATION_EMAIL_SUCCESS]: resendConfirmationEmailSuccess,
  [Types.RESEND_CONFIRMATION_EMAIL_FAILURE]: resendConfirmationEmailFailure,
  [Types.EDIT_PASSWORD_REQUEST]: editPasswordRequest,
  [Types.EDIT_PASSWORD_SUCCESS]: editPasswordSuccess,
  [Types.EDIT_PASSWORD_FAILURE]: editPasswordFailure,
  [Types.MY_EVALUATIONS_REQUEST]: myEvaluationsRequest,
  [Types.MY_EVALUATIONS_SUCCESS]: myEvaluationsSuccess,
  [Types.MY_EVALUATIONS_FAILURE]: myEvaluationsFailure,
});
