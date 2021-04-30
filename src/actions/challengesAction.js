export const ADD_CHALLENGES = "ADD_CHALLENGES";
export const DELETE_CHALLENGES = "DELETE_CHALLENGES";

export const addChallenge = ({ title, contnent, days }) => ({
  type: ADD_CHALLENGES,
  payload: {
    title,
    contnent,
    days,
  },
});

export const deleteChallenge = ({ id }) => ({
  type: DELETE_CHALLENGES,
  payload: {
    id,
  },
});
