import build from 'redux-object';
import { fromJS, List } from 'immutable';

export const denormalize = (normalizedData, modelName, id) => {
  try {
    if (!id) {
      return null;
    } else if (id === 'all') {
      return fromJS(build(normalizedData.toJS(), modelName, null));
    }
    return fromJS(build(normalizedData.toJS(), modelName, List.isList(id) ? id.toJS() : id));
  } catch (err) {
    // isFetching or an error, ...
    return null;
  }
};
