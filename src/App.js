import React from "react";

import "./reset.css";

import { Route, Switch, Redirect } from "react-router";
import Blog from "./views/Blog/Blog";
import Forum from "./views/Forum/Forum";
import Courses from "./views/Courses/Courses";
import Challenges from "./views/Challenges/Challenges";
import LogIn from "./views/LogIn/LogIn";
import AdminPanel from "./views/AdminPanel/AdminPanel";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/blog" exact>
          <Blog />
        </Route>
        <Route path="/forum" exact>
          <Forum />
        </Route>
        <Route path="/courses" exact>
          <Courses />
        </Route>
        <Route path="/challenges" exact>
          <Challenges />
        </Route>
        <Route path="/login" exact>
          <LogIn />
        </Route>
        <Route path="/admin/:type" exact>
          <AdminPanel />
        </Route>
        <Route path="/">
          <Redirect to="/blog" />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
