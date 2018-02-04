<<<<<<< HEAD
import { put } from 'redux-saga/effects';
import queryString from 'query-string';
import fetch from '../utils/fetch';
import { Creators as AuthActions } from '../global/reducer';
import { getAuthToken } from "./localStorage";

const createAPI = (customURL, headers, config) => {
  const baseURL = customURL || process.env.API_HOST;
  console.log(baseURL);
  const authenticated = (config && config.authenticated) ? config.authenticated : false;
  const httpMethods = (config && config.httpMethods) ? config.httpMethods : ['GET', 'POST', 'PUT', 'DELETE'];
  headers = headers || { 'Content-Type': 'application/json' };

  const api = {};

  if (authenticated) {
=======
import request from '../utils/request';

const create = () => {
  const API_URL = process.env.API_HOST;

  const createAPI = (customURL, headers, config = { httpMethods: [] }) => {
    const baseURL = customURL || API_URL;

    const api = {};
    const httpMethods = config.httpMethods && config.httpMethods.length > 0 ? config.httpMethods : ['GET', 'POST', 'PUT', 'DELETE'];

>>>>>>> 2459b6de5067e202d7d27cb3069ef3f9f42f465a
    httpMethods.forEach((method) => {
      api[method.toLowerCase()] = function* _(endpoint, body, options) {
        let url = `${baseURL}${endpoint}`;
        if (method === 'GET' && body) {
          url = `${url}?${queryString.stringify(body)}`;
        }
        headers.Authorization = getAuthToken();
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
