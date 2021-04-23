import { ADD_POST, DELETE_POST, EDIT_POST } from "../actions/blogAction";

export const blogReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_POST:
      return [...state, payload];
      break;
    case DELETE_POST:
      return state;
      break;
    case EDIT_POST:
      return state;
      break;
    default:
      return state;
      break;
  }
};
