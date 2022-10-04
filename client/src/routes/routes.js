import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../components/Landing/LandingPage";
import Home from "../components/Home/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/landing" element={<Navigate to={"/"} />} />
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  );
};

export default Routers;
