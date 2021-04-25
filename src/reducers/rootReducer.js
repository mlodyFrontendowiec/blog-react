import { combineReducers } from "redux";
import { forumReducer } from "./forumReducer";
import { loginReducer } from "./loginReducer";
import { blogReducer } from "./blogReducer";

export const rootReducer = combineReducers({
  blog: blogReducer,
  forum: forumReducer,
  login: loginReducer,
});

export default rootReducer;
