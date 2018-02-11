import 'whatwg-fetch';

async function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  response.data = await response.json();
  return response;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  if (response.status === 500) {
    error.errors = [
      {
        title: 'Internal Error',
        detail: 'Internal Error',
        source: {},
      },
    ];
  } else if (response.data.errors) {
    error.errors = response.data.errors;
  } else {
    error.errors = [
      {
        title: 'Undefined Error',
        detail: 'Undefined Error',
        source: {},
      },
    ];
  }
  throw error;
}

export default (url, options) => (
  fetch(url, options).then(parseJSON).then(checkStatus)
);
