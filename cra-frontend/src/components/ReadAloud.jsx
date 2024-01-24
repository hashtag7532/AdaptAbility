// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   IconButton,
// } from "@chakra-ui/react";

// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// import {
//   FaMicrophoneAlt,
//   FaMicrophoneSlash,
//   FaMicrophone,
// } from "react-icons/fa";
// import { Speaker } from "@material-ui/icons";
// import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

// const ReadAloud = ({ value, handleChangeInput }) => {
//   const { browserSupportsSpeechRecognition } = useSpeechRecognition();

//   return (
//     <Box color={value ? "red.800" : "teal.800"} aria-label="Read Aloud">
//       <IconButton
//         icon={value ? <HiSpeakerXMark /> : <HiSpeakerWave />}
//         aria-label="Read Aloud"
//         colorScheme={value ? "red" : "teal"}
//         onClick={() => {
//           try {
//             const initialSpeech = value
//               ? "Read Aloud Stopped"
//               : "Read Aloud Started";
//             const initialUtterance = new SpeechSynthesisUtterance(initialSpeech);
//             window.speechSynthesis.speak(initialUtterance);
//             handleChangeInput(!value);
//           } catch (error) {
//             console.error("Error during speech synthesis:", error);
//             // Handle the error as needed, e.g., show an error message to the user.
//           }
//         }}
//         size="lg"
//         aria-labelledby="voice-assistant"
//       />
//     </Box>
//   );
// };

// export default ReadAloud;

import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { FaPlay, FaPause, FaMicrophoneSlash, FaMicrophone } from "react-icons/fa";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

const ReadAloud = ({ value, handleChangeInput }) => {
  const [isPaused, setIsPaused] = useState(false);

  const toggleReadAloud = () => {
    try {
      const initialSpeech = value ? "Read Aloud Stopped" : "Read Aloud Started";
      const initialUtterance = new SpeechSynthesisUtterance(initialSpeech);
      window.speechSynthesis.speak(initialUtterance);
      handleChangeInput(!value);
    } catch (error) {
      console.error("Error during speech synthesis:", error);
      // Handle the error as needed, e.g., show an error message to the user.
    }
  };

  const togglePause = () => {
    if (window.speechSynthesis.speaking) {
      if (isPaused) {
        window.speechSynthesis.resume();
      } else {
        window.speechSynthesis.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  const hideButton = !value || !window.speechSynthesis || !window.speechSynthesis.speaking;

  return (
    <Box color={value ? "red.800" : "teal.800"} aria-label="Read Aloud">
      <IconButton
        icon={value ? <HiSpeakerXMark /> : <HiSpeakerWave />}
        aria-label="Read Aloud"
        colorScheme={value ? "red" : "teal"}
        onClick={toggleReadAloud}
        size="lg"
        aria-labelledby="voice-assistant"
      />
      {!hideButton && (
        <IconButton
          icon={isPaused ? <FaPlay /> : <FaPause />}
          aria-label={isPaused ? "Resume" : "Pause"}
          colorScheme="teal"
          onClick={togglePause}
          size="lg"
        />
      )}
    </Box>
  );
};

export default ReadAloud;