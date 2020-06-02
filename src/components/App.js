import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { handleInitialData } from "../actions/shared";

import Dashboard from "./Dashboard";
import Login from "./Login";

const App = ({ dispatch, loading, questions }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [loading, dispatch, questions]);
  return (
    <Fragment>
      <LoadingBar />
      {loading ? <Login /> : <Dashboard />}
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  };
};

export default connect(mapStateToProps)(App);
