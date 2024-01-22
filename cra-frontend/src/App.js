import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/SignUp";
import BrowseTalent from "./screens/BrowseTalent";
import ResumeBuilder from "./screens/ResumeBuilder";
import Blog from "./components/Blog";
import SpeechtoText from "./components/SpeechtoText";
import AppContext from "./AppContext";
import questionsArray from "./constants/questionsArray";
import VirtualAssistant from "./screens/VirtualAssistant";
import Dashboard from "./screens/Dashboard";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import AiCourse from "./screens/AiCourse";
import Navbar from "./components/Navbar";
import YoutubeSearch from "./components/Transcript";
import DisabilityRightsInfo from "./screens/DisabilityRightsInfo";
import Footer from "./components/Footer";
import AiVideo from "./screens/AiVideo";
import Community from "./screens/Community";
import AccessibilityMenu from "./components/AccessibilityMenu";
import VoiceButton from "./components/VoiceButton";
import ReadAloud from "./components/ReadAloud";
import { HStack, Stack } from "@chakra-ui/react";
import JobBoard from "./components/JobBoard";
import TextReader from "./components/TextReader";
import LandingTop from "./components/LandingTop";
import Feedback from "./screens/Feedback";
import EmployeeProfilePage from "./screens/EmployeeProfilePage";
import OCRComponent from "./components/UDID";

export const UserContext = createContext(null);

function App() {
  let [questions, setQuestions] = useState([]);
  let [answers, setAnswers] = useState([]);
  let [questionAnswer, setQuestionAnswer] = useState({});
  let [questionCompleted, setQuestionCompleted] = useState(false);
  let [screenReader, setScreenReader] = useState(false);

  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const db = getFirestore();
        const userDocRef = doc(db, "users", authUser.uid);

        try {
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            setUser(userDocSnapshot.data());
          } else {
            console.error("User data not found in Firestore");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    setQuestions(questionsArray);
    setQuestionAnswer(questionsArray[0]);
  }, []);

  let handleChangeInput = (e) => {
    setQuestionAnswer({
      ...questionAnswer,
      answer: e.target.value,
    });
  };

  let nextQuestion = (e) => {
    e.preventDefault();
    questions.map((question) => {
      if (question.resumeFieldId == questionAnswer.resumeFieldId) {
        setAnswers([
          ...answers,
          { ...question, answer: questionAnswer.answer },
        ]);
      }
    });

    questions.map((qa, index) => {
      if (index <= questions.length) {
        if (qa.resumeFieldId === questionAnswer.resumeFieldId) {
          setQuestionAnswer(questions[index + 1]);
        }
      } else {
        setQuestionCompleted(true);
      }
    });
  };
  return (
    <>
      <AppContext.Provider
        value={{
          state: {
            questionAnswer,
            questionCompleted,
            questions,
            answers,
          },
          function: {
            handleChangeInput: handleChangeInput,
            nextQuestion: nextQuestion,
          },
        }}
      >
        <UserContext.Provider value={{ user, setUser }}>
          <div className="App">
            <TextReader isEnabled={screenReader}>
              <Navbar />
              <HStack
                mx={1}
                gap={4}
                position="fixed"
                bottom="4"
                width={"full"}
                justifyContent={["space-between", "flex-end"]}
                zIndex={1000}
              >
                <ReadAloud value={screenReader} handleChangeInput={setScreenReader}/>
                <VoiceButton/>
                <AccessibilityMenu />
              </HStack>

              <div>
                <Routes>
                  <Route path="/" element={<RootLayout />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/browse" element={<BrowseTalent />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route
                    path="/virtualassistant"
                    element={<VirtualAssistant />}
                  />
                  <Route path="/resumebuilder" element={<ResumeBuilder />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/speech" element={<SpeechtoText />} />
                  <Route path="/aicourse" element={<AiCourse />} />
                  <Route path="/web" element={<YoutubeSearch />} />
                  <Route
                    path="/disabilityrightsinfo"
                    element={<DisabilityRightsInfo />}
                  />
                  <Route path="/aivideo" element={<AiVideo />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/jobs" element={<JobBoard />} />
                  <Route path="/landing2" element={<LandingTop />} />
                  <Route path="/feedback" element={<Feedback />} />
                  <Route path="/ocr" element={<OCRComponent/>}/>
                  <Route
                    path="/profile/:name"
                    element={<EmployeeProfilePage />}
                  />
                </Routes>
              </div>
              <Footer />
            </TextReader>
          </div>
        </UserContext.Provider>
      </AppContext.Provider>
    </>
  );
}

export default App;
