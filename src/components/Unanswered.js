import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { formatQuestion } from "../utils/helpers";

const Unanswered = ({
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
  const totalVotes = optionOneVotes.length + optionTwoVotes.length;
  const percentage = (num, total) => {
    return (num / total) * 100;
  };
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Fragment>
      <Typography component="h5" variant="h5">
        Asks:
      </Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Would You Rather...</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
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
      </FormControl>

      <Typography variant="subtitle1" color="textSecondary">
        Mac Miller
      </Typography>
      <Button variant="contained" color="primary">
        View Pool
      </Button>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];
  console.log("MapStaTe: ", question);
  return {
    question: formatQuestion(question, users[question.author], authedUser),
  };
};

export default connect(mapStateToProps)(Unanswered);
