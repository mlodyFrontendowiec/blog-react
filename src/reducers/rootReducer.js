import { combineReducers } from "redux";
import { forumReducer } from "./forumReducer";
import { loginReducer } from "./loginReducer";

export const rootReducer = combineReducers({
  forum: forumReducer,
  login: loginReducer,
});

export default rootReducer;
