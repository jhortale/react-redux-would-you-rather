import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Button,
  Typography,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@material-ui/core";

import { handleAddQuestion } from "../../actions/questions";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const initialValue = {
  optionOneText: "",
  optionTwoText: "",
};

const NewQuestion = ({ dispatch }) => {
  const [questions, setQuestions] = useState(initialValue);
  const history = useHistory();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuestions({ ...questions, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(questions));
    setQuestions(initialValue);
    history.push("/");
  };

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Create New Question
        </Typography>
        <Typography variant="h5" component="h2">
          Would You Rather...
        </Typography>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-option-one">
              Option One
            </InputLabel>
            <OutlinedInput
              id="optionOneText"
              name="optionOneText"
              label="Option One"
              onChange={(e) => handleChange(e)}
              value={questions.optionOneText}
              startAdornment={
                <InputAdornment position="start">...</InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
          <Typography variant="h5" component="h2">
            OR
          </Typography>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-option-two">
              Option Two
            </InputLabel>
            <OutlinedInput
              id="optionTwoText"
              name="optionTwoText"
              label="Option Two"
              onChange={(e) => handleChange(e)}
              value={questions.optionTwoText}
              startAdornment={
                <InputAdornment position="start">...</InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
          <Button
            disabled={
              questions.optionOneText.length >= 3 &&
              questions.optionTwoText.length >= 3 &&
              questions.optionOneText !== questions.optionTwoText
                ? false
                : true
            }
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default connect()(NewQuestion);
