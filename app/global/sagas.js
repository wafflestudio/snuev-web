import { take, call, put, takeLatest } from 'redux-saga/effects';
import { Types, Creators as Actions } from './reducer';
import { request, authRequest } from '../services/api';
import { setAuthToken, clearAuthToken } from "../services/localStorage";

export function* defaultSaga() {
  yield takeLatest(Types.VALIDATE_REQUEST, validateRequest);
}

export function* validate() {
  const response = yield call(api.validate);
  console.log(response);
  if (response.ok) {
    console.log(response.data);
    if (response.data.data.attributes.is_confirmed === false) {
      alert('이메일이 인증되지 않았습니다.');
    } else alert('확인되었습니다.');
    yield put (Actions.validateSuccess(response.data));
  } else {
    yield put (Actions.validateFailure());
  }
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
    yield take(Types.USER_INFORMATION_REQUEST);
    yield call(userInformation);
  }
}

export function* signIn({ username, password }) {
  const response = yield request.post('/v1/user/sign_in', { username, password });
  if (response.ok) {
    yield put(Actions.signInSuccess(response.data));
    setAuthToken(response.data.meta.auth_token);
    yield call(userInformation);
  } else {
    yield put(Actions.signInFailure(response.data));
  }
}

export function* userInformation() {
  const response = yield authRequest.get('/v1/user');
  if (response.ok) {
    yield put(Actions.userInformationSuccess(response.data));
  } else {
    yield put(Actions.userInformationFailure(response.data));
  }
}

export default [
  watchSignInRequest,
  watchSignOut,
  watchUserInformationRequest,
];
