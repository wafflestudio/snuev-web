import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';
import normalize from 'json-api-normalizer';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  normalizeData: ['data'],
});

/* ------------- Initial State ------------- */

export const initialState = fromJS({
  normalizedData: null,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const normalizeData = (state, { data }) =>
  state.merge({ normalizedData: normalize(data) });

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(initialState, {
  [Types.NORMALIZE_DATA]: normalizeData,
});
