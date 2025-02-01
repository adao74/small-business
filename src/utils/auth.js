import Cookies from 'cookies-js';

export const isAuthenticated = () => {
  const userCookie = Cookies.get('user');
  return !!userCookie;
};

export const setUserCookie = (username) => {
  Cookies.set('user', username, { expires: 5 * 60 * 1000 }); // 5 minutes
};

export const removeUserCookie = () => {
  Cookies.expire('user');
}; 