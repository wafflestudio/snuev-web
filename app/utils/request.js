import 'whatwg-fetch';

const API_BASE = 'https://jsonplaceholder.typicode.com';

async function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  response.data = await response.json();
  return response;
}

const api = {};

const httpMethods = ['GET', 'POST', 'PUT', 'DELETE'];

httpMethods.forEach((method) => {
  api[method.toLowerCase()] = (url, options) =>
  fetch(`${API_BASE}${url}`, { method, ...options })
  .then(parseJSON);
});

export default {
  getPost: (postId) => api.get(`/posts/${postId}`),
  getPosts: () => api.get('/posts'),
};
