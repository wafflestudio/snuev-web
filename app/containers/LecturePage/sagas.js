import { Creators as GlobalActions } from 'global/reducer';
import { takeLatest, put } from 'redux-saga/effects';

import { Types, Creators as Actions } from './reducer';
import { request } from '../../services/api';


export function* getLectureDetail({ data: actionData }) {
  const lectureId = actionData;
  try {
    const response = yield request.get(`/v1/lectures/${lectureId}`);
    const { data } = response;
    yield put(GlobalActions.normalizeData(data));
    yield put(Actions.getLectureDetailSuccess());
  } catch (error) {
    yield put(Actions.getLectureDetailFailure(error.errors));
  }
}
export function* watchGetLectureDetail() {
  yield takeLatest(Types.GET_LECTURE_DETAIL_REQUEST, getLectureDetail);
}

// All sagas to be loaded
export default [
  watchGetLectureDetail,
];
