import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';
import normalize from 'json-api-normalizer';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  normalizeData: ['data'],
  sampleRequest: ['keyword'],
  signInRequest: ['data'],
  signInSuccess: ['payload'],
  signInFailure: ['error'],
  userRequest: null,
  userSuccess: ['id'],
  userFailure: ['error'],
  signOut: null,
  searchCoursesRequest: ['query'],
  searchCoursesSuccess: ['ids'],
  searchCoursesFailure: ['error'],
  searchLecturesRequest: ['query'],
  searchLecturesSuccess: ['ids'],
  searchLecturesFailure: ['error'],
  showSideBar: null,
  hideSideBar: null,
  bookmarkRequest: ['id'],
  bookmarkSuccess: ['id'],
  bookmarkFailure: ['id', 'error'],
  deleteBookmarkRequest: ['id'],
  deleteBookmarkSuccess: ['id'],
  deleteBookmarkFailure: ['id', 'error'],
  getBookmarkedRequest: null,
  getBookmarkedSuccess: null,
  getBookmarkedFailure: ['error'],
});

/* ------------- Initial State ------------- */

export const initialState = fromJS({
  appLayout: {
    showSideBar: false,
  },
  entities: null,
  keyword: null,
  signIn: {
    payload: null,
    isFetching: false,
    error: null,
  },
  user: {
    id: null,
    isFetching: false,
    error: null,
  },
  courses: {
    ids: [],
    isFetching: false,
    error: null,
  },
  lectures: {
    ids: [],
    isFetching: false,
    error: null,
    performedInitialSearch: false,
  },
  bookmarks: {},
  bookmarkedLectures: null,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const normalizeData = (state, { data }) =>
  state.mergeDeep({ entities: normalize(data) });

export const search = (state, { keyword }) =>
  state.merge({ keyword });

export const signInRequest = (state) =>
  state.mergeDeep({ signIn: { isFetching: true, error: null } });

export const signInSuccess = (state, { payload }) =>
  state.mergeDeep({ signIn: { isFetching: false, error: null, payload } });

export const signInFailure = (state, { error }) =>
  state.mergeDeep({ signIn: { isFetching: false, error } });

export const userRequest = (state) =>
  state.mergeDeep({ user: { isFetching: true, error: null, id: null } });

export const userSuccess = (state, { id }) =>
  state.mergeDeep({ user: { isFetching: false, error: null, id } });

export const userFailure = (state, { error }) =>
  state.mergeDeep({ user: { isFetching: false, error, id: null } });

export const signOut = (state) =>
  state.mergeDeep({ user: { id: null }, entities: { users: null } });

export const searchCoursesRequest = (state, { query }) =>
  state.setIn(['courses', 'ids'], []).mergeDeep({ query, courses: { isFetching: true, error: null } });

export const searchCoursesSuccess = (state, { ids }) =>
  state.setIn(['courses', 'ids'], ids).mergeDeep({ courses: { isFetching: false, error: null } });

export const searchCoursesFailure = (state, { error }) =>
  state.setIn(['courses', 'ids'], []).mergeDeep({ courses: { isFetching: false, error } });

export const searchLecturesRequest = (state) =>
  state.setIn(['lectures', 'performedInitialSearch'], true).mergeDeep({ lectures: { isFetching: true, error: null } });

export const searchLecturesSuccess = (state, { ids }) =>
  state.setIn(['lectures', 'ids'], ids).mergeDeep({ lectures: { isFetching: false, error: null } });

export const searchLecturesFailure = (state, { error }) =>
  state.setIn(['lectures', 'ids'], []).mergeDeep({ lectures: { isFetching: false, error } });

export const showSideBar = (state) =>
  state.setIn(['appLayout', 'showSideBar'], true);

export const hideSideBar = (state) =>
  state.setIn(['appLayout', 'showSideBar'], false);

export const bookmarkRequest = (state, { id }) =>
  state.setIn(['bookmarks', id], fromJS({ isFetching: true }));

export const bookmarkSuccess = (state, { id }) =>
  state.setIn(['bookmarks', id], fromJS({ isFetching: false, error: null })).setIn(['entities', 'lectures', `${id}`, 'attributes', 'bookmarked'], true);

export const bookmarkFailure = (state, { id, error }) =>
  state.setIn(['bookmarks', id], fromJS({ isFetching: false, error }));

export const deleteBookmarkRequest = (state, { id }) =>
  state.setIn(['bookmarks', id], fromJS({ isFetching: true }));

export const deleteBookmarkSuccess = (state, { id }) =>
  state.setIn(['bookmarks', id], fromJS({ isFetching: false, error: null })).setIn(['entities', 'lectures', `${id}`, 'attributes', 'bookmarked'], false);

export const deleteBookmarkFailure = (state, { id, error }) =>
  state.setIn(['bookmarks', id], fromJS({ isFetching: false, error }));

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(initialState, {
  [Types.NORMALIZE_DATA]: normalizeData,
  [Types.SAMPLE_REQUEST]: search,
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_IN_FAILURE]: signInFailure,
  [Types.USER_REQUEST]: userRequest,
  [Types.USER_SUCCESS]: userSuccess,
  [Types.USER_FAILURE]: userFailure,
  [Types.SIGN_OUT]: signOut,
  [Types.SEARCH_COURSES_REQUEST]: searchCoursesRequest,
  [Types.SEARCH_COURSES_SUCCESS]: searchCoursesSuccess,
  [Types.SEARCH_COURSES_FAILURE]: searchCoursesFailure,
  [Types.SEARCH_LECTURES_REQUEST]: searchLecturesRequest,
  [Types.SEARCH_LECTURES_SUCCESS]: searchLecturesSuccess,
  [Types.SEARCH_LECTURES_FAILURE]: searchLecturesFailure,
  [Types.SHOW_SIDE_BAR]: showSideBar,
  [Types.HIDE_SIDE_BAR]: hideSideBar,
  [Types.BOOKMARK_REQUEST]: bookmarkRequest,
  [Types.BOOKMARK_SUCCESS]: bookmarkSuccess,
  [Types.BOOKMARK_FAILURE]: bookmarkFailure,
  [Types.DELETE_BOOKMARK_REQUEST]: deleteBookmarkRequest,
  [Types.DELETE_BOOKMARK_SUCCESS]: deleteBookmarkSuccess,
  [Types.DELETE_BOOKMARK_FAILURE]: deleteBookmarkFailure,
  [Types.GET_BOOKMARKED_REQUEST]: bookmarkRequest,
  [Types.GET_BOOKMARKED_SUCCESS]: bookmarkSuccess,
  [Types.GET_BOOKMARKED_FAILURE]: bookmarkFailure,
});
