import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Header from "./Header";
import Tabs from "./Tabs.js";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Question from "./Question.js";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: "Home", url: "/" },
  { title: "New Question", url: "/newquestion" },
  { title: "LeaderBoard", url: "leaderboard" },
];

export default function Blog() {
  return (
    <Fragment>
      <Router>
        <CssBaseline />
        <Container maxWidth="sm">
          <Header title="Would You Rather...?" sections={sections} />
          <main>
            <Route exact path="/" component={Tabs} />
            <Route path="/newquestion" component={NewQuestion} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/question/:id" component={Question} />
          </main>
        </Container>
      </Router>
    </Fragment>
  );
}
