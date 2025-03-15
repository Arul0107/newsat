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
          {/* Redirect "/" to "/home" instead of itself */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Use AppLayout as a wrapper for all other pages */}
          <Route path="/*" element={<AppLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="prediction" element={<Predict />} />
            <Route path="team" element={<DetailOutput />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Catch-all route for 404 pages (optional) */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
