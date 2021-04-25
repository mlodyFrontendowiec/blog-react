import { ADD_CONTENT, DELETE_CONTENT } from "../actions/blogAction";

export const blogReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTENT:
      return [...state, payload];
    case DELETE_CONTENT:
      return [...state.filter((item) => item.id !== payload.id)];
    default:
      return state;
  }
};

export default blogReducer;
