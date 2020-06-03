import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Tabs from "../questions/Tabs.js";
import NewQuestion from "../questions/NewQuestion";
import LeaderBoard from "../leaderboard/LeaderBoard";
import Question from "../questions/Question.js";
import NotFound from "../NotFound";

const sections = [
  { title: "Home", url: "/" },
  { title: "New Question", url: "/add" },
  { title: "LeaderBoard", url: "/leaderboard" },
];

const Dashboard = ({ loading }) => {
  if (!loading) {
    return <Redirect to="/" />;
  }
  return (
    <Fragment>
      <Router>
        <CssBaseline />
        <Container maxWidth="sm">
          <Header title="Would You Rather...?" sections={sections} />
          <main>
            <Route exact path="/" component={Tabs} />
            <Route path="/add" component={NewQuestion} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/questions/:id" component={Question} />
            {/* <Route component={NotFound} /> */}
          </main>
          {/* )} */}
        </Container>
      </Router>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  };
};

export default connect(mapStateToProps)(Dashboard);
