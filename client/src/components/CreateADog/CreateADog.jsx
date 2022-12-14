import React from "react";
import Navbar from "../ReusableComponents/NavBar";
import Form from "./Form";
import Footer from "../ReusableComponents/Footer";
import styled from "styled-components";

function NewDog() {
  return (
    <>
      <Navbar />
      <NewDogContainer>
        <Form />
      </NewDogContainer>
      <Footer />
    </>
  );
}

export default NewDog;

const NewDogContainer = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 574px) {
    padding: 0 15px;
  }
`;
