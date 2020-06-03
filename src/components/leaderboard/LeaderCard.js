import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const LeaderCard = (props) => {
  console.log(props);
  const { name, avatar, score, numQuestions, numAnswers } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root} spacing={3}>
      <CardMedia
        className={classes.cover}
        image={avatar}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <p>{name}</p>

          <p>Questions: {numQuestions}</p>

          <p>Answers: {numAnswers}</p>
          <p>
            Score: <strong>{score}</strong>
          </p>
        </CardContent>
      </div>
    </Card>
  );
};

export default LeaderCard;
