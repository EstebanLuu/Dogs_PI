import React from "react";
import img from "../../assets/error404img.jpeg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <ErrorContainer>
      <h2>La pagina que buscas no se ha encontrado</h2>
      <Link className="link" to="/home">
        <div className="error404img-container">
          <img className="error404img" src={img} alt="" />
        </div>
      </Link>
      <p>
        Toca La imagen la imagen para regresar a
        <Link className="link" to="/home">
          <span className="title"> Page Dogs</span>
        </Link>
      </p>
    </ErrorContainer>
  );
};

export default Error;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  .error404img-container {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .error404img {
    width: 100%;
    text-align: center;
  }
`;
