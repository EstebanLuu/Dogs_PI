import React from "react";
import styled from "styled-components";
import perrosalchicha from "../assets/perroSalchicha.jpg";

const LandingPage = () => {
  return (
    <LandingContainer>
      <h1 className="title">Page Dogs</h1>
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
      <button className="button__model1">Acceder</button>
      <div className="landing__carrousel">
        <div className="landing__carrousel__card">Conoce tu perro favorito</div>
        <div className="landing__carrousel__card">Filtra razas</div>
        <div className="landing__carrousel__card">Agrega un nuevo perro</div>
        <div className="landing__carrousel__card">Todas las razas</div>
        <div className="landing__carrousel__card">Levalos a todas partes</div>
        <div className="landing__carrousel__card">Dogs responsive</div>
      </div>
    </LandingContainer>
  );
};

export default LandingPage;

const LandingContainer = styled.div`
  margin: 20px var(--marginLR);

  .landing-img {
    position: absolute;
    right: 150px;
    top: 0;
    height: 400px;
    border-radius: 0 0 200px 200px;
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
    margin: 0 7px;
    color: var(--main-color);
    box-shadow: rgba(75, 58, 255, 0.2) 0px 8px 24px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      box-shadow: rgba(75, 58, 255, 0.2) 5px 16px 40px;
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
      width: 70%;
      height: auto;
      border-radius: 20px;
    }
    .landing__text {
      width: 100%;
    }
  }
  @media screen and (max-width: 576px) {
    .landing-img {
      position: initial;
      width: 90%;
      height: auto;
      border-radius: 20px;
    }
  }
`;
