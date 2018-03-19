import { take, call, put } from 'redux-saga/effects';
import { request } from 'services/api';
import { Types, Creators as Actions } from './reducer';

export function* watchResetPasswordRequest() {
  while (true) {
    const { data } = yield take(Types.RESET_PASSWORD_REQUEST);
    yield call(resetPassword, data);
  }
}

export function* resetPassword({ username }) {
  try {
    const response = yield request.post('/v1/user/reset_password', { username });
    yield put(Actions.resetPasswordSuccess(response.data));
  } catch (error) {
    yield put(Actions.resetPasswordFailure(error.errors));
  }
}

export default [
  watchResetPasswordRequest,
];
