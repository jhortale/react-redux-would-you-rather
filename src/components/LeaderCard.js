import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Questions: {numQuestions}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Answers: {numAnswers}
          </Typography>
        </CardContent>
      </div>
      <div>Score: {score}</div>
    </Card>
  );
};

export default LeaderCard;
