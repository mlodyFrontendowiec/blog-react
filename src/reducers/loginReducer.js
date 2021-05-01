import { LOGOUT, LOGIN } from "../actions/loginAction";

export const loginReducer = (
  state = { isUserLogged: true },
  { type, payload }
) => {
  switch (type) {
    case LOGIN:
      return payload;

    case LOGOUT:
      return payload;

    default:
      return state;
  }
};
