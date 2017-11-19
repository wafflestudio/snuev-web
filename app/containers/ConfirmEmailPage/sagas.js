import { call, put, takeLatest } from 'redux-saga/effects';
import { Types as ConfirmEmailTypes, Creators as ConfirmEmailActions } from './reducer';
import api from 'services/api';

// Individual exports for testing
export function* defaultSaga() {
  yield takeLatest(ConfirmEmailTypes.GET_USER_REQUEST, getUser);
  yield takeLatest(ConfirmEmailTypes.CONFIRM_EMAIL_REQUEST, confirmEmail);
}

export function* confirmEmail(token) {
  const response = yield call(api.emailConfirmation, token.data);
  console.log(response);
  if (response.ok) {
    console.log(response.data);
    alert('이메일이 인증되었습니다.');
    yield put(ConfirmEmailActions.confirmEmailSuccess(response.data));
  } else {
    yield put(ConfirmEmailActions.confirmEmailFailure());
  }
}

export function* getUser() {
  const response = yield call(api.getUser);
  console.log(response);
  if (response.ok) {
    console.log(response.data);
    if (response.data.data.attributes.is_confirmed === false) {
      alert('이메일을 인증하여 주십시오.');
    } else alert('이메일이 인증되어 있습니다.');
    yield put(ConfirmEmailActions.getUserSuccess(response.data));
  } else {
    yield put(ConfirmEmailActions.getUserFailure());
  }
}

// All sagas to be loaded
export default[defaultSaga];
