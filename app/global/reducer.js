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
  setNeedsFocus: ['needsFocus'],
  searchCoursesRequest: ['query'],
  searchCoursesSuccess: ['ids'],
  searchCoursesFailure: ['error'],
  searchLecturesRequest: ['query'],
  searchLecturesSuccess: ['ids'],
  searchLecturesFailure: ['error'],
  showSideBar: null,
  hideSideBar: null,
  showSearchFilter: null,
  hideSearchFilter: null,
  showBookmark: null,
  hideBookmark: null,
  bookmarkRequest: ['id'],
  bookmarkSuccess: ['id'],
  bookmarkFailure: ['id', 'error'],
  deleteBookmarkRequest: ['id'],
  deleteBookmarkSuccess: ['id'],
  deleteBookmarkFailure: ['id', 'error'],
  bookmarkedLecturesRequest: null,
  bookmarkedLecturesSuccess: ['ids'],
  bookmarkedLecturesFailure: ['error'],
  setDepartmentFilter: ['department'],
  removeDepartmentFilter: ['department'],
  setSearchFilter: ['division', 'selection'],
  removeSearchFilter: ['division', 'selection'],
  resetSearchFilter: null,
  getDepartmentsRequest: null,
  getDepartmentsSuccess: null,
  getDepartmentsFailure: ['error'],
  focusLecture: null,
  blurLecture: null,
  voteRequest: ['lectureId', 'evaluationId', 'isUpvote'],
  upvoteSuccess: ['id'],
  downvoteSuccess: ['id'],
  voteFailure: ['id', 'error'],
  deleteVoteRequest: ['lectureId', 'evaluationId', 'isUpvote'],
  deleteUpvoteSuccess: ['id'],
  deleteDownvoteSuccess: ['id'],
  deleteVoteFailure: ['id', 'error'],
  showToast: ['message'],
});

/* ------------- Initial State ------------- */

export const initialState = fromJS({
  appLayout: {
    showSideBar: false,
    showSearchFilter: false,
    showBookmark: false,
    focusLecture: false,
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
  bookmarkedLectures: {
    ids: [],
    isFetching: false,
    error: null,
  },
  searchFilter: {
    departments: {},
    academicYear: {
      first: false,
      second: false,
      third: false,
      fourth: false,
      masters: false,
      doctorate: false,
      combinedMastersAndDoctorate: false,
    },
    credit: {
      one: false,
      two: false,
      three: false,
      four: false,
    },
    courseClassification: {
      subjectForLiberalEducation: false,
      equisiteSubjectForMajor: false,
      electiveSubjectForMajor: false,
      electiveGeneralSubject: false,
      subjectForTeachingCertification: false,
      readingAndResearch: false,
      graduateCourses: false,
      undergraduateCourses: false,
    },
    academicFoundations: {
      criticalThinkingAndWriting: false,
      foreignLanguages: false,
      mathematicalSciences: false,
      naturalSciences: false,
      computerAndInforationScience: false,
    },
    worldsOfKnowledge: {
      languageAndLiterature: false,
      cultureAndArt: false,
      historyAndPhilosophy: false,
      politicsAndEconomy: false,
      humansAndSociety: false,
      natureAndTechnology: false,
      lifeAndEnvironment: false,
    },
    generalEducationElectives: {
      physicalEducation: false,
      artPractice: false,
      collegeLifeAndLeadership: false,
      creativityAndConvergence: false,
      koreaInTheWorld: false,
    },
  },
  departments: {
    isFetching: false,
    error: null,
  },
  votes: {},
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

export const setNeedsFocus = (state, needsFocus) =>
  state.set('needsFocus', needsFocus);

export const searchCoursesRequest = (state, { query }) =>
  state.setIn(['courses', 'ids'], []).set('needsFocus', false).mergeDeep({ query, courses: { isFetching: true, error: null } });

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

export const showSearchFilter = (state) =>
  state.setIn(['appLayout', 'showSearchFilter'], true);

export const hideSearchFilter = (state) =>
  state.setIn(['appLayout', 'showSearchFilter'], false);

export const showBookmark = (state) =>
  state.setIn(['appLayout', 'showBookmark'], true);

export const hideBookmark = (state) =>
  state.setIn(['appLayout', 'showBookmark'], false);

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

export const bookmarkedLecturesRequest = (state) =>
  state.mergeDeep({ bookmarkedLectures: { isFetching: true, error: null } });

export const bookmarkedLecturesSuccess = (state, { ids }) => ids.length ?
  state.mergeDeep({
    bookmarkedLectures: {
      ids: state.getIn(['bookmarkedLectures', 'ids']).concat(ids).toSet().toList(),
      isFetching: false,
      error: null,
    },
  }) :
  state.mergeDeep({
    bookmarkedLectures: {
      isFetching: false,
      error: null,
    },
  });

export const bookmarkedLecturesFailure = (state, { error }) =>
  state.mergeDeep({ bookmarkedLectures: { isFetching: false, error } });

export const setDepartmentFilter = (state, { department }) =>
  state.setIn(['searchFilter', 'departments', department.get('id')], department.get('name'));

export const removeDepartmentFilter = (state, { department }) =>
  state.deleteIn(['searchFilter', 'departments', department.get('id')]);

export const setSearchFilter = (state, { division, selection }) =>
  state.setIn(['searchFilter', division, selection], true);

export const removeSearchFilter = (state, { division, selection }) =>
  state.setIn(['searchFilter', division, selection], false);

export const resetSearchFilter = (state) =>
  state.set('searchFilter', initialState.get('searchFilter'));

export const getDepartmentsRequest = (state) =>
  state.mergeDeep({ departments: { isFetching: true, error: null } });

export const getDepartmentsSuccess = (state) =>
  state.mergeDeep({ departments: { isFetching: false, error: null } });

export const getDepartmentsFailure = (state, { error }) =>
  state.mergeDeep({ departments: { isFetching: false, error } });

export const focusLecture = (state) =>
  state.setIn(['appLayout', 'focusLecture'], true);

export const blurLecture = (state) =>
  state.setIn(['appLayout', 'focusLecture'], false);

export const voteRequest = (state, { evaluationId }) =>
  state.setIn(['votes', evaluationId], fromJS({ isFetching: true }));

export const upvoteSuccess = (state, { id }) =>
  state.setIn(['votes', id], fromJS({ isFetching: false, error: null }));

export const downvoteSuccess = (state, { id }) =>
  state.setIn(['votes', id], fromJS({ isFetching: false, error: null }));

export const voteFailure = (state, { id, error }) =>
  state.setIn(['votes', id], fromJS({ isFetching: false, error }));

export const deleteVoteRequest = (state, { evaluationId }) =>
  state.setIn(['votes', evaluationId], fromJS({ isFetching: true }));

export const deleteUpvoteSuccess = (state, { id }) =>
  state.setIn(['votes', id], fromJS({ isFetching: false, error: null }));

export const deleteDownvoteSuccess = (state, { id }) =>
  state.setIn(['votes', id], fromJS({ isFetching: false, error: null }));

export const deleteVoteFailure = (state, { id, error }) =>
  state.setIn(['votes', id], fromJS({ isFetching: false, error }));

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
  [Types.SET_NEEDS_FOCUS]: setNeedsFocus,
  [Types.SEARCH_COURSES_REQUEST]: searchCoursesRequest,
  [Types.SEARCH_COURSES_SUCCESS]: searchCoursesSuccess,
  [Types.SEARCH_COURSES_FAILURE]: searchCoursesFailure,
  [Types.SEARCH_LECTURES_REQUEST]: searchLecturesRequest,
  [Types.SEARCH_LECTURES_SUCCESS]: searchLecturesSuccess,
  [Types.SEARCH_LECTURES_FAILURE]: searchLecturesFailure,
  [Types.SHOW_SIDE_BAR]: showSideBar,
  [Types.HIDE_SIDE_BAR]: hideSideBar,
  [Types.SHOW_SEARCH_FILTER]: showSearchFilter,
  [Types.HIDE_SEARCH_FILTER]: hideSearchFilter,
  [Types.SHOW_BOOKMARK]: showBookmark,
  [Types.HIDE_BOOKMARK]: hideBookmark,
  [Types.BOOKMARK_REQUEST]: bookmarkRequest,
  [Types.BOOKMARK_SUCCESS]: bookmarkSuccess,
  [Types.BOOKMARK_FAILURE]: bookmarkFailure,
  [Types.DELETE_BOOKMARK_REQUEST]: deleteBookmarkRequest,
  [Types.DELETE_BOOKMARK_SUCCESS]: deleteBookmarkSuccess,
  [Types.DELETE_BOOKMARK_FAILURE]: deleteBookmarkFailure,
  [Types.BOOKMARKED_LECTURES_REQUEST]: bookmarkedLecturesRequest,
  [Types.BOOKMARKED_LECTURES_SUCCESS]: bookmarkedLecturesSuccess,
  [Types.BOOKMARKED_LECTURES_FAILURE]: bookmarkedLecturesFailure,
  [Types.SET_DEPARTMENT_FILTER]: setDepartmentFilter,
  [Types.REMOVE_DEPARTMENT_FILTER]: removeDepartmentFilter,
  [Types.SET_SEARCH_FILTER]: setSearchFilter,
  [Types.REMOVE_SEARCH_FILTER]: removeSearchFilter,
  [Types.RESET_SEARCH_FILTER]: resetSearchFilter,
  [Types.GET_DEPARTMENTS_REQUEST]: getDepartmentsRequest,
  [Types.GET_DEPARTMENTS_SUCCESS]: getDepartmentsSuccess,
  [Types.GET_DEPARTMENTS_FAILURE]: getDepartmentsFailure,
  [Types.FOCUS_LECTURE]: focusLecture,
  [Types.BLUR_LECTURE]: blurLecture,
  [Types.VOTE_REQUEST]: voteRequest,
  [Types.UPVOTE_SUCCESS]: upvoteSuccess,
  [Types.DOWNVOTE_SUCCESS]: downvoteSuccess,
  [Types.VOTE_FAILURE]: voteFailure,
  [Types.DELETE_VOTE_REQUEST]: deleteVoteRequest,
  [Types.DELETE_UPVOTE_SUCCESS]: deleteUpvoteSuccess,
  [Types.DELETE_DOWNVOTE_SUCCESS]: deleteDownvoteSuccess,
  [Types.DELETE_VOTE_FAILURE]: deleteVoteFailure,
});
