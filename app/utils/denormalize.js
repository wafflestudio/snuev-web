import build from 'redux-object';
import { fromJS } from 'immutable';

export const denormalize = (normalizedData, modelName, id) => {
  try {
    return fromJS(build(normalizedData.toJS(), modelName, id));
  } catch (err) {
    // isFetching or an error, ...
    return null;
  }
};
