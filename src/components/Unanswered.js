import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { handleQuestionAnswer } from "../actions/questions";

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

const Unanswered = ({
  question: { id, avatar, name, optionOneText, optionTwoText },
  authedUser,
  dispatch,
}) => {
  const [value, setValue] = useState({
    qid: "",
    answer: "",
    authedUser: null,
  });

  const handleChange = (e) => {
    setValue({ ...value, qid: id, answer: e.target.value, authedUser });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleQuestionAnswer(value));
  };
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover} image={avatar} title="Avatar" />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name} Asks:
          </Typography>
          <form method="post" onSubmit={(e) => handleSubmit(e)}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Would You Rather...</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value.answer}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="optionOne"
                  control={<Radio />}
                  label={optionOneText}
                />
                <FormControlLabel
                  value="optionTwo"
                  control={<Radio />}
                  label={optionTwoText}
                />
              </RadioGroup>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </FormControl>
          </form>
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

export default connect(mapStateToProps)(Unanswered);
