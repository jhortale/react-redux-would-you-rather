import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import LeaderCard from "./LeaderCard";

const useStyles = makeStyles((theme) => ({
  root: {
    //backgroundColor: theme.palette.background.paper,
    // width: 100
    flexGrow: 1,
  },
}));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
// paper: {
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// },
// }));

const LeaderBoard = ({ usersByScore }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Leaderboard</h1>
        </Grid>

        {usersByScore.map((user, index) => (
          <Grid item xs={12} key={index}>
            <LeaderCard
              key={user.id}
              id={user.id}
              name={user.name}
              avatar={user.avatarURL}
              score={user.score}
              numQuestions={user.numQuestions}
              numAnswers={user.numAnswers}
            />
          </Grid>
        ))}
      </Grid>
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
