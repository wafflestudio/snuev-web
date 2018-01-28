import request from '../utils/request';

const create = () => {
  const API_URL = process.env.API_HOST;

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

  const api = createAPI(null, { 'Content-Type': 'application/json', Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MTU0OTc3NTksImlhdCI6MTUxNTMyNDk1OX0.Fr0ucZxgI-CuEjNEghyzaA9VOMoGAuecE4dW2pFSUiY' });
  // const authenticatedAPI = createAPI(null, { 'Content-Type': 'application/json', Authorization: `Bearer TOKEN` });

  return {
    getLectureDetail: (lectureId) => api.get(`/v1/lectures/${lectureId}`),
    getPost: (postId) => api.get(`/posts/${postId}`),
    getPosts: () => api.get('/posts'),
  };
};

console.log('called api create');

export default create();
