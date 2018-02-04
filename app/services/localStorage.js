export const getAuthToken = () =>
  localStorage.getItem('auth_token');

export const setAuthToken = (token) => {
  localStorage.setItem('auth_token', token);
};

export const clearAuthToken = () => {
  localStorage.removeItem('auth_token');
};

export const authTokenExists = () =>
  localStorage.getItem('auth_token') !== null;
