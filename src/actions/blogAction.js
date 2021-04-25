export const ADD_CONTENT = "ADD_POST";
export const DELETE_CONTENT = "DELETE_POST";

export const addPost = ({ title, content }) => ({
  type: ADD_CONTENT,
  payload: {
    title,
    content,
    date: Date.now(),
    id: Math.floor(Math.random() * 32142324233221),
    comments: [],
  },
});

export const deletePost = ({ id }) => ({
  type: DELETE_CONTENT,
  payload: {
    id,
  },
});
