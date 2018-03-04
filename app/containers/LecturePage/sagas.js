import { take, call, put, takeEvery } from 'redux-saga/effects';
import { Creators as GlobalActions } from 'global/reducer';
import { Types, Creators as Actions } from './reducer';
import { request } from '../../services/api';

export function* watchGetLectureRequest() {
  while (true) {
    const { id } = yield take(Types.GET_LECTURE_REQUEST);
    yield call(getLecture, id);
  }
}

export function* getLecture(id) {
  try {
    const response = yield request.get(`/v1/lectures/${id}`);
    yield put(Actions.getLectureSuccess());
    yield put(GlobalActions.normalizeData(response.data));
  } catch (error) {
    yield put(Actions.getLectureFailure(error.errors));
  }
}

export function* watchGetEvaluationsRequest() {
  yield takeEvery(Types.GET_EVALUATIONS_REQUEST, getEvaluations);
}

export function* getEvaluations({ id, page }) {
  try {
    const response = yield request.get(`/v1/lectures/${id}/evaluations`, { page });
    yield put(Actions.getEvaluationsSuccess(response.data.data.map((evaluation) => evaluation.id)));
    yield put(GlobalActions.normalizeData(response.data));
  } catch (error) {
    yield put(Actions.getEvaluationsFailure(error.errors));
  }
}

// All sagas to be loaded
export default [
  watchGetLectureRequest,
  watchGetEvaluationsRequest,
];
