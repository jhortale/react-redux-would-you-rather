import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia } from "@material-ui/core";

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
    width: 180,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  score: {
    display: "flex",
    flexDirection: "row",
  },
  box: {
    width: 100,
    height: 100,
    flex: "1 0 auto",
    alignItems: "center",
  },
}));

const LeaderCard = (props) => {
  console.log(props);
  const { name, avatar, score, numQuestions, numAnswers } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root} spacing={3}>
      <CardMedia className={classes.cover} image={avatar} title="Avatar" />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <p>{name}</p>
          <p>Questions: {numQuestions}</p>
          <p>Answers: {numAnswers}</p>
          <p>Score: {score}</p>
        </CardContent>
      </div>
    </Card>
  );
};

export default LeaderCard;
