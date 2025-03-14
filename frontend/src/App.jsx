import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppLayout from "./components/sidebar/AppLayout";


import Home from "./components/dashboard/Home";
import About from "./components/Adduser/About";
import Predict from "./components/profile/Predict";
import Team from "./components/userprev/Team";
import Contact from "./components/report/Contact";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <Router>
        <Routes>
          {/* Default route redirecting to the dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" />} />

          <Route path="/*" element={
            <AppLayout>
              
              <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/prediction" element={<Predict />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AppLayout>
          } />
        </Routes> 
      </Router>
    </div>
  );
};

export default App;
