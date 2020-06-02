import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-redux-loading";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Tabs from "./Tabs.js";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Question from "./Question.js";
// import { connect } from "react-redux";

// import { handleLogin } from "../actions/shared";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: "Home", url: "/" },
  { title: "New Question", url: "/newquestion" },
  { title: "LeaderBoard", url: "/leaderboard" },
];

const Dashboard = (props) => {
  // const { loading, questions, dispatch } = props;
  // console.log(props);
  // useEffect(() => {
  //   dispatch(handleLogin());
  // }, questions);
  return (
    <Fragment>
      <Router>
        <CssBaseline />
        {/* <LoadingBar /> */}
        <Container maxWidth="sm">
          <Header title="Would You Rather...?" sections={sections} />
          {/* {questions !== "" && ( */}
          <main>
            <Route exact path="/" component={Tabs} />
            <Route path="/newquestion" component={NewQuestion} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/question/:id" component={Question} />
          </main>
          {/* )} */}
        </Container>
      </Router>
    </Fragment>
  );
};

// const mapStateToProps = ({ questions }) => {
//   return {
//     questions,
//   };
// };

export default Dashboard;
