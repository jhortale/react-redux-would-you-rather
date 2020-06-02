import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Answered from "./Answered";
import Unanswered from "./Unanswered";
import { formatQuestion } from "../utils/helpers";
import { handleInitialData } from "../actions/shared";

const Question = (props) => {
  const {
    question: { id, hasVoted },
    dispatch,
  } = props;

  useEffect(() => {
    dispatch(handleInitialData());
  }, [hasVoted, dispatch]);

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
