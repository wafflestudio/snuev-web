import { take, call, put } from 'redux-saga/effects';
import { Creators as GlobalActions } from 'global/reducer';
import { Types, Creators as Actions } from './reducer';
import { request } from '../../services/api';

export function* watchGetLectureDetailRequest() {
  while (true) {
    const { data } = yield take(Types.GET_LECTURE_DETAIL_REQUEST);
    yield call(getLectureDetail, data);
  }
}

export function* getLectureDetail(id) {
  try {
    const response = yield request.get(`/v1/lectures/${id}`);
    yield put(Actions.getLectureDetailSuccess());
    yield put(GlobalActions.normalizeData(response.data));
  } catch (error) {
    yield put(Actions.getLectureDetailFailure(error.errors));
  }
}

// All sagas to be loaded
export default [
  watchGetLectureDetailRequest,
];
