import { take, call, put, select } from 'redux-saga/effects';
import { Types, Creators as Actions } from './reducer';
import api from 'services/api';


export function* signup(data) {
  console.log(data);
  const response = yield call(api.signup, data);
  console.log(response);
  if (response.ok) {
    console.log(response.data);
    localStorage.setItem('auth_token', response.data.meta.auth_token);
    yield put(Actions.signupSuccess(response.data));
    alert("회원가입이 완료되었습니다. 이메일을 확인하여 인증하여 주십시오.");
  } else {
    yield put(Actions.signupFailure());
  }
}

export function* watchSignupRequest() {
  while (true) {
    const { data } = yield take(Types.SIGNUP_REQUEST);
    yield call(signup, data);
  }
}

// All sagas to be loaded
export default [
  watchSignupRequest,
];
