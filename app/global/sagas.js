import { take, call, put, takeLatest } from 'redux-saga/effects';
import { Types, Creators as Actions } from './reducer';
import api from 'services/api';

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

export default [defaultSaga];
