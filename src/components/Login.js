import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { login } from "../actions/authedUser";

import {
  Avatar,
  CssBaseline,
  Typography,
  Container,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Login({ dispatch, userIds, users }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    dispatch(login(authUser));
  }, [authUser, dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();
    setAuthUser(e.target.value);
  };
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h5" variant="h5">
          Sign in
        </Typography>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">User</InputLabel>
          <Select
            labelId="user-name-label"
            id="userName"
            value={authUser}
            onChange={handleLogin}
            label="Login"
          >
            <MenuItem value={null}>
              <em>None</em>
            </MenuItem>
            {userIds.map((id) => (
              <MenuItem key={id} value={id}>
                {users[id].name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Container>
  );
}

const mapStateToProps = ({ users }) => {
  return {
    userIds: Object.keys(users).sort(),
    users,
  };
};

export default connect(mapStateToProps)(Login);
