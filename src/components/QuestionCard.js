import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { formatQuestion } from "../utils/helpers";

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

const QuestionCard = ({
  question: {
    id,
    avatar,
    name,
    optionOneText,
    optionOneVotes,
    optionTwoText,
    optionTwoVotes,
    hasVoted,
  },
}) => {
  const history = useHistory();
  const totalVotes = optionOneVotes.length + optionTwoVotes.length;
  const percentage = (num, total) => {
    return (num / total) * 100;
  };
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name} Asks:
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Would you rather...
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            ...{optionOneText}...
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push(`/question/${id}`)}
            linkButton={true}
          >
            View Pool
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];
  console.log("MapStaTe: ", question);
  return {
    question: formatQuestion(question, users[question.author], authedUser),
  };
};

export default connect(mapStateToProps)(QuestionCard);
