import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  sampleRequest: ['keyword'],
});

/* ------------- Initial State ------------- */

export const initialState = fromJS({
  keyword: null,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { keyword }) =>
  state.merge({ keyword });

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(initialState, {
  [Types.SAMPLE_REQUEST]: request,
});
