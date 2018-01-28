import api from 'services/api';
import build from 'redux-object';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { Types, Creators as Actions } from './reducer';
import { Creators as GlobalActions } from 'global/reducer';
import { makeSelectNormalizedData } from '../../global/selectors';

export function* getLectureDetail({ data: actionData }) {
  const lectureId = actionData;
  const response = yield call(api.getLectureDetail, lectureId);
  if (response.ok) {
    const { data } = response;
    yield put(GlobalActions.normalizeData(data));
    yield put(Actions.getLectureDetailSuccess());
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
