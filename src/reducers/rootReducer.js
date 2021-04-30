import { combineReducers } from "redux";
import { forumReducer } from "./forumReducer";
import { loginReducer } from "./loginReducer";
import { blogReducer } from "./blogReducer";
import { courseReducer } from "./courseReducer";
import { challengesReducer } from "./challengeReducer";

export const rootReducer = combineReducers({
  blog: blogReducer,
  forum: forumReducer,
  login: loginReducer,
  course: courseReducer,
  challenge: challengesReducer,
});

export default rootReducer;
