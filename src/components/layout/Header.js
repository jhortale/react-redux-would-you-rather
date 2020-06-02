import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { logout } from "../../actions/authedUser";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const Header = ({ sections, title, dispatch, name }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="body2"
          color="inherit"
          className={classes.toolbarLink}
        >
          Welcome, {name}
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <Button onClick={handleLogout} variant="outlined" size="small">
          Logout
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            key={section.title}
            variant="body2"
            to={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </Fragment>
  );
};

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

const mapStateToProps = ({ users, authedUser }) => {
  return {
    name: users[authedUser].name,
  };
};

export default connect(mapStateToProps)(Header);
