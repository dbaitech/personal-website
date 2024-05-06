import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="/personal-website" element={<Home />} />
          <Route path="/personal-website/about" element={<About />} />
          <Route path="/personal-website/projects" element={<Projects />} />
          <Route path="/personal-website/resume" element={<Resume />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
