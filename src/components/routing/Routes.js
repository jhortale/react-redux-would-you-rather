import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import NotFound from "../layout/NotFound";
import PrivateRoute from "./PrivateRoute";

const Routes = (props) => {
  return (
    <section className="container">
      <Switch>
        {/* <Route exact path="/register" component={Register} /> */}
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Tabs} />
        <PrivateRoute exact path="/add" component={NewQuestion} />
        <PrivateRoute exact path="/leaderboard" component={LeaderBoard} />
        <PrivateRoute exact path="/questions/:id" component={Question} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
