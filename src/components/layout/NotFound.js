import React from "react";
import { useHistory } from "react-router-dom";

import {
  Avatar,
  Button,
  CssBaseline,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BlockIcon from "@material-ui/icons/Block";

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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function NotFound() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <BlockIcon />
        </Avatar>
        <Typography component="h5" variant="h5">
          Page Not Found
        </Typography>
        <Typography component="p" variant="p">
          Sorry, this page does not exist
        </Typography>
        <Button className={classes.submit} onClick={() => history.push("/")}>
          Back to Login
        </Button>
      </div>
    </Container>
  );
}
export default NotFound;
