import { take, call, put, select } from 'redux-saga/effects';
import { Types, Creators as Actions } from './reducer';
import api from 'services/api';

export function* login(data) {
  console.log(data);
  const response = yield call(api.login, data);
  console.log(response);
  if (response.ok) {
    console.log(response.data);
    localStorage.setItem('auth_token', response.data.meta.auth_token);
    yield put(Actions.loginSuccess(response.data));
    alert("로그인 되었습니다.")
  } else {
    yield put(Actions.loginFailure());
  }
}

export function* watchLoginRequest() {
  while (true) {
    const { data } = yield take(Types.LOGIN_REQUEST);
    yield call(login, data);
  }
}

// All sagas to be loaded
export default [
  watchLoginRequest,
];
