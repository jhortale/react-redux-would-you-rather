import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./layout/Header";
import Tabs from "./Tabs.js";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Question from "./Question.js";
import NotFound from "./NotFound";

const sections = [
  { title: "Home", url: "/" },
  { title: "New Question", url: "/add" },
  { title: "LeaderBoard", url: "/leaderboard" },
];

const Dashboard = (props) => {
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

// const mapStateToProps = ({ questions }) => {
//   return {
//     questions,
//   };
// };

export default Dashboard;
