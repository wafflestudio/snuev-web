import { take, call, put, takeLatest } from 'redux-saga/effects';
import { Types, Creators as Actions } from './reducer';
import { request, authRequest } from '../services/api';
import { setAuthToken, clearAuthToken } from '../services/localStorage';

export function* watchSignInRequest() {
  while (true) {
    const { data } = yield take(Types.SIGN_IN_REQUEST);
    yield call(signIn, data);
  }
}

export function* watchSignOut() {
  while (true) {
    yield take(Types.SIGN_OUT);
    clearAuthToken();
  }
}

export function* watchUserInformationRequest() {
  while (true) {
    yield take(Types.USER_REQUEST);
    yield call(userInformation);
  }
}

export function* signIn({ username, password }) {
  try {
    const response = yield request.post('/v1/user/sign_in', { username, password });
    yield put(Actions.signInSuccess(response.data));
    setAuthToken(response.data.meta.auth_token);
    yield call(userInformation);
  } catch (error) {
    yield put(Actions.signInFailure(error.errors));
  }
}

export function* userInformation() {
  try {
    const response = yield authRequest.get('/v1/user');
    yield put(Actions.userSuccess(response.data.data.id));
    yield put(Actions.normalizeData(response.data));
  } catch (error) {
    yield put(Actions.signOut());
    yield put(Actions.userFailure(error.errors));
  }
}

export function* watchSearchCoursesRequest() {
  yield takeLatest(Types.SEARCH_COURSES_REQUEST, searchCourses);
}

export function* searchCourses(action) {
  try {
    const response = yield request.get(`/v1/courses/search?q=${action.query}`);
    yield put(Actions.searchCoursesSuccess(response.data.data.map((course) => course.id) || []));
    yield put(Actions.normalizeData(response.data));
  } catch (error) {
    yield put(Actions.searchCoursesFailure(error.errors));
  }
}

export default [
  watchSignInRequest,
  watchSignOut,
  watchUserInformationRequest,
  watchSearchCoursesRequest,
];
