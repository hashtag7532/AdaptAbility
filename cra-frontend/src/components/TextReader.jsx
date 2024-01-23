import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

const TextReader = ({  isEnabled = true,children }) => {
  const [selectedText, setSelectedText] = useState("");

  const handleSelection = () => {
    const selection = window.getSelection();
    const text = selection.toString().trim();
    setSelectedText(text);

    if (text) {
      // Cancel ongoing speech
      window.speechSynthesis.cancel();

      // Use the SpeechSynthesis API to read the selected text
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleWordFocus = (e) => {
    const text = e.target.innerText.trim();
    setSelectedText(text);

    if (text) {
      // Cancel ongoing speech
      window.speechSynthesis.cancel();

      // Use the SpeechSynthesis API to read the focused word
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleKeyboardNavigation = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      // Get the text content of the currently focused element
      const text = document.activeElement.innerText.trim();
      setSelectedText(text);

      if (text) {
        // Cancel ongoing speech
        window.speechSynthesis.cancel();

        // Use the SpeechSynthesis API to read the focused word
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  return (
    <Box
      onMouseUp={isEnabled ? handleSelection : null}
      onClick={isEnabled ? handleWordFocus : null}
      onKeyDown={isEnabled ? handleKeyboardNavigation : null}
      tabIndex="0" // Make the component focusable
      style={{ cursor: "pointer" }}
    >
      {children}
      {/* <Box>Selected Text:{selectedText}</Box> */}
    </Box>
  );
};

export default TextReader;
