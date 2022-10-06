import React, { useState } from "react";
import styled from "styled-components";
import Img from "../../assets/imagenDefault.jpg";
import Curiosities from "../Curiosities/Curiosities";

function DogCard({ dog }) {
  const [curiosidad, setCuriosidad] = useState("");

  const datoCurioso = () => {
    const resultado = Math.floor(Math.random() * Curiosities.length);
    return Curiosities[resultado]["value"];
  };

  const handleClick = () => {
    setCuriosidad(datoCurioso());
  };

  return (
    <DogCardContainer>
      <div className="deco-container">
        <h1 className="deco-1">Canine Details</h1>
        <h1 className="deco-2">.</h1>
        <h1 className="deco-3">🐕</h1>
      </div>
      <div className="dog__detail__container">
        <div className="dog__detail__header">
          <div className="dog__detail__name">
            <h4 className="dog__detail__razaCR">Raza: </h4>
            <h4 className="dog__detail__razaCN">Affenpinscher</h4>
          </div>
          <div className="dog__detail__img-container">
            <img className="dog__detail__img" src={Img} alt="" />
          </div>
        </div>
        <h4 className="dog__detail__stats">Check my stats</h4>
        <div className="dog__detail__characteristics">
          <div className="dog__detail__item">
            <div className="item-detail detail-title">Caracteristicas</div>
            <div className="item-detail">MIN</div>
            <div className="item-detail">MAX</div>
          </div>

          <div className="dog__detail__item">
            <div className="item-detail detail-title">ALTURA</div>
            <div className="item-detail">40 Cm</div>
            <div className="item-detail">20 cm</div>
          </div>

          <div className="dog__detail__item">
            <div className="item-detail detail-title">PESO</div>
            <div className="item-detail">5 KG</div>
            <div className="item-detail">10 kg</div>
          </div>

          <div className="dog__detail__item">
            <div className="item-detail detail-title">AÑOS DE VIDA</div>
            <div className="item-detail">11 AÑOS</div>
            <div className="item-detail">17 AÑOS</div>
          </div>

          <div className="dog__detail__item">
            <div className="item-detail-dif-1">TEMPERAMENTO</div>
            <div className="item-detail-dif-2">
              Wild, Hardworking, Dutiful Wild, Hardworking, DutifulWild,
              Hardworking, Dutiful{" "}
            </div>
          </div>
        </div>
      </div>
    </DogCardContainer>
  );
}

export default DogCard;

const DogCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  .dog__detail__container {
    border-radius: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: var(--border-color);
  }

  .dog__detail__header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 180px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .dog__detail__name {
    font-size: 20px;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;
  }

  .dog__detail__img-container {
    display: flex;
    justify-content: center;
    text-align: center;
    height: 200px;
  }

  .dog__detail__razaCR {
    font-size: 15px;
    padding: 0 5px;
  }

  .dog__detail__razaCN {
    font-size: 17px;
    padding: 0 5px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .dog__detail__stats {
    font-size: 15px;
    color: #333333;
    margin-bottom: 10px;
  }

  .dog__detail__img {
    height: 100%;
    border-radius: 10px 5px 10px 5px;
  }

  .dog__detail__characteristics {
    width: 500px;
    background: #fdfdfd;
    border-radius: 10px;
  }

  .dog__detail__item {
    display: flex;
  }

  .item-detail {
    text-align: start;
    padding: 10px 0;
    padding-left: 5px;
    border: var(--border-color);
    width: 166px;
  }

  .item-detail-dif-1 {
    width: 33%;
    text-align: start;
    padding: 10px 0;
    padding-left: 5px;
    border: var(--border-color);
  }

  .item-detail-dif-2 {
    width: 67%;
    text-align: start;
    padding: 10px 0;
    padding-left: 5px;
    border: var(--border-color);
  }

  .deco-container {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--main-color);
  }

  .deco-1 {
    animation: bounce1 0.5s alternate infinite ease-in;
  }

  .deco-2 {
    animation: bounce2 0.5s alternate infinite ease-in;
  }

  .deco-3 {
    animation: bounce3 0.5s alternate infinite ease-in;
  }

  @keyframes bounce2 {
    0% {
      transform: translateY(-40%);
    }
    100% {
      transform: translatey(0%);
    }
  }

  @keyframes bounce3 {
    0% {
      transform: translateY(-20%);
    }
    100% {
      transform: translateT(0%);
    }
  }

  .dog__detail__decoration__curiosities {
    width: 80%;
    font-size: 15px;
  }

  @media screen and (max-width: 992px) {
  }

  @media screen and (max-width: 768px) {
    .dog__detail__characteristics {
      width: 400px;
      background: #fdfdfd;
      border-radius: 10px;
    }
  }

  @media screen and (max-width: 576px) {
    .dog__detail__header {
      flex-direction: column;
      min-height: 300px;
      align-items: center;
    }

    .dog__detail__name {
      justify-content: center;
      align-items: center;
    }

    .dog__detail__characteristics {
      width: 300px;
      background: #fdfdfd;
      border-radius: 10px;
    }

    .item-detail {
      width: 70px;
    }

    .item-detail-dif-1 {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      padding-left: 5px;
      border: var(--border-color);
    }

    .item-detail-dif-2 {
      width: 50%;
      text-align: start;
      padding: 10px 0;
      padding-left: 5px;
      border: var(--border-color);
    }
    .detail-title {
      width: 190px;
    }
  }

  @media screen and (max-width: 360px) {
    .dog__detail__container {
      padding: 0;
    }
  }
`;

/* <div className="left">
<div className="profile">
<div className="div_dog_profile">
<img className="image_dog_profile" src={dog?.image} alt="dog" />
</div>
<div className="div_dog_name">
<h2 className="name_dog">{dog?.name}</h2>
<span className="sobre_dog">SOBRE MI</span>
          </div>
        </div>

        <div className="table_container">
          <table>
            <tr>
              <th className="encabezado_tabla">CARACTERISTICAS</th>
              <th className="encabezado_tabla">MIN</th>
              <th className="encabezado_tabla">MAX</th>
            </tr>
            <tr>
              <td className="table_caracteristicas">ALTURA</td>
              <td className="table_datos">{dog?.height_min}</td>
              <td className="table_datos">{dog?.height_max} Cm</td>
            </tr>
            <tr>
              <td className="table_caracteristicas">PESO</td>
              <td className="table_datos">{dog?.weight_min}</td>
              <td className="table_datos">{dog?.weight_max} Kg</td>
            </tr>
            <tr>
              <td className="table_caracteristicas">AÑOS DE VIDA</td>
              <td className="table_datos">{dog?.life_span_min}</td>
              <td className="table_datos">{dog?.life_span_max} AÑOS</td>
            </tr>
            <tr>
              <td className="table_caracteristicas table_temp">TEMPERAMENTO</td>
              <td colSpan="2" className="table_datos temp">
                {dog?.temperament}
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="right">
        <div className="div_banner">
          <img className="banner" src={banner} alt="banner" />
        </div>
      </div> */
