
import { fromJS } from 'immutable';
import navBarContainerReducer from '../reducer';

describe('navBarContainerReducer', () => {
  it('returns the initial state', () => {
    expect(navBarContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
