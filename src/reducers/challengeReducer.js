import { ADD_CHALLENGES, DELETE_CHALLENGES } from "../actions/challengesAction";

export const challengesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CHALLENGES:
      return [...state, payload];

    case DELETE_CHALLENGES:
      return [...state.filter((item) => item.id !== payload.id)];

    default:
      return state;
  }
};
