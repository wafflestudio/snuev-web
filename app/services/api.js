import request from '../utils/request';

const create = () => {
  const API_URL = process.env.API_HOST;

  const createAPI = (customURL, headers, config = { httpMethods: [] }) => {
    const baseURL = customURL || API_URL;

    const api = {};
    const httpMethods = config.httpMethods && config.httpMethods.length > 0 ? config.httpMethods : ['GET', 'POST', 'PUT', 'DELETE'];

    httpMethods.forEach((method) => {
      api[method.toLowerCase()] = (endpoint, body, options) =>
        request(`${baseURL}${endpoint}`, { method, body: JSON.stringify(body), headers: headers(), ...options });
    });

    return api;
  };

  const api = createAPI(null, () => ({ 'Content-Type': 'application/json' }));
  const authenticatedAPI = createAPI(null, () => ({ 'Content-Type': 'application/json', Authorization: localStorage.getItem("auth_token") }));

  return {
    getPost: (postId) => api.get(`/posts/${postId}`),
    getPosts: () => api.get('/posts'),
    signup: (data) => api.post('/v1/user', data),
    emailConfirmation: (confirmation_token) => api.get(`/v1/user/confirm_email?confirmation_token=${confirmation_token}`),
    getUser: () => authenticatedAPI.get('/v1/user'),
    validate: () => authenticatedAPI.get('/v1/user'),
  };
};

console.log('called api create');

export default create();
