import { take, call, put, takeLatest } from 'redux-saga/effects';
import api from 'services/api';

import { Types, Creators as Actions } from './reducer';

export function* getCourses({ data }) {
  const response = yield call(api.getLectures, data);
  if (response.ok) {
    yield put(Actions.navBarContainerSuccess(response.data.data));
  } else {
    yield put(Actions.navBarContainerFailure());
  }
}

export function* watchGetCourses() {
  yield takeLatest(Types.NAV_BAR_CONTAINER_REQUEST, getCourses);
}

export default [
  watchGetCourses,
];
