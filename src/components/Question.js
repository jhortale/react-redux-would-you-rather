import React, { Fragment } from "react";
import { connect } from "react-redux";
import Answered from "./Answered";
import Unanswered from "./Unanswered";

import { formatQuestion } from "../utils/helpers";

const Question = (props) => {
  const {
    question: { id, hasVoted },
  } = props;

  return (
    <Fragment>
      {hasVoted ? <Answered id={id} /> : <Unanswered id={id} />}
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, props) => {
  const { id } = props.match.params;
  const question = questions[id];
  return {
    question: formatQuestion(question, users[question.author], authedUser),
  };
};

export default connect(mapStateToProps)(Question);
