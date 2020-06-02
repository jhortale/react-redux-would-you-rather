import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      ...question,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

export function questionAnswer({ qid, answer, authedUser }) {
  return {
    type: ANSWER_QUESTION,
    qid,
    answer,
    authedUser,
  };
}

export function handleQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(questionAnswer(info));
    return saveQuestionAnswer(info).catch((e) => {
      console.warn("Error in saveQuestionAnswer: ", e);
      dispatch(questionAnswer(info));
      alert("There was an error liking the tweet. Try again.");
    });
  };
}
