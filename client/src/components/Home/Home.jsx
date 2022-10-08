import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import NavBar from "../ReusableComponents/NavBar";
import Grid from "./Grid";
import Footer from "../ReusableComponents/Footer";
import Filtros from "./Filtros/Filtros";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;

  return (
    <>
      <HomeContainer>
        <NavBar />
        <Filtros currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <Grid
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          dogsPerPage={dogsPerPage}
          indexOfFirstDog={indexOfFirstDog}
          indexOfLastDog={indexOfLastDog}
        />
        <Footer />
      </HomeContainer>
    </>
  );
}

export default Home;

const HomeContainer = styled.div``;
