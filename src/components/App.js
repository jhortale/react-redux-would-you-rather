import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";

import { handleInitialData } from "../actions/shared";

import Dashboard from "./Dashboard";
import Login from "./Login";

const App = ({ dispatch, loading, questions }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [loading, questions]);
  return <Fragment>{loading ? <Login /> : <Dashboard />}</Fragment>;
};

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  };
};

export default connect(mapStateToProps)(App);
