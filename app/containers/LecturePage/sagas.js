import { take, call, put, select } from 'redux-saga/effects';
import { Creators as GlobalActions } from 'global/reducer';
import { Types, Creators as Actions } from './reducer';
import { request } from '../../services/api';
import { makeSelectUser } from '../../global/selectors';

export function* watchGetLectureRequest() {
  while (true) {
    const { id } = yield take(Types.GET_LECTURE_REQUEST);
    yield call(getLecture, id);
  }
}

export function* getLecture(id) {
  try {
    const response = yield request.get(`/v1/lectures/${id}`);
    yield put(Actions.getLectureSuccess());
    yield put(GlobalActions.normalizeData(response.data));
    const user = yield select(makeSelectUser());
    if (user.get('isConfirmed')) {
      yield call(getEvaluations, id);
    }
  } catch (error) {
    yield put(Actions.getLectureFailure(error.errors));
  }
}

export function* getEvaluations(id) {
  const response = yield request.get(`/v1/lectures/${id}/evaluations`);
  yield put(Actions.getEvaluationsSuccess(response.data.data.map((evaluation) => evaluation.id)));
  yield put(GlobalActions.normalizeData(response.data));
}

// All sagas to be loaded
export default [
  watchGetLectureRequest,
];
