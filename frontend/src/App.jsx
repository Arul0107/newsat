import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppLayout from "./components/sidebar/AppLayout";

import Home from "./components/dashboard/Home";
import About from "./components/Adduser/About";
import Predict from "./components/profile/Predict";
import Contact from "./components/report/Contact";
import DetailOutput from "./components/userprev/DetailOutput";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <Router>
        <Routes>
          {/* Redirect root path to /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Nested routes inside AppLayout */}
          <Route path="/" element={<AppLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="prediction" element={<Predict />} />
            <Route path="team" element={<DetailOutput />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Catch-all for unknown routes */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
