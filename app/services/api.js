import request from '../utils/request';

const create = () => {
  const API_URL = 'http://snuev-backend.herokuapp.com/v1';

  const createAPI = (customURL, headers, config = { httpMethods: [] }) => {
    const baseURL = customURL || API_URL;

    const api = {};
    const httpMethods = config.httpMethods && config.httpMethods.length > 0 ? config.httpMethods : ['GET', 'POST', 'PUT', 'DELETE'];

    httpMethods.forEach((method) => {
      api[method.toLowerCase()] = (endpoint, body, options) =>
        request(`${baseURL}${endpoint}`, { method, body, headers, ...options });
    });

    return api;
  };

  const api = createAPI(null, { 'Content-Type': 'application/json' });
  // const authenticatedAPI = createAPI(null, { 'Content-Type': 'application/json', Authorization: `Bearer TOKEN` });

  return {
    getPost: (postId) => api.get(`/posts/${postId}`),
    getPosts: () => api.get('/posts'),
    getLectures: (query) => api.get(`/lectures/search?q=${query}`),
  };
};

console.log('called api create');

export default create();
