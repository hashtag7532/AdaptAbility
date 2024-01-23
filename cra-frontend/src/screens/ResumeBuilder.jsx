import React, { useState } from "react";

import Questions from "../components/Questions";
import { Typography } from "@material-ui/core";

function ResumeBiulder() {
  const [Image, setImage] = useState(true);
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        {Image && (
          <img
            src="https://www.livecareer.com/lcapp/uploads/2023/11/resume-builder-banner.png"
            alt=""
            style={{
              flex: 1,
              height: "85vh",
              width: "fit-content",
              maxWidth: "55%",
              paddingLeft: "1rem",
              paddingRight: "1.5rem",
            }}
          />
        )}
        <div
          style={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            style={{
              textAlign: "center",
              margin: "2rem",
              fontWeight: 700,
              fontSize: "2rem",
            }}
          >
            Resume Builder
          </Typography>
          <Questions setImage={setImage} />
        </div>
      </div>
    </div>
  );
}

export default ResumeBiulder;
