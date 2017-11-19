import {take, call, put, select, takeLatest} from 'redux-saga/effects';
import {Types as ConfirmEmailTypes, Creators as ConfirmEmailActions} from './reducer';
import api from 'services/api';

// Individual exports for testing
export function * defaultSaga() {
  yield takeLatest(ConfirmEmailTypes.GET_USER_REQUEST, getUser);
  yield takeLatest(ConfirmEmailTypes.CONFIRM_EMAIL_REQUEST, confirmEmail);
}

export function * confirmEmail(Token) {
  console.log(Token);
  const response = yield call(api.emailConfirmation, Token);
  console.log(response);
  if (response.ok) {
    console.log(response.data);
    yield put(Actions.confirmEmailSuccess(response.data));
  } else {
    yield put(Actions.confirmEmailFailure());
  }
}

export function * getUser() {
  const response = yield call(api.getUser);
  console.log(response);
  if (response.ok) {
    console.log(response.data);
    if (response.data.attributes.is_confirmed === false) {
      alert("이메일을 인증하여 주십시오.")
    }
    yield put(ConfirmEmailActions.getUserSuccess(response.data));
  } else {
    yield put(ConfirmEmailActions.getUserFailure());
  }
}

// All sagas to be loaded
export default[defaultSaga];
