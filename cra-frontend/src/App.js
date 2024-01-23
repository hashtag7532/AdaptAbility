import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import AiCourse from "./screens/AiCourse";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AiVideo from "./screens/AiVideo";
import { HStack, Stack } from "@chakra-ui/react";
import LandingTop from "./components/LandingTop";
import AppContext from "./AppContext";

export const UserContext = createContext(null);

function App() {
  return (
    <>
      <AppContext.Provider>
          <div className="App">
              <Navbar />

              <div>
                <Routes>
                  <Route path="/" element={<RootLayout />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  {/* <Route path="/resumebuilder" element={<ResumeBuilder />} /> */}
                  <Route path="/aicourse" element={<AiCourse />} />
                  <Route path="/aivideo" element={<AiVideo />} />
                  <Route path="/landing2" element={<LandingTop />} />
                </Routes>
              </div>
              <Footer />
          </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
