import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  evaluationRequest: ['keyword'],
  evaluationSuccess: ['payload'],
  evaluationFailure: null,
});

/* ------------- Initial State ------------- */

export const initialState = fromJS({
  keyword: null,
  fetching: false,
  payload: null,
  error: false,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { keyword }) =>
  state.merge({ keyword, fetching: true, payload: null, error: null });

// successful api lookup
export const success = (state, { payload }) =>
  state.merge({ fetching: false, payload, error: null });

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, payload: null, error: true });

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(initialState, {
  [Types.EVALUATION_REQUEST]: request,
  [Types.EVALUATION_SUCCESS]: success,
  [Types.EVALUATION_FAILURE]: failure,
});
