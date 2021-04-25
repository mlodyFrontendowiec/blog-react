import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  ADD_COMMENT,
} from "../actions/forumAction";

export const forumReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_POST:
      return [...state, payload];
    case DELETE_POST:
      return [...state.filter((item) => item.id !== payload.id)];
    case ADD_COMMENT:
      const newState = state.map((item) => {
        if (item.id === payload.postId) {
          item.comments.push(payload);
        }
        return item;
      });
      return newState;
    default:
      return state;
  }
};
