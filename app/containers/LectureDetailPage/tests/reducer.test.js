
import { fromJS } from 'immutable';
import lectureDetailPageReducer from '../reducer';

describe('lectureDetailPageReducer', () => {
  it('returns the initial state', () => {
    expect(lectureDetailPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
