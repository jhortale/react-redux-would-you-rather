import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import QuestionCard from "./QuestionCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

const FullWidthTabs = ({ votedIds, unvotedIds }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Unanswered Question" {...a11yProps(0)} />
          <Tab label="Answered Question" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {unvotedIds.map((id) => (
            <QuestionCard key={id} id={id} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {votedIds.map((id) => (
            <QuestionCard key={id} id={id} />
          ))}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

const mapStateToProps = ({ questions, users, authedUser }) => {
  const user = users[authedUser];
  const votedIds = Object.keys(user.answers);
  const questionIds = Object.keys(questions);
  const unvotedIds = questionIds.filter((q) => !votedIds.includes(q));

  return {
    votedIds: votedIds.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    unvotedIds: unvotedIds.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
};

export default connect(mapStateToProps)(FullWidthTabs);
