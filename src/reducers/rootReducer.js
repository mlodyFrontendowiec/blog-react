import { combineReducers } from "redux";
import { blogReducer } from "./blogReducer";
import { loginReducer } from "./loginReducer";

export const rootReducer = combineReducers({
  blog: blogReducer,
  login: loginReducer,
});

export default rootReducer;
