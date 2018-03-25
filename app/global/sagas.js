import { take, call, put, takeLatest } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { Types, Creators as Actions } from './reducer';
import { request, authRequest } from '../services/api';
import { setAuthToken, clearAuthToken } from '../services/localStorage';
import { addQuery } from '../utils/query';

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
    if (document.referrer && document.referrer.indexOf('localhost') !== -1) {
      history.back();
    } else {
      browserHistory.push('/');
    }
  } catch (error) {
    yield put(Actions.signInFailure(error.errors));
  }
}

export function* userInformation() {
  try {
    const response = yield authRequest.get('/v1/user');
    yield put(Actions.normalizeData(response.data));
    yield put(Actions.userSuccess(response.data.data.id));
  } catch (error) {
    yield put(Actions.signOut());
    yield put(Actions.userFailure(error.errors));
  }
}

export function* watchSearchCoursesRequest() {
  yield takeLatest(Types.SEARCH_COURSES_REQUEST, searchCourses);
}

export function* searchCourses({ query }) {
  try {
    const response = yield request.get(`/v1/courses/search?q=${query}`);
    yield put(Actions.normalizeData(response.data));
    yield put(Actions.searchCoursesSuccess(response.data.data.map((course) => course.id)));
  } catch (error) {
    yield put(Actions.searchCoursesFailure(error.errors));
  }
}

export function* watchSearchLecturesRequest() {
  yield takeLatest(Types.SEARCH_LECTURES_REQUEST, searchLectures);
}

export function* searchLectures({ query }) {
  yield addQuery({ q: query });
  yield put(Actions.showSideBar());
  try {
    const response = yield request.get(`/v1/lectures/search?q=${query}`);
    yield put(Actions.normalizeData(response.data));
    yield put(Actions.searchLecturesSuccess(response.data.data.map((lecture) => lecture.id)));
  } catch (error) {
    yield put(Actions.searchLecturesFailure(error.errors));
  }
}

export default [
  watchSignInRequest,
  watchSignOut,
  watchUserInformationRequest,
  watchSearchCoursesRequest,
  watchSearchLecturesRequest,
];
