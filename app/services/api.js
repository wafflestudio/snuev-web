import { put, select } from 'redux-saga/effects';
import queryString from 'query-string';
import isFunction from 'lodash/isFunction';
import fetch from '../utils/fetch';
import { Creators as AuthActions } from '../global/reducer';
import { makeSelectUser } from '../global/selectors';
import { getAuthToken } from './localStorage';
import isGenerator from '../utils/isGenerator';

const createAPI = (customURL, headers, checkPermission) => {
  const baseURL = customURL || process.env.API_HOST;
  const httpMethods = ['GET', 'POST', 'PUT', 'DELETE'];
  headers = headers || { 'Content-Type': 'application/json' };

  const api = {};

  httpMethods.forEach((method) => {
    api[method.toLowerCase()] = function* (endpoint, body, options) {
      let isRestricted = false;
      if (isGenerator(checkPermission)) {
        isRestricted = !(yield checkPermission());
      } else if (isFunction(checkPermission)) {
        isRestricted = !(checkPermission());
      }
      if (isRestricted) {
        const error = new Error('Client Error. Missing request permissions');
        error.errors = [
          {
            title: 'Client Error',
            detail: 'Missing permission to send request',
            source: {},
          },
        ];
        throw error;
      }
      let url = `${baseURL}${endpoint}`;
      if (method === 'GET' && body) {
        url = `${url}?${queryString.stringify(body)}`;
      }
      const authToken = getAuthToken();
      if (authToken) {
        headers.Authorization = authToken;
      }
      try {
        const response = yield fetch(url, { method, body: method === 'GET' ? null : JSON.stringify(body), headers, ...options });
        return response;
      } catch (error) {
        if (error.response.status === 401 && authToken) {
          yield put(AuthActions.signOut());
        }
        throw error;
      }
    };
  });

  return api;
};

export const tokenRequest = createAPI(null, null, () => getAuthToken());
export const authRequest = createAPI(null, null, function* () {
  const user = yield select(makeSelectUser());
  return user && user.get('isConfirmed');
});
export const request = createAPI();

export default createAPI;
