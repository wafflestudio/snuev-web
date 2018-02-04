import { take, call, put, select } from 'redux-saga/effects';
import { Types, Creators as Actions } from './reducer';
import { request } from 'services/api';
import { setAuthToken } from 'services/localStorage';


export function* signup(data) {
  console.log(data);
  const response = yield request.post('/v1/user', data);
  console.log(response);
  if (response.ok) {
    console.log(response.data);
    setAuthToken(response.data.meta.auth_token);
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
