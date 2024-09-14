import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import Profile from "./Pages/profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   {/* Home Page */}
        <Route path="/profile" element={<Profile />} />  {/* Profile Page */}
      </Routes>
    </Router>
  );
}

export default App;
