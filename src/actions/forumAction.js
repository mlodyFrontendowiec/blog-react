export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const addPost = ({ title, content }) => ({
  type: ADD_POST,
  payload: {
    title,
    content,
    date: Date.now(),
    id: Math.floor(Math.random() * 32142324233221),
    comments: [],
  },
});

export const deletePost = ({ id }) => ({
  type: DELETE_POST,
  payload: {
    id,
  },
});

export const addComment = ({ comment, postId }) => ({
  type: ADD_COMMENT,
  payload: {
    id: Math.floor(Math.random() * 32142324233221),
    comment,
    postId,
    date: Date.now(),
  },
});

export const removeComment = () => ({
  type: REMOVE_COMMENT,
  payload: {},
});

// export const editPost = ({ title, content, date, id }) => ({
//   type: ADD_POST,
//   payload: {
//     title,
//     content,
//     date,
//     id,
//   },
// });
