export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const LoginUser = () => ({
  type: LOGIN,
  payload: {
    isUserLogged: true,
  },
});
export const LogoutUser = () => ({
  type: LOGIN,
  payload: {
    isUserLogged: false,
  },
});
