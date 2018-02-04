import 'whatwg-fetch';

async function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  response.data = await response.json();
  return response;
}

export default (url, options) => (
  fetch(url, options).then(parseJSON)
);