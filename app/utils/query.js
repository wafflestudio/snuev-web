import qs from 'query-string';
import { browserHistory } from 'react-router';
import { fromJS } from 'immutable';

/**
 * @param {Object} query
 */
export const addQuery = (query) => {
  const location = browserHistory.getCurrentLocation();
  const search = `?${qs.stringify(fromJS(qs.parse(location.search)).merge(query).toJS())}`;
  browserHistory.push({
    search,
    pathname: location.pathname,
  });
};
