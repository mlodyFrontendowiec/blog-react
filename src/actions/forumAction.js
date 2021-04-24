export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";

export const addPost = ({ title, content }) => ({
  type: ADD_POST,
  payload: {
    title,
    content,
    date: Date.now(),
    id: Math.floor(Math.random() * 321423242332),
  },
});

export const deletePost = ({ id }) => ({
  type: DELETE_POST,
  payload: {
    id,
  },
});

export const editPost = ({ title, content, date, id }) => ({
  type: ADD_POST,
  payload: {
    title,
    content,
    date,
    id,
  },
});
