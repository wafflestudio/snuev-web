import { take, call, put, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { toast } from 'react-toastify';
import { Types, Creators as Actions } from './reducer';
import { request, authRequest } from '../services/api';
import { setAuthToken, clearAuthToken } from '../services/localStorage';
import { addQuery } from '../utils/query';
import { makeSelectPrev } from './selectors';

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
    const prev = yield select(makeSelectPrev());
    if (prev) {
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

export function* watchBookmarkRequest() {
  while (true) {
    const { id } = yield take(Types.BOOKMARK_REQUEST);
    yield call(bookmark, id);
  }
}

export function* bookmark(id) {
  try {
    yield request.post(`/v1/lectures/${id}/bookmark`);
    yield put(Actions.bookmarkSuccess(id));
  } catch (error) {
    yield put(Actions.bookmarkFailure(id, error.errors));
  }
}

export function* watchDeleteBookmarkRequest() {
  while (true) {
    const { id } = yield take(Types.DELETE_BOOKMARK_REQUEST);
    yield call(deleteBookmark, id);
  }
}

export function* deleteBookmark(id) {
  try {
    yield request.delete(`/v1/lectures/${id}/bookmark`);
    yield put(Actions.deleteBookmarkSuccess(id));
  } catch (error) {
    yield put(Actions.deleteBookmarkFailure(id, error.errors));
  }
}

export function* watchGetBookmarkedRequest() {
  while (true) {
    yield take(Types.BOOKMARKED_LECTURES_REQUEST);
    yield call(getBookmarkedLectures);
  }
}

export function* getBookmarkedLectures() {
  try {
    const response = yield authRequest.get('/v1/lectures/bookmarked');
    if (response) {
      yield put(Actions.normalizeData(response.data));
      yield put(Actions.bookmarkedLecturesSuccess(response.data.data.map((lectures) => lectures.id)));
    }
  } catch (error) {
    yield put(Actions.bookmarkedLecturesFailure(error.errors));
  }
}

export function* watchGetDepartmentsRequest() {
  while (true) {
    yield take(Types.GET_DEPARTMENTS_REQUEST);
    yield call(getDepartments);
  }
}

export function* getDepartments() {
  try {
    const response = yield request.get('/v1/departments');
    yield put(Actions.getDepartmentsSuccess());
    yield put(Actions.normalizeData(response.data));
  } catch (error) {
    yield put(Actions.getDepartmentsFailure(error.errors));
  }
}

export function* watchVoteRequest() {
  yield takeLatest(Types.VOTE_REQUEST, vote);
}

export function* vote({ lectureId, evaluationId, isUpvote }) {
  try {
    yield authRequest.post(`/v1/lectures/${lectureId}/evaluations/${evaluationId}/vote?vote[direction]=${isUpvote}`);
    if (isUpvote) {
      yield put(Actions.upvoteSuccess(evaluationId));
    } else {
      yield put(Actions.downvoteSuccess(evaluationId));
    }
  } catch (error) {
    yield put(Actions.voteFailure(error.errors));
  }
}

export function* watchDeleteVoteRequest() {
  yield takeLatest(Types.DELETE_VOTE_REQUEST, deleteVote);
}

export function* deleteVote({ lectureId, evaluationId, isUpvote }) {
  try {
    yield authRequest.delete(`/v1/lectures/${lectureId}/evaluations/${evaluationId}/vote?vote[direction]=${isUpvote}`);
    if (isUpvote) {
      yield put(Actions.deleteUpvoteSuccess(evaluationId));
    } else {
      yield put(Actions.deleteDownvoteSuccess(evaluationId));
    }
  } catch (error) {
    yield put(Actions.deleteVoteFailure(error.errors));
  }
}

export function* watchShowToast() {
  yield takeEvery(Types.SHOW_TOAST, showToast);
}

export function* showToast({ message }) {
  toast(message);
}

export default [
  watchSignInRequest,
  watchSignOut,
  watchUserInformationRequest,
  watchSearchCoursesRequest,
  watchSearchLecturesRequest,
  watchBookmarkRequest,
  watchDeleteBookmarkRequest,
  watchGetBookmarkedRequest,
  watchGetDepartmentsRequest,
  watchVoteRequest,
  watchDeleteVoteRequest,
  watchShowToast,
];
