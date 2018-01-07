import api from 'services/api';
import { takeLatest, call, put } from 'redux-saga/effects';
import { Types, Creators as Actions } from './reducer';

export function* getLectureDetail({ data }) {
  const { lectureId } = data;
  const response = yield call(api.getLectureDetail, lectureId);
  if (response.ok) {
    const { data } = response;
    console.log(data);
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
