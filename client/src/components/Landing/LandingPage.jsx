import React from "react";
import styled from "styled-components";
import perrosalchicha from "../../assets/perroLabrador.jpg";
import { Link } from "react-router-dom";
import Footer from "../ReusableComponents/Footer";

const LandingPage = () => {
  return (
    <>
      <LandingContainer>
        <Link className="link" to="/home">
          <h1 className="title">Page Dogs</h1>
        </Link>
        <div className="landing-img-containter">
          <img className="landing-img" src={perrosalchicha} alt="" />
        </div>
        <div className="landing__text">
          <h2 className="landing__text__title">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </h2>
          <p className="landing__text__p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, ipsa
            nihil temporibus qui soluta est. Tenetur aliquid optio doloremque
            adipisci, mollitia iusto quis possimus fugit sed neque repellendus
            necessitatibus! Aspernatur?
          </p>
        </div>
        <Link to="/home">
          <button className="button__model1">Acceder</button>
        </Link>
        <div className="landing__carrousel">
          <Link className="link" to="/home">
            <div className="landing__carrousel__card">
              Conoce tu perro favorito
            </div>
          </Link>
          <Link className="link" to="/home">
            <div className="landing__carrousel__card">Filtra razas</div>
          </Link>
          <Link className="link" to="/home">
            <div className="landing__carrousel__card">
              Agrega un nuevo perro
            </div>
          </Link>
          <Link className="link" to="/home">
            <div className="landing__carrousel__card">
              Conoce datos curiosos
            </div>
          </Link>

          <Link className="link" to="/home">
            <div className="landing__carrousel__card">
              Levalos a todas partes
            </div>
          </Link>
          <Link className="link" to="/home">
            <div className="landing__carrousel__card">Dogs responsive</div>
          </Link>
        </div>
      </LandingContainer>
      <Footer />
    </>
  );
};

export default LandingPage;

const LandingContainer = styled.div`
  margin: 20px var(--marginLR);

  .landing-img {
    position: absolute;
    right: 150px;
    top: 0;
    margin-bottom: 20px;
    height: 300px;
    border-radius: 0 0 5px 300px;
  }

  .landing__text {
    width: 40%;
    margin-bottom: var(--marginB-big);
  }

  .landing__text__title {
    font-size: var(--title);
    margin-bottom: var(--marginB-standard);
  }

  .landing__text__p {
    font-size: var(--p);
  }

  .button__model1 {
    margin-bottom: var(--marginB-Mbig);
  }
  .landing__carrousel {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  .landing__carrousel__card {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 150px;
    width: 150px;
    margin: 10px 7px;
    border: var(--border-color);
    color: var(--black-color);
    box-shadow: rgba(78, 158, 172, 0.541) 0px 8px 24px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      box-shadow: rgba(78, 158, 172, 0.7) 5px 16px 40px;
    }
  }

  @media (max-width: 1206px) {
    .landing-img {
      right: var(--marginLR);
    }
  }

  @media (max-width: 768px) {
    text-align: center;

    .landing-img-containter {
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    .landing-img {
      position: initial;
      width: 100%;
      height: auto;
      border-radius: 20px;
    }
    .landing__text {
      width: 100%;
    }
  }
`;
