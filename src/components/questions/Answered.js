import React from "react";
import { connect } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import LinearProgress from "@material-ui/core/LinearProgress";

import { formatQuestion } from "../../utils/helpers";

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
    width: 200,
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

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

const Answered = (props) => {
  const {
    question: {
      avatar,
      name,
      optionOneText,
      optionOneVotes,
      optionTwoText,
      optionTwoVotes,
    },
    authedUser,
  } = props;
  console.log(authedUser, optionOneVotes, optionTwoVotes);
  const totalVotes = optionOneVotes.length + optionTwoVotes.length;
  const percentage = (num, total) => {
    return (num / total) * 100;
  };
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover} image={avatar} title="Avatar" />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <p>{name} Asks:</p>
          <p>Results:</p>
          <p>
            {optionOneVotes.includes(authedUser) && "(Your Vote): "}
            Would you rather {optionOneText}?
          </p>

          <BorderLinearProgress
            variant="determinate"
            value={percentage(optionOneVotes.length, totalVotes)}
          />
          <p>{`${optionOneVotes.length} out of ${totalVotes}`}</p>
          <hr />
          <p>
            {optionTwoVotes.includes(authedUser) && "(Your Vote): "}
            Would you rather{optionTwoText}?
          </p>
          <BorderLinearProgress
            variant="determinate"
            value={percentage(optionTwoVotes.length, totalVotes)}
          />
          <p>{`${optionTwoVotes.length} out of ${totalVotes}`}</p>
        </CardContent>
      </div>
    </Card>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];
  return {
    question: formatQuestion(question, users[question.author], authedUser),
    authedUser,
  };
};

export default connect(mapStateToProps)(Answered);
