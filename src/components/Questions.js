import React from "react";
import { connect } from "react-redux";

const Questions = () => {
  return <div></div>;
};
const mapStateToProps = ({ questions }) => {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
};
export default connect(mapStateToProps)(Questions);
