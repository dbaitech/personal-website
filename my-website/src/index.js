import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" component={Homepage} />
        <Route path="/projects" component={Homepage} />
        <Route path="/music" component={Homepage} />
      </Routes>
    </Router>
    <App />
  </React.StrictMode>
);
