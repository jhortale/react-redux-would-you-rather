import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";

import { handleInitialData } from "../actions/shared";

import Home from "./Home";
import Login from "./Login";
import styled from "styled-components";
// import Container from "@material-ui/core/Container";

const App = ({ dispatch, isAuthenticated }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  });
  return <Fragment>{isAuthenticated ? <Login /> : <Home />}</Fragment>;
};

// const Container = styled.div`
//   display: flex;
//   background-color: rgba(34, 40, 49, 1);
//   flex-direction: row;
//   justify-content: center;
//   height: 100vh;
//   width: 100vw;
// `;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(34, 40, 49, 1);
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 100vh;
`;

const mapStateToProps = ({ authedUser }) => {
  return {
    isAuthenticated: authedUser === null,
  };
};

export default connect(mapStateToProps)(App);
