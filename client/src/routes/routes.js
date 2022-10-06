import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../components/Landing/LandingPage";
import Home from "../components/Home/Home";
import DogDetail from "../components/DogDetail/DogDetail.jsx";
import CreateADog from "../components/CreateADog/CreateADog";

const Routers = () => {
  return (
    <Routes>
      <Route path="/landing" element={<Navigate to={"/"} />} />
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/home/:id" element={<DogDetail />} />
      <Route exact path="/create-dog" element={<CreateADog />} />
    </Routes>
  );
};

export default Routers;
