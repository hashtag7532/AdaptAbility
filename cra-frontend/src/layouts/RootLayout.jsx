import React from "react";
// import VoiceButton from "../components/VoiceButton";
// import SpeechSynthesizer from "../components/SpeechSynthesizer";
// import CustomCursor from "../components/CustomCursor";

import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";


import LandingTop from "../components/LandingTop";
export default function RootLayout() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
      <LandingTop />
      {/* <Carousel/>
      <FeatureList/> */}
      {/* <SpeechSynthesizer/> */}
      <div className="App">
      {/* <CustomCursor /> */}
      <div className="container">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
        </div>
      </div>
    </div>

    </>
  );
}
