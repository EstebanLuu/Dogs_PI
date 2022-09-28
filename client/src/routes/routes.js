import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Dogs from "../components/Dogs";

const Routers = () => {
  return (
    <Routes>
      <Route path="/landing" element={<Navigate to={"/"} />} />
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/home" element={<Dogs />} />
    </Routes>
  );
};

export default Routers;
