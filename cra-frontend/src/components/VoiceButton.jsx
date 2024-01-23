import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Button,
  Text,
  ModalFooter,
  Icon,
  SimpleGrid,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {
  FaMicrophoneAlt,
  FaMicrophoneSlash,
  FaMicrophone,
} from "react-icons/fa";
import { Card, Flex } from "antd";

const LanguageButtons = () => {
  const languages = [
    { name: "Hindi", code: "hi" },
    { name: "Tamil", code: "ta" },
    { name: "Telugu", code: "te" },
    { name: "Bengali", code: "bn" },
    // Add more languages as needed
  ];

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={4} width="full">
      {languages.map((language) => (
        <Button
          key={language.code}
          width="full"
          colorScheme="teal"
          size={"lg"}
          onFocus={() =>
            SpeechRecognition.startListening({ language: language.code })
          }
        >
          <Text fontSize="lg">{language.name}</Text>
        </Button>
      ))}
    </SimpleGrid>
  );
};

const VoiceButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isListening, setIsListening] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [currentLink, setCurrentLink] = useState("");
  const [status, setStatus] = useState("Not Listening");
  const [said, setSaid] = useState(0);
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const navigate = useNavigate();

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    setIsListening(true);
    setStatus("Listening...");
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
    setStatus("");
  };

  const handleConfirmation = (confirmed) => {
    setConfirmation(confirmed);

    if (confirmed && currentLink != "") {
      navigate(`/${currentLink}`);
      const initialSpeech = "Navigation to " + currentLink + "Completed";
      const initialUtterance = new SpeechSynthesisUtterance(initialSpeech);
      window.speechSynthesis.speak(initialUtterance);
    }
    setConfirmation(false);
    setCurrentLink("");
    setSaid(0);
  };

  useEffect(() => {
    let parsingText = transcript.toLowerCase();
    // remove punctuation
    parsingText = parsingText.replace(/[^\w\s]/gi, "");
    console.log(transcript, parsingText);
    if (parsingText.includes("dashboard") && !confirmation) {
      setCurrentLink("dashboard");
      stopListening();
    } else if (parsingText.includes("job") && !confirmation) {
      setCurrentLink("jobs");
      stopListening();
    } else if (parsingText.includes("home") && !confirmation) {
      setCurrentLink("");
      stopListening();
    } else if (
      parsingText.includes("" || parsingText.includes("employee")) &&
      !confirmation
    ) {
      setCurrentLink("profile/:name");
      stopListening();
    } else if (parsingText.includes("virtual assistant") && !confirmation) {
      setCurrentLink("virtualassistant");
    } else if (parsingText.includes("ai course") && !confirmation) {
      setCurrentLink("aicourse");
      stopListening();
    } else if (parsingText.includes("resume") && !confirmation) {
      setCurrentLink("resumebuilder");
      stopListening();
    } else if (parsingText.includes("blog") && !confirmation) {
      setCurrentLink("blog");
      stopListening();
    } else if (parsingText.includes("speech") && !confirmation) {
      setCurrentLink("speech");
      stopListening();
    } else if (parsingText.includes("web") && !confirmation) {
      setCurrentLink("web");
      stopListening();
    } else if (parsingText.includes("rights") && !confirmation) {
      setCurrentLink("disabilityrightsinfo");
      stopListening();
    } else if (parsingText.includes("video") && !confirmation) {
      setCurrentLink("aivideo");
      stopListening();
    } else if (parsingText.includes("ocr") && !confirmation) {
      setCurrentLink("ocr");
      stopListening();
    } else if (parsingText.includes("community") && !confirmation) {
      setCurrentLink("community");
      stopListening();
    } else if (parsingText.includes("feedback") && !confirmation) {
      setCurrentLink("feedback");
      stopListening();
    } else if (parsingText.includes("browse") && !confirmation) {
      setCurrentLink("browse");
      stopListening();
    } else if (parsingText.includes("community") && !confirmation) {
      setCurrentLink("community");
      stopListening();
    } else if (parsingText.includes("feedback") && !confirmation) {
      setCurrentLink("feedback");
      stopListening();
    } else if (
      (parsingText.includes("yes") || parsingText.includes("yeah")) &&
      !confirmation
    ) {
      handleConfirmation(true);
      stopListening();
    } else if (
      (parsingText.includes("no") || parsingText.includes("nah")) &&
      !confirmation
    ) {
      handleConfirmation(false);
      stopListening();
    }

    if (currentLink != "" && !said) {
      const initialSpeech =
        "Do you want to navigate to " + currentLink + "? Please say yes or no.";
      const initialUtterance = new SpeechSynthesisUtterance(initialSpeech);

      initialUtterance.onend = () => {
        setSaid(1);
        // Speech synthesis has ended, set isListening to true
        startListening();
        // setIsListening(true);
      };

      window.speechSynthesis.speak(initialUtterance);
    }
  }, [transcript, confirmation]);

  if (!browserSupportsSpeechRecognition) {
    setStatus("Your browser does not support speech recognition.");
  }
  return (
    <Box color={"teal.800"} aria-label="Voice Assistant">
      <IconButton
        width="full"
        icon={<FaMicrophone />}
        aria-label="Voice Button"
        onClick={() => {
          const initialSpeech = "Voice Assistant How may I help you today?";
          const initialUtterance = new SpeechSynthesisUtterance(initialSpeech);
          window.speechSynthesis.speak(initialUtterance);

          onOpen();
          startListening();
        }}
        size="lg"
        colorScheme="teal"
        aria-labelledby="voice-assistant"
      />

      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Voice Assistant</DrawerHeader>
          <DrawerBody>
            {/* Your content here */}
            <LanguageButtons />
            <Card>
              <Flex direction="column" align="center" justify="center">
                <Text>{status}</Text>

                <Text size={"3xl"} mt={4}>
                  {transcript}
                </Text>
              </Flex>
            </Card>
          </DrawerBody>
          <ModalFooter>
            {isListening ? (
              <Button
                colorScheme="red"
                aria-label="Stop Listening"
                leftIcon={<Icon as={FaMicrophoneSlash} />}
                width={"full"}
                onClick={stopListening}
              >
                Stop Listening
              </Button>
            ) : (
              <Button
                style={{ backgroundColor: "#2234da", color: "white" }}
                aria-label="Start Listening"
                leftIcon={<Icon as={FaMicrophoneAlt} />}
                width={"full"}
                onClick={startListening}
              >
                Start Listening
              </Button>
            )}
          </ModalFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default VoiceButton;
