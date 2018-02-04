
import { fromJS } from 'immutable';
import confirmEmailPageReducer from '../reducer';

describe('confirmEmailPageReducer', () => {
  it('returns the initial state', () => {
    expect(confirmEmailPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
