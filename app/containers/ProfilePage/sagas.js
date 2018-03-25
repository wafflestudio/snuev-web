import { take, call, put } from 'redux-saga/effects';
import { request, authRequest } from 'services/api';
import { Creators as GlobalActions } from 'global/reducer';
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

export function* watchGetDepartmentsRequest() {
  while (true) {
    const { data } = yield take(Types.GET_DEPARTMENTS_REQUEST);
    yield call(getDepartments, data);
  }
}

export function* getDepartments() {
  try {
    const response = yield request.get('/v1/departments');
    yield put(Actions.getDepartmentsSuccess());
    yield put(GlobalActions.normalizeData(response.data));
  } catch (error) {
    yield put(Actions.getDepartmentsFailure(error.errors));
  }
}

export default [
  watchUpdateProfileRequest,
  watchGetDepartmentsRequest,
];
