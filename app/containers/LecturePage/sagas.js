import { take, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
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
    const response = yield authRequest.get(`/v1/lectures/${id}/evaluations`, { page });
    yield put(GlobalActions.normalizeData(response.data));
    yield put(Actions.getEvaluationsSuccess(response.data.data.map((evaluation) => evaluation.id)));
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
  yield takeLatest(Types.CREATE_EVALUATION_REQUEST, createEvaluation);
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

export function* watchVoteEvaluationRequest() {
  yield takeLatest(Types.VOTE_EVALUATION_REQUEST, voteEvaluationRequest);
}

export function* voteEvaluationRequest({ lectureId, evaluationId, direction }) {
  try {
    const response = yield authRequest.post(`/v1/lectures/${lectureId}/evaluations/${evaluationId}/vote`, { vote: { direction } });
    yield put(GlobalActions.normalizeData(response.data));
    yield put(Actions.voteEvaluationSuccess());
    yield put(Actions.getLectureRequest(lectureId));
  } catch (error) {
    yield put(Actions.voteEvaluationFailure(error.errors));
  }
}

// All sagas to be loaded
export default [
  watchGetLectureRequest,
  watchGetEvaluationsRequest,
  watchGetMyEvaluationRequest,
  watchCreateEvaluationRequest,
  watchUpdateEvaluationRequest,
  watchVoteEvaluationRequest,
];
