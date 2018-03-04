import { put } from 'redux-saga/effects';
import queryString from 'query-string';
import fetch from '../utils/fetch';
import { Creators as AuthActions } from '../global/reducer';
import { getAuthToken } from './localStorage';

const createAPI = (customURL, headers, config) => {
  const baseURL = customURL || process.env.API_HOST;
  const authenticated = (config && config.authenticated) ? config.authenticated : false;
  const httpMethods = (config && config.httpMethods) ? config.httpMethods : ['GET', 'POST', 'PUT', 'DELETE'];
  headers = headers || { 'Content-Type': 'application/json' };

  const api = {};

  httpMethods.forEach((method) => {
    api[method.toLowerCase()] = function* _(endpoint, body, options) {
      let url = `${baseURL}${endpoint}`;
      if (method === 'GET' && body) {
        url = `${url}?${queryString.stringify(body)}`;
      }
      const authToken = getAuthToken();
      if (authToken) {
        headers.Authorization = authToken;
      } else if (authenticated) {
        const error = new Error('Client Error. Auth token does not exist');
        error.errors = [
          {
            title: 'Client Error',
            detail: 'Auth token does not exist',
            source: {},
          },
        ];
        throw error;
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

export const authRequest = createAPI(null, null, { authenticated: true });
export const request = createAPI();

export default createAPI;
