
import { fromJS } from 'immutable';
import evaluatePageReducer from '../reducer';

describe('evaluatePageReducer', () => {
  it('returns the initial state', () => {
    expect(evaluatePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
