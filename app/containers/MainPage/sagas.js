import { call, put, takeLatest } from 'redux-saga/effects';
import { Types, Creators as Actions } from './reducer';
import api from '../../services/api';

export function* getEvaluations() {
  const response = yield call(api.getEvaluations(1));
  if (response.ok) {
    yield put(Actions.evaluationSuccess(response.data));
  } else {
    yield put(Actions.evaluationFailure());
  }
}

export function* watchGetEvaluations() {
  yield takeLatest(Types.EVALUATION_REQUEST, getEvaluations);
}

export default [
  watchGetEvaluations,
];
