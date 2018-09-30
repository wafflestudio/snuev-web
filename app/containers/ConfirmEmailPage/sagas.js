import { browserHistory } from 'react-router';
import { take, call, put } from 'redux-saga/effects';
import { request, authRequest } from 'services/api';
import messages from './messages';
import { Types, Creators as Actions } from './reducer';
import { Creators as GlobalActions } from 'global/reducer';

export function* watchConfirmEmailRequest() {
  while (true) {
    const { data } = yield take(Types.CONFIRM_EMAIL_REQUEST);
    yield call(confirmEmail, data);
  }
}

export function* confirmEmail(token) {
  try {
    yield request.put(`/v1/user/confirm_email?confirmation_token=${token}`);
    yield put(Actions.confirmEmailSuccess());
    yield put(GlobalActions.showToast(messages.confirmEmailSuccess));
    browserHistory.push('/');
  } catch (error) {
    yield put(Actions.confirmEmailFailure(error.errors));
  }
}

export function* watchResendEmailRequest() {
  while (true) {
    yield take(Types.RESEND_EMAIL_REQUEST);
    yield call(resendEmail);
  }
}

export function* resendEmail() {
  try {
    yield authRequest.post('/v1/user/confirm_email');
    yield put(Actions.resendEmailSuccess());
  } catch (error) {
    yield put(Actions.resendEmailFailure(error.errors));
  }
}

export default[
  watchConfirmEmailRequest,
  watchResendEmailRequest,
];
