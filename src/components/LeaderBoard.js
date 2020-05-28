import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import LeaderCard from "./LeaderCard";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

const LeaderBoard = ({ usersByScore }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <h1>Leaderboard</h1>
      {usersByScore.map((user) => (
        <LeaderCard
          key={user.id}
          id={user.id}
          name={user.name}
          score={user.score}
          numQuestions={user.numQuestions}
          numAnswers={user.numAnswers}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const usersByScore = Object.values(users)
    .map((user) => ({
      ...user,
      score:
        Object.keys(user.answers).length + Object.keys(user.questions).length,
      numQuestions: Object.keys(user.questions).length,
      numAnswers: Object.keys(user.answers).length,
    }))
    .sort((a, b) => b.score - a.score);
  return {
    usersByScore,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
