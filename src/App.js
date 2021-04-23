import React from "react";

import "./reset.css";

import { Route, Switch, Redirect } from "react-router";

import Blog from "./views/Blog/Blog";
import Header from "./components/Header/Header";
import Forum from "./views/Forum/Forum";
import Courses from "./views/Courses/Courses";
import Challenges from "./views/Challenges/Challenges";
import LogIn from "./views/LogIn/LogIn";
import AdminPanel from "./views/AdminPanel/AdminPanel";

function App() {
  return (
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
      <Route path="/admin" exact>
        <AdminPanel />
      </Route>
      <Route path="/">
        <Redirect to="/blog" />
      </Route>
    </Switch>
  );
}

export default App;
