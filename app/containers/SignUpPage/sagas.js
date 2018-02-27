import { take, call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'services/api';
import { setAuthToken } from 'services/localStorage';
import { Types, Creators as Actions } from './reducer';
import { userInformation } from '../../global/sagas';
import { browserHistory } from 'react-router';

export function* watchSignUpRequest() {
  while (true) {
    const { data } = yield take(Types.SIGN_UP_REQUEST);
    yield call(signUp, data);
  }
}

export function* signUp({ username, password, nickname }) {
  try {
    const response = yield request.post('/v1/user', { username, password, nickname });
    yield put(Actions.signUpSuccess(response.data));
    setAuthToken(response.data.meta.auth_token);
    yield call(userInformation);
    browserHistory.push('sign_up/complete');
  } catch (error) {
    yield put(Actions.signUpFailure(error.errors));
  }
}

export default [
  watchSignUpRequest,
];
