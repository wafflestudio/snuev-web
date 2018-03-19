import { take, call, put } from 'redux-saga/effects';
import { request } from 'services/api';
import { setAuthToken } from 'services/localStorage';
import { Creators as GlobalActions } from 'global/reducer';
import { browserHistory } from 'react-router';
import { Types, Creators as Actions } from './reducer';
import { userInformation } from '../../global/sagas';

export function* watchSignUpRequest() {
  while (true) {
    const { data } = yield take(Types.SIGN_UP_REQUEST);
    yield call(signUp, data);
  }
}

export function* signUp({ username, password, nickname, department_id }) {
  try {
    const response = yield request.post('/v1/user', { username, password, nickname, department_id });
    yield put(Actions.signUpSuccess());
    setAuthToken(response.data.meta.auth_token);
    yield call(userInformation);
    browserHistory.push('sign_up/complete');
  } catch (error) {
    yield put(Actions.signUpFailure(error.errors));
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
  watchSignUpRequest,
  watchGetDepartmentsRequest,
];
