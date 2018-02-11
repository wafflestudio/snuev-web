import build from 'redux-object';
import { fromJS } from 'immutable';

export const denormalize = (normalizedData, modelName, data) => {
  try {
    return fromJS(build(normalizedData.toJS(), modelName, data));
  } catch (err) {
    // isFetching or an error, ...
    return null;
  }
};
