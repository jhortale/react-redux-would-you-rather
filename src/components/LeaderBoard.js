import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import LeaderCard from "./LeaderCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const LeaderBoard = ({ usersByScore }) => {
  const classes = useStyles();

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
