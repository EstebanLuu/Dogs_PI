import styled from "styled-components";
import React, { useState } from "react";
import NavBar from "./NavBar";
import Grid from "./Grid";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;

  return (
    <HomeContainer>
      <NavBar />
      <Grid
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        dogsPerPage={dogsPerPage}
        indexOfFirstDog={indexOfFirstDog}
        indexOfLastDog={indexOfLastDog}
      />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div``;
