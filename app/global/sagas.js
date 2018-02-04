import { take, call, put, takeLatest } from 'redux-saga/effects';
import { Types, Creators as Actions } from './reducer';
import { request, authRequest } from '../services/api';
import { setAuthToken, clearAuthToken } from '../services/localStorage';

export function* getSamples() {
}

export function* watchSample() {
  yield takeLatest(Types.SAMPLE_REQUEST, getSamples);
}

export function* watchSignInRequest() {
  while (true) {
    const { data } = yield take(Types.SIGN_IN_REQUEST);
    yield call(signIn, data);
  }
}

export function* watchSignOut() {
  while (true) {
    yield take(Types.SIGN_OUT);
    clearAuthToken();
  }
}

export function* watchUserInformationRequest() {
  while (true) {
    yield take(Types.USER_REQUEST);
    yield call(userInformation);
  }
}

export function* signIn({ username, password }) {
  try {
    const response = yield request.post('/v1/user/sign_in', { username, password });
    yield put(Actions.signInSuccess(response.data));
    setAuthToken(response.data.meta.auth_token);
    yield call(userInformation);
  } catch (error) {
    yield put(Actions.signInFailure(error.errors));
  }
}

export function* userInformation() {
  try {
    const response = yield authRequest.get('/v1/user');
    yield put(Actions.userSuccess(response.data));
  } catch (error) {
    yield put(Actions.userFailure(error.errors));
  }
}

export default [
  watchSample,
  watchSignInRequest,
  watchSignOut,
  watchUserInformationRequest,
];
