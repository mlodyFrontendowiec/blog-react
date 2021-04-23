import { LOGOUT, LOGIN } from "../actions/loginAction";

export const loginReducer = (
  state = { isUserLogged: false },
  { type, payload }
) => {
  switch (type) {
    case LOGIN:
      return payload;
      break;
    case LOGOUT:
      return payload;
      break;
    default:
      return state;
      break;
  }
};
