/*
 *
 * LecturePage reducer
 *
 */

import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  getLectureRequest: ['id'],
  getLectureSuccess: null,
  getLectureFailure: ['error'],
  getEvaluationsRequest: ['id', 'page'],
  getEvaluationsSuccess: ['ids'],
  getEvaluationsFailure: ['error'],
  getMyEvaluationRequest: ['id'],
  getMyEvaluationSuccess: ['id'],
  getMyEvaluationFailure: ['error'],
  createEvaluationRequest: ['id', 'data'],
  createEvaluationSuccess: ['id'],
  createEvaluationFailure: ['error'],
  updateEvaluationRequest: ['lectureId', 'evaluationId', 'data'],
  updateEvaluationSuccess: null,
  updateEvaluationFailure: ['error'],
  openEvaluationForm: null,
  closeEvaluationForm: null,
  voteRequest: ['lectureId', 'evaluationId', 'isUpvote'],
  upvoteSuccess: ['id'],
  downvoteSuccess: ['id'],
  voteFailure: ['id', 'error'],
  deleteVoteRequest: ['lectureId', 'evaluationId', 'isUpvote'],
  deleteUpvoteSuccess: ['id'],
  deleteDownvoteSuccess: ['id'],
  deleteVoteFailure: ['id', 'error'],
});

/* ------------- Initial State ------------- */

export const initialState = fromJS({
  lecture: {
    id: null,
    isFetching: false,
    error: null,
  },
  evaluations: {
    ids: [],
    hasMore: true,
    isFetching: false,
    error: null,
  },
  myEvaluation: {
    id: null,
    isFetching: false,
    error: null,
  },
  createEvaluation: {
    isFetching: false,
    error: null,
  },
  updateEvaluation: {
    isFetching: false,
    error: null,
  },
  evaluationFormOpen: false,
  votes: {},
});

/* ------------- Reducers ------------- */

export const lectureRequest = (state, { id }) =>
  state.mergeDeep({
    lecture: { id, isFetching: true, error: null },
  }).merge({
    evaluations: initialState.get('evaluations'),
    myEvaluation: initialState.get('myEvaluation'),
  });

export const lectureSuccess = (state) =>
  state.mergeDeep({ lecture: { isFetching: false, error: null } });

export const lectureFailure = (state, { error }) =>
  state.mergeDeep({ lecture: { isFetching: false, error } });

export const evaluationsRequest = (state) =>
  state.mergeDeep({ evaluations: { isFetching: true, error: null } });

export const evaluationsSuccess = (state, { ids }) => ids.length ?
  state.mergeDeep({
    evaluations: {
      ids: state.getIn(['evaluations', 'ids']).concat(ids).toSet().toList(),
      hasMore: true,
      isFetching: false,
      error: null,
    },
  }) :
  state.mergeDeep({
    evaluations: {
      hasMore: false,
      isFetching: false,
      error: null,
    },
  });

export const evaluationsFailure = (state, { error }) =>
  state.mergeDeep({ evaluations: { isFetching: false, error } });

export const myEvaluationRequest = (state) =>
  state.mergeDeep({ myEvaluation: { isFetching: true, error: null } });

export const myEvaluationSuccess = (state, { id }) =>
  state.mergeDeep({ myEvaluation: { id, isFetching: false, error: null } });

export const myEvaluationFailure = (state, { error }) =>
  state.mergeDeep({ myEvaluation: { isFetching: false, error } });

export const createEvaluationRequest = (state) =>
  state.mergeDeep({ createEvaluation: { isFetching: true, error: null } });

export const createEvaluationSuccess = (state, { id }) =>
  state.mergeDeep({
    evaluations: {
      ids: state.getIn(['evaluations', 'ids']).unshift(id),
    },
    createEvaluation: {
      isFetching: false,
      error: null,
    },
  });

export const createEvaluationFailure = (state, { error }) =>
  state.mergeDeep({ createEvaluation: { isFetching: false, error } });

export const updateEvaluationRequest = (state) =>
  state.mergeDeep({ updateEvaluation: { isFetching: true, error: null } });

export const updateEvaluationSuccess = (state) =>
  state.mergeDeep({ updateEvaluation: { isFetching: false, error: null } });

export const updateEvaluationFailure = (state, { error }) =>
  state.mergeDeep({ updateEvaluation: { isFetching: false, error } });

export const openEvaluationForm = (state) =>
  state.set('evaluationFormOpen', true);

export const closeEvaluationForm = (state) =>
  state.set('evaluationFormOpen', false);

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

// should convert uppercase to screaming snake_case
export default createReducer(initialState, {
  [Types.GET_LECTURE_REQUEST]: lectureRequest,
  [Types.GET_LECTURE_SUCCESS]: lectureSuccess,
  [Types.GET_LECTURE_FAILURE]: lectureFailure,
  [Types.GET_EVALUATIONS_REQUEST]: evaluationsRequest,
  [Types.GET_EVALUATIONS_SUCCESS]: evaluationsSuccess,
  [Types.GET_EVALUATIONS_FAILURE]: evaluationsFailure,
  [Types.GET_MY_EVALUATION_REQUEST]: myEvaluationRequest,
  [Types.GET_MY_EVALUATION_SUCCESS]: myEvaluationSuccess,
  [Types.GET_MY_EVALUATION_FAILURE]: myEvaluationFailure,
  [Types.CREATE_EVALUATION_REQUEST]: createEvaluationRequest,
  [Types.CREATE_EVALUATION_SUCCESS]: createEvaluationSuccess,
  [Types.CREATE_EVALUATION_FAILURE]: createEvaluationFailure,
  [Types.UPDATE_EVALUATION_REQUEST]: updateEvaluationRequest,
  [Types.UPDATE_EVALUATION_SUCCESS]: updateEvaluationSuccess,
  [Types.UPDATE_EVALUATION_FAILURE]: updateEvaluationFailure,
  [Types.OPEN_EVALUATION_FORM]: openEvaluationForm,
  [Types.CLOSE_EVALUATION_FORM]: closeEvaluationForm,
  [Types.VOTE_REQUEST]: voteRequest,
  [Types.UPVOTE_SUCCESS]: upvoteSuccess,
  [Types.DOWNVOTE_SUCCESS]: downvoteSuccess,
  [Types.VOTE_FAILURE]: voteFailure,
  [Types.DELETE_VOTE_REQUEST]: deleteVoteRequest,
  [Types.DELETE_UPVOTE_SUCCESS]: deleteUpvoteSuccess,
  [Types.DELETE_DOWNVOTE_SUCCESS]: deleteDownvoteSuccess,
  [Types.DELETE_VOTE_FAILURE]: deleteVoteFailure,
});
