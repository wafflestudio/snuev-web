
import { fromJS } from 'immutable';
import signUpPageReducer from '../reducer';

describe('signUpPageReducer', () => {
  it('returns the initial state', () => {
    expect(signUpPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
