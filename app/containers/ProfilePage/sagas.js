import { take, call, put } from 'redux-saga/effects';
import { authRequest } from 'services/api';
import { Types, Creators as Actions } from './reducer';

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

export default [
  watchUpdateProfileRequest,
];
