import { combineReducers } from "redux";
import { forumReducer } from "./forumReducer";
import { loginReducer } from "./loginReducer";
import { blogReducer } from "./blogReducer";
import { courseReducer } from "./courseReducer";

export const rootReducer = combineReducers({
  blog: blogReducer,
  forum: forumReducer,
  login: loginReducer,
  course: courseReducer,
});

export default rootReducer;
