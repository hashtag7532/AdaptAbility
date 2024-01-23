import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  LinearProgress,
  CircularProgress,
  Typography,
  Box,
} from "@material-ui/core";
import Question from "./Question";
import AppContext from "../AppContext";
import Resume from "./Resume";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "30vh",
  },
  progressBar: {
    margin: "1rem",
  },
  question: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "30vh",
  },
  question: {},
}));

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        {/* <LinearProgress variant="determinate" {...props} /> */}
        <CircularProgress variant="determinate" size={150} {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function Questions({ setImage }) {
  const classes = useStyles();

  const [progress, setProgress] = React.useState(0);

  const value = useContext(AppContext);
  let { questionAnswer, questions, answers } = value.state;
  console.log(answers.length, questions.length);

  useEffect(() => {
    setProgress(
      (answers.length / questions.length) * 100
        ? (answers.length / questions.length) * 100
        : 0
    );
  }, [answers]);

  useEffect(() => {
    if (progress == 100) {
      setImage(false);
    }
  }, [progress]);

  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {questions.length !== answers.length ? (
        <LinearProgressWithLabel
          value={progress}
          className={classes.progressBar}
        />
      ) : null}
      <div>
        <div className={classes.root}>
          {questions.length === answers.length ? (
            <Resume />
          ) : (
            <div className={classes.question}>
              <Question question={questionAnswer.question} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Questions;
