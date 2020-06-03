import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Answered from "./Answered";
import Unanswered from "./Unanswered";
import { formatQuestion } from "../../utils/helpers";
import { handleInitialData } from "../../actions/shared";
import NotFound from "../layout/NotFound";

const Question = (props) => {
  const {
    question: { hasVoted },
    id,
    dispatch,
    isWrongID,
  } = props;

  useEffect(() => {
    dispatch(handleInitialData());
  }, [hasVoted, dispatch]);

  if (isWrongID) return <NotFound />;

  return (
    <Fragment>
      {hasVoted ? <Answered id={id} /> : <Unanswered id={id} />}
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, props) => {
  const { id } = props.match.params;
  const question = questions[id];
  const isWrongID = question === undefined;
  console.log(isWrongID);
  return {
    question:
      question === undefined
        ? { hasVoted: "" }
        : formatQuestion(question, users[question.author], authedUser),
    id,
    isWrongID,
  };
};

export default connect(mapStateToProps)(Question);
