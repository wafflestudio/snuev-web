import { put } from 'redux-saga/effects';
import queryString from 'query-string';
import fetch from '../utils/fetch';
import { Creators as AuthActions } from '../global/reducer';

const createAPI = (customURL, headers, config) => {
  const baseURL = customURL || process.env.API_HOST;
  const authenticated = (config && config.authenticated) ? config.authenticated : false;
  const httpMethods = (config && config.httpMethods) ? config.httpMethods : ['GET', 'POST', 'PUT', 'DELETE'];
  headers = headers || { 'Content-Type': 'application/json' };

  const api = {};

  if (authenticated) {
    httpMethods.forEach((method) => {
      api[method.toLowerCase()] = function* _(endpoint, body, options) {
        let url = `${baseURL}${endpoint}`;
        if (method === 'GET' && body) {
          url = `${url}?${queryString.stringify(body)}`;
        }
        headers.Authorization = localStorage.getItem('auth_token');
        const response = yield fetch(url, { method, body: JSON.stringify(body), headers, ...options });
        if (response.status === 401) {
          yield put(AuthActions.SignOut());
        }
        return response;
      };
    });
  } else {
    httpMethods.forEach((method) => {
      api[method.toLowerCase()] = function* _(endpoint, body, options) {
        let url = `${baseURL}${endpoint}`;
        if (method === 'GET' && body) {
          url = `${url}?${queryString.stringify(body)}`;
        }
        return yield fetch(url, { method, body: JSON.stringify(body), headers, ...options });
      };
    });
  }
  return api;
};

export const authRequest = createAPI(null, null, { authenticated: true });
export const request = createAPI();
