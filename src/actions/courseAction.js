export const ADD_COURSE = "ADD_COURSE";
export const DELETE_COURSE = "DELETE_COURSE";

export const addCourse = ({ title, content, price, startDate, endDate }) => ({
  type: ADD_COURSE,
  payload: {
    title,
    content,
    price,
    startDate,
    endDate,
    id: Math.floor(Math.random() * 32142324233221),
  },
});

export const deleteCourse = ({ id }) => ({
  type: DELETE_COURSE,
  payload: {
    id,
  },
});
