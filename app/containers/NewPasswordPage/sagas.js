import { take, call, put } from 'redux-saga/effects';
import { request } from '../../services/api';
import { Types, Creators as Actions } from './reducer';

export function* watchNewPasswordRequest() {
  while (true) {
    const { data } = yield take(Types.NEW_PASSWORD_REQUEST);
    yield call(newPassword, data);
  }
}

export function* newPassword({ reset_token, password }) {
  try {
    yield request.put('/v1/user/reset_password', { reset_token, password });
    yield put(Actions.newPasswordSuccess());
  } catch (error) {
    yield put(Actions.newPasswordFailure(error.errors));
  }
}

export default [
  watchNewPasswordRequest,
];
