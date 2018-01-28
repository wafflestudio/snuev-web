/*
 *
 * NavBarContainer reducer
 *
 */


import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  navBarContainerRequest: ['data'],
  navBarContainerSuccess: ['payload'],
  navBarContainerFailure: null,
});


/* ------------- Initial State ------------- */

export const initialState = fromJS({
  data: null,
  isFetching: false,
  payload: null,
  error: false,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ data, isFetching: true, payload: null, error: null });

// successful api lookup
export const success = (state, { payload }) =>
  state.merge({ isFetching: false, payload, error: null });

// Something went wrong somewhere.
export const failure = (state) =>
  state.merge({ isFetching: false, payload: null, error: true });

/* ------------- Hookup Reducers To Types ------------- */

// should convert uppercase to screaming snake_case
export default createReducer(initialState, {
  [Types.NAV_BAR_CONTAINER_REQUEST]: request,
  [Types.NAV_BAR_CONTAINER_SUCCESS]: success,
  [Types.NAV_BAR_CONTAINER_FAILURE]: failure,
});
