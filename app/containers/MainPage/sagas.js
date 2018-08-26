import { put, takeLatest } from 'redux-saga/effects';
import { Types, Creators as Actions } from './reducer';
import { Creators as GlobalActions } from '../../global/reducer';
import { request } from '../../services/api';

export function* getLatestEvaluations() {
  try {
    const response = yield request.get('/v1/evaluations/latest');
    yield put(GlobalActions.normalizeData(response.data));
    yield put(Actions.getLatestEvaluationsSuccess(response.data.data.map((evaluation) => evaluation.id)));
  } catch (error) {
    yield put(Actions.getLatestEvaluationsFailure(error.errors));
  }
}

export function* watchGetLatestEvaluationsRequest() {
  yield takeLatest(Types.GET_LATEST_EVALUATIONS_REQUEST, getLatestEvaluations);
}

export function* getMostEvaluatedLectures() {
  try {
    const response = yield request.get('/v1/lectures/most_evaluated');
    yield put(GlobalActions.normalizeData(response.data));
    yield put(Actions.getMostEvaluatedLecturesSuccess(response.data.data.map((lecture) => lecture.id)));
  } catch (error) {
    yield put(Actions.getMostEvaluatedLecturesFailure(error.errors));
  }
}

export function* watchGetMostEvaluatedLecturesRequest() {
  yield takeLatest(Types.GET_MOST_EVALUATED_LECTURES_REQUEST, getMostEvaluatedLectures);
}

export function* getTopRatedLectures() {
  try {
    const response = yield request.get('/v1/lectures/top_rated');
    yield put(GlobalActions.normalizeData(response.data));
    yield put(Actions.getTopRatedLecturesSuccess(response.data.data.map((lecture) => lecture.id)));
  } catch (error) {
    yield put(Actions.getTopRatedLecturesFailure(error.errors));
  }
}

export function* watchGetTopRatedLecturesRequest() {
  yield takeLatest(Types.GET_TOP_RATED_LECTURES_REQUEST, getTopRatedLectures);
}

export function* getMostLikedEvaluations() {
  try {
    const response = yield request.get('/v1/evaluations/most_liked');
    yield put(GlobalActions.normalizeData(response.data));
    yield put(Actions.getMostLikedEvaluationsSuccess(response.data.data.map((evaluation) => evaluation.id)));
  } catch (error) {
    yield put(Actions.getMostLikedEvaluationsFailure(error.errors));
  }
}

export function* watchGetMostLikedEvaluationsRequest() {
  yield takeLatest(Types.GET_MOST_LIKED_EVALUATIONS_REQUEST, getMostLikedEvaluations);
}


export default [
  watchGetLatestEvaluationsRequest,
  watchGetMostEvaluatedLecturesRequest,
  watchGetTopRatedLecturesRequest,
  watchGetMostLikedEvaluationsRequest,
];
