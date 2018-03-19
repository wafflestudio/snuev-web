import { take, call, put } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { Types, Creators as Actions } from './reducer';
import { request, authRequest } from '../services/api';
import { setAuthToken, clearAuthToken } from '../services/localStorage';

export function* getSamples() {
}

export function* watchSample() {
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
    if (document.referrer && document.referrer.indexOf('localhost') !== -1) {
      history.back();
    } else {
      browserHistory.push('/');
    }
  } catch (error) {
    yield put(Actions.signInFailure(error.errors));
  }
}

export function* userInformation() {
  try {
    const response = yield authRequest.get('/v1/user');
    yield put(Actions.userSuccess(response.data.data.id));
    yield put(Actions.normalizeData(response.data));
  } catch (error) {
    yield put(Actions.signOut());
    yield put(Actions.userFailure(error.errors));
  }
}

export default [
  watchSample,
  watchSignInRequest,
  watchSignOut,
  watchUserInformationRequest,
];
