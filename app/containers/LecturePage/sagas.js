import { take, call, put, takeEvery, takeLatest, race } from 'redux-saga/effects';
import { Creators as GlobalActions } from 'global/reducer';
import { Types, Creators as Actions } from './reducer';
import { request, authRequest } from '../../services/api';

export function* watchGetLectureRequest() {
  while (true) {
    const { id } = yield take(Types.GET_LECTURE_REQUEST);
    yield call(getLecture, id);
  }
}

export function* getLecture(id) {
  try {
    const response = yield request.get(`/v1/lectures/${id}`);
    yield put(GlobalActions.normalizeData(response.data));
    yield put(Actions.getLectureSuccess());
  } catch (error) {
    yield put(Actions.getLectureFailure(error.errors));
  }
}

export function* watchGetEvaluationsRequest() {
  yield takeEvery(Types.GET_EVALUATIONS_REQUEST, getEvaluations);
}

export function* getEvaluations({ id, page }) {
  try {
    const { response } = yield race({
      response: authRequest.get(`/v1/lectures/${id}/evaluations`, { page }),
      cancel: take(Types.GET_LECTURE_REQUEST),
    });
    if (response) {
      yield put(GlobalActions.normalizeData(response.data));
      yield put(Actions.getEvaluationsSuccess(response.data.data.map((evaluation) => evaluation.id)));
    }
  } catch (error) {
    yield put(Actions.getEvaluationsFailure(error.errors));
  }
}

export function* watchGetMyEvaluationRequest() {
  while (true) {
    const { id } = yield take(Types.GET_MY_EVALUATION_REQUEST);
    yield call(getMyEvaluation, id);
  }
}

export function* getMyEvaluation(id) {
  try {
    const response = yield authRequest.get(`/v1/lectures/${id}/evaluations/mine`);
    if (response.data.data[0]) {
      yield put(GlobalActions.normalizeData(response.data));
      yield put(Actions.getMyEvaluationSuccess(response.data.data[0].id));
    } else {
      yield put(Actions.getMyEvaluationSuccess(null));
    }
  } catch (error) {
    yield put(Actions.getMyEvaluationFailure(error.errors));
  }
}

export function* watchCreateEvaluationRequest() {
  while (true) {
    const params = yield take(Types.CREATE_EVALUATION_REQUEST, createEvaluation);
    yield call(createEvaluation, params);
  }
}

export function* createEvaluation({ id, data }) {
  try {
    const response = yield authRequest.post(`/v1/lectures/${id}/evaluations`, { evaluation: data });
    yield put(GlobalActions.normalizeData(response.data));
    yield put(Actions.createEvaluationSuccess(response.data.data.id));
    yield put(Actions.closeEvaluationForm());
    yield put(Actions.getLectureRequest(id));
  } catch (error) {
    yield put(Actions.createEvaluationFailure(error.errors));
  }
}

export function* watchUpdateEvaluationRequest() {
  yield takeLatest(Types.UPDATE_EVALUATION_REQUEST, updateEvaluation);
}

export function* updateEvaluation({ lectureId, evaluationId, data }) {
  try {
    const response = yield authRequest.put(`/v1/lectures/${lectureId}/evaluations/${evaluationId}`, { evaluation: data });
    yield put(GlobalActions.normalizeData(response.data));
    yield put(Actions.updateEvaluationSuccess());
    yield put(Actions.closeEvaluationForm());
    yield put(Actions.getLectureRequest(lectureId));
  } catch (error) {
    yield put(Actions.updateEvaluationFailure(error.errors));
  }
}

// All sagas to be loaded
export default [
  watchGetLectureRequest,
  watchGetEvaluationsRequest,
  watchGetMyEvaluationRequest,
  watchCreateEvaluationRequest,
  watchUpdateEvaluationRequest,
];
