import api from 'services/api';
import normalize from 'json-api-normalizer';
import build from 'redux-object';
import { takeLatest, call, put } from 'redux-saga/effects';
import { Types, Creators as Actions } from './reducer';

export function* getLectureDetail({ data: actionData }) {
  const { lectureId } = actionData;
  const response = yield call(api.getLectureDetail, lectureId);
  if (response.ok) {
    const { data } = response;
    yield put(Actions.getLectureDetailSuccess(normalize(data)));
  } else {
    yield put(Actions.getLectureDetailFailure());
  }
}
export function* watchGetLectureDetail() {
  yield takeLatest(Types.GET_LECTURE_DETAIL_REQUEST, getLectureDetail);
}

// All sagas to be loaded
export default [
  watchGetLectureDetail,
];
