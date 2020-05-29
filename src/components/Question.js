// import React, { Fragment } from "react";
// import { connect } from "react-redux";
// import { StylesProvider } from "@material-ui/core/styles";
// import styled from "styled-components";
// import Button from "@material-ui/core/Button";

// // Unanswered
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";

// import { formatQuestion } from "../utils/helpers";

// const Question = ({
//   question: {
//     id,
//     avatar,
//     name,
//     optionOneText,
//     optionOneVotes,
//     optionTwoText,
//     optionTwoVotes,
//     hasVoted,
//   },
// }) => {
//   const totalVotes = optionOneVotes.length + optionTwoVotes.length;
//   const percentage = (num, total) => {
//     return (num / total) * 100;
//   };
//   return (
//     <StylesProvider>
//       <div>
//         <h4>{name} Asks:</h4>
//       </div>
//       <div>
//         <div id="row">
//           <img src={`../assets/images/${avatar}`} />
//           <div>|</div>
//           <div>
//             {hasVoted ? (
//               <Fragment>
//                 <h3>Results</h3>
//                 <div>
//                   <p>Would you rather {optionOneText}</p>
//                   <p>
//                     Progress Bar:{" "}
//                     {percentage(optionOneVotes.length, totalVotes)}%
//                   </p>
//                   <p>{`${optionOneVotes.length} out of ${totalVotes}`}</p>
//                 </div>
//                 <div>
//                   <p>Would you rather{optionTwoText}</p>
//                   <p>
//                     Progress Bar:{" "}
//                     {percentage(optionTwoVotes.length, totalVotes)}%
//                   </p>
//                   <p>{`${optionTwoVotes.length} out of ${totalVotes}`}</p>
//                 </div>
//               </Fragment>
//             ) : (
//               <Fragment>
//                 <h3>Would You Rather...</h3>

//                 <p>
//                   <input value="optionOne" type="radio" />
//                   <span>{optionOneText}</span>
//                 </p>
//                 <p>
//                   <input type="radio" />
//                   <span>{optionTwoText}</span>
//                 </p>
//                 <SubmitButton>Submit</SubmitButton>
//               </Fragment>
//             )}
//           </div>
//         </div>
//       </div>
//     </StylesProvider>
//   );
// };

// const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
//   const question = questions[id];
//   console.log("MapStaTe: ", question);
//   return {
//     question: formatQuestion(question, users[question.author], authedUser),
//   };
// };

// export default connect(mapStateToProps)(Question);

import React, { Fragment } from "react";
import { connect } from "react-redux";
import Answered from "./Answered";
import Unanswered from "./Unanswered";

import { formatQuestion } from "../utils/helpers";

const Question = (props) => {
  const {
    question: { id, hasVoted },
  } = props;

  return <Fragment>{hasVoted ? <Answered id={id} /> : null}</Fragment>;
};

const mapStateToProps = ({ authedUser, users, questions }, props) => {
  const { id } = props.match.params;
  const question = questions[id];
  console.log("MapStaTe: ", question);
  return {
    question: formatQuestion(question, users[question.author], authedUser),
  };
};

export default connect(mapStateToProps)(Question);
