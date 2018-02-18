import { take, call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'services/api';
import { setAuthToken } from 'services/localStorage';
import { Types, Creators as Actions } from './reducer';

export function* watchSignUpRequest() {
  while (true) {
    const { data } = yield take(Types.SIGN_UP_REQUEST);
    yield call(signUp, data);
  }
}

export function* signUp({ username, password, nickname }) {
  const response = yield request.post('/v1/user', { username, password, nickname });
  if (response.ok) {
    yield put(Actions.signUpSuccess(response.data));
    setAuthToken(response.data.meta.auth_token);
    alert('회원가입이 완료되었습니다. 이메일을 확인하여 인증하여 주십시오.');
  } else {
    yield put(Actions.signUpFailure(response.data));
  }
}

export default [
  watchSignUpRequest,
];
