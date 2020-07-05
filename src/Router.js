import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Main from "./Main";
export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/player/:platform/:id" component={Main} />
      </Switch>
    </Router>
  );
}
