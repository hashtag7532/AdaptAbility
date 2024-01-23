import React, { createRef, useContext } from "react";
import generatePDF from "react-to-pdf";
import AppContext from "../AppContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonBuildNew: {
    cursor: "pointer",
    minWidth: "7rem",
    textAlign: "center",
    border: "none",
    padding: "1rem",
    borderRadius: "1rem",
    fontWeight: 625,
    boxShadow: "0 1px 1px 0 rgb(0 0 0 / 20%), 0 1px 2px 0 rgb(0 0 0 / 19%)",
    transition: "1s",
    "&:hover": {
      background: "#d6d6d6",
    },
  },
  buttonDownload: {
    cursor: "pointer",
    minWidth: "7rem",
    textAlign: "center",
    border: "none",
    padding: "1rem",
    borderRadius: "1rem",
    fontWeight: 625,
    boxShadow: "0 1px 1px 0 rgb(0 0 0 / 20%), 0 1px 2px 0 rgb(0 0 0 / 19%)",
    background: "#ff5045",
    color: "white",
    // "&:hover": {
    //   background: "#548854",
    // },
  },
  resume: {
    padding: "3rem",
    boxShadow: "0 0.5rem 1rem 0 rgb(0 0 0 / 10%)",
    marginBottom: "1rem",
    margin: "1rem",
    marginTop: "3rem",
  },
}));

let refreshPage = () => {
  window.location.reload();
};

function Resume() {
  const ref = createRef();
  const value = useContext(AppContext);
  const classes = useStyles();

  let { answers } = value.state;

  return (
    <div>
      <div ref={ref} className={classes.resume}>
        {answers.map((answer) => {
          return (
            <div style={{}} key={answer.resumeFieldId}>
              {answer.resumeFieldId === "name" ||
              answer.resumeFieldId === "email" ||
              answer.resumeFieldId === "address" ||
              answer.resumeFieldId === "phoneNumber" ? (
                <div
                  style={{
                    textAlign: "right",
                    backgroundColor: "#f3f4f6",
                  }}
                  key={answer.resumeFieldId}
                >
                  <label>{answer.answer}</label>
                </div>
              ) : (
                <div
                  style={{
                    textAlign: "left",
                  }}
                  key={answer.resumeFieldId}
                >
                  <h2
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 600,
                      padding: "10px 0",
                    }}
                  >
                    {answer.resumeField}
                  </h2>
                  <p>{answer.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button className={classes.buttonBuildNew} onClick={refreshPage}>
          Build New
        </button>
        <button
          className={classes.buttonDownload}
          onClick={() => generatePDF(ref, { filename: "page.pdf" })}
        >
          Download PDF
        </button>
        {/* <Pdf targetRef={ref} filename="code-example.pdf">
          {async ({ toPdf }) => (
            <button onClick={handleDownload} className={classes.buttonDownload}>
              Download Resume
            </button>
          )}
        </Pdf> */}
      </div>
    </div>
  );
}

export default Resume;
