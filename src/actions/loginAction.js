export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const LoginUser = () => ({
  type: LOGIN,
  payload: {
    isUserLogged: true,
  },
});
export const LogoutUser = () => ({
  type: LOGOUT,
  payload: {
    isUserLogged: false,
  },
});
