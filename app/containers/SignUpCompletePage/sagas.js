import { take, call, put } from 'redux-saga/effects';
import { request } from 'services/api';
import { Types, Creators as Actions } from './reducer';

export function* watchSignUpCompleteRequest() {
  while (true) {
    const { data } = yield take(Types.SIGN_UP_COMPLETE_REQUEST);
    yield call(signUpComplete, data);
  }
}

export function* signUpComplete() {
  
}

export default [
  watchSignUpCompleteRequest,
];
