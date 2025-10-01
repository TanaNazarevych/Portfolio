
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Playbook from "./pages/Playbook";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/playbook" element={<Playbook />} />
  <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
