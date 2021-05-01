export const ADD_CHALLENGES = "ADD_CHALLENGES";
export const DELETE_CHALLENGES = "DELETE_CHALLENGES";

export const addChallenge = ({ title, content, days }) => ({
  type: ADD_CHALLENGES,
  payload: {
    title,
    content,
    days,
    id: Math.floor(Math.random() * 32142324233221),
  },
});

export const deleteChallenge = ({ id }) => ({
  type: DELETE_CHALLENGES,
  payload: {
    id,
  },
});
