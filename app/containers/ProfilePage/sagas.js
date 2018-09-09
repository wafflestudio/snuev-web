import { take, call, put } from 'redux-saga/effects';
import { authRequest } from 'services/api';
import { Types, Creators as Actions } from './reducer';
import { Creators as GlobalActions } from '../../global/reducer';

export function* watchUpdateProfileRequest() {
  while (true) {
    const { data } = yield take(Types.UPDATE_PROFILE_REQUEST);
    yield call(updateProfile, data);
  }
}

export function* updateProfile({ password, password_confirmation, nickname, department_id }) {
  try {
    const response = yield authRequest.put('/v1/user', { password, password_confirmation, nickname, department_id });
    yield put(Actions.updateProfileSuccess(response.data));
  } catch (error) {
    yield put(Actions.updateProfileFailure(error.errors));
  }
}

export function* watchResendConfirmationEmailRequest() {
  while (true) {
    yield take(Types.RESEND_CONFIRMATION_EMAIL_REQUEST);
    yield call(resendConfirmationEmail);
  }
}

export function* resendConfirmationEmail() {
  try {
    yield authRequest.post('/v1/user/confirm_email');
    yield put(Actions.resendConfirmationEmailSuccess());
  } catch (error) {
    yield put(Actions.resendConfirmationEmailFailure(error.errors));
  }
}

export function* watchEditPasswordRequest() {
  while (true) {
    const { data } = yield take(Types.EDIT_PASSWORD_REQUEST);
    yield call(editPassword, data);
  }
}

export function* editPassword(password) {
  try {
    yield authRequest.put('/v1/user', { password });
    yield put(Actions.editPasswordSuccess());
  } catch (error) {
    yield put(Actions.editPasswordFailure(error.errors));
  }
}

export function* watchMyEvaluationsRequest() {
  while (true) {
    yield take(Types.MY_EVALUATIONS_REQUEST);
    yield call(myEvaluations);
  }
}

export function* myEvaluations() {
  try {
    const response = yield authRequest.get('/v1/evaluations/mine');
    if (response) {
      yield put(GlobalActions.normalizeData(response.data));
      yield put(Actions.myEvaluationsSuccess(response.data.data.map((evaluation) => evaluation.id)));
    }
  } catch (error) {
    yield put(Actions.myEvaluationsFailure(error.errors));
  }
}

export default [
  watchUpdateProfileRequest,
  watchResendConfirmationEmailRequest,
  watchEditPasswordRequest,
  watchMyEvaluationsRequest,
];
