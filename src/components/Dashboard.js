import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Tabs from "./Tabs.js";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Question from "./Question.js";

const sections = [
  { title: "Home", url: "/" },
  { title: "New Question", url: "/newquestion" },
  { title: "LeaderBoard", url: "/leaderboard" },
];

const Dashboard = (props) => {
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
