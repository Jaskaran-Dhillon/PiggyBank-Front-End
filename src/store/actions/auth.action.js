export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function login(user) {
  return {
    type: LOGIN_USER,
    user
  };
}

export function logout() {
  return {
    type: LOGOUT_USER,
  };
}
