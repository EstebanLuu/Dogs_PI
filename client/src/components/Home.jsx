import styled from "styled-components";
import React from "react";
import NavBar from "./NavBar";

function Home() {
  return (
    <HomeContainer>
      <NavBar />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div``;
