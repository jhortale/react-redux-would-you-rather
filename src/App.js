import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { handleInitialData } from "./actions/shared";
import Login from "./components/auth/Login";
import Header from "./components/layout/Header";
import Dashboard from "./components/questions/Tabs";
import NewQuestion from "./components/questions/NewQuestion";
import LeaderBoard from "./components/leaderboard/LeaderBoard";
import Question from "./components/questions/Question";
import NotFound from "./components/layout/NotFound";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const sections = [
  { title: "Home", url: "/" },
  { title: "New Question", url: "/add" },
  { title: "LeaderBoard", url: "/leaderboard" },
];

const App = ({ dispatch, loading }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  return (
    <Router>
      <LoadingBar />
      <CssBaseline />
      <Container maxWidth="sm">
        <Switch>
          {loading ? (
            <Route exact path="/" component={Login} />
          ) : (
            <Fragment>
              <Header title="Would You Rather...?" sections={sections} />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/add" component={NewQuestion} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route exact path="/questions/:id" component={Question} />
                <Route path="/questions/" component={NotFound} />
              </Switch>
            </Fragment>
          )}
          <Route path="/" component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
};

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
