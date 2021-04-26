import { ADD_COURSE, DELETE_COURSE } from "../actions/courseAction";

export const courseReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_COURSE:
      return [...state, payload];
    case DELETE_COURSE:
      return [...state.filter((item) => item.id !== payload.id)];
    default:
      return state;
  }
};

export default courseReducer;
