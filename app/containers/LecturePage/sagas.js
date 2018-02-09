import { take, call, put } from 'redux-saga/effects';
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
    yield put(Actions.getLectureSuccess(response.data));
  } catch (error) {
    yield put(Actions.getLectureFailure(error.errors));
  }
}

// All sagas to be loaded
export default [
  watchGetLectureRequest,
];
