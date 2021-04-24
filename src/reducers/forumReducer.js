import { ADD_POST, DELETE_POST, EDIT_POST } from "../actions/forumAction";

export const forumReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_POST:
      return [...state, payload];
      break;
    case DELETE_POST:
      return [...state.filter((item) => item.id !== payload.id)];
      break;
    case EDIT_POST:
      return state;
      break;
    default:
      return state;
      break;
  }
};
