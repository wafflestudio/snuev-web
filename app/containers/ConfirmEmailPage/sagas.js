import { take, call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'services/api';
import { Types, Creators as Actions } from './reducer';

export function* watchConfirmEmailRequest() {
  while (true) {
    const { data } = yield take(Types.CONFIRM_EMAIL_REQUEST);
    yield call(confirmEmail, data);
  }
}

export function* confirmEmail(token) {
  try {
    const response = yield request.put(`/v1/user/confirm_email?confirmation_token=${token}`);
    yield put(Actions.confirmEmailSuccess());
  } catch (error) {
    yield put(Actions.confirmEmailFailure());
  }
}

export default[
  watchConfirmEmailRequest,
];
