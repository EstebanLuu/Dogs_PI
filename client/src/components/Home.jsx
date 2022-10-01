import styled from "styled-components";
import React from "react";
import NavBar from "./NavBar";
import Grid from "./Grid";

function Home({ image, name, temperament, weight_min, weight_max }) {
  return (
    <HomeContainer>
      <NavBar />
      <Grid  />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div``;
