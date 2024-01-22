import logo from './logo.svg';
import './App.css';
import RootLayout from './layouts/RootLayout';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />} />
    </Routes>
  );
}

export default App;