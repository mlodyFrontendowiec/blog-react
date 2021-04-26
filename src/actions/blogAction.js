export const ADD_CONTENT = "ADD_CONTENT";
export const DELETE_CONTENT = "DELETE_CONTENT";

export const addContent = ({ title, content, imageUrl }) => ({
  type: ADD_CONTENT,
  payload: {
    title,
    content,
    imageUrl,
    date: Date.now(),
    id: Math.floor(Math.random() * 32142324233221),
  },
});

export const deleteContent = ({ id }) => ({
  type: DELETE_CONTENT,
  payload: {
    id,
  },
});
