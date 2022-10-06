import React from "react";
import styled from "styled-components";
import Img from "../../assets/dogVioleta.jpg";

function DogCard({ dog }) {
  return (
    <DogCardContainer>
      <div className="dog__detail__container">
        <div className="dog__detail__header">
          <h1 className="dog__detail__name">Affenpinscher</h1>
          <div className="dog__detail__img-container">
            <img className="dog__detail__img" src={Img} alt="" />
          </div>
        </div>
        <div className="dog__detail__characteristics">
          <div className="dog__detail__characteristics-item">
            Caracteristicas
          </div>
          <div className="dog__detail__characteristics-item-title">MIN</div>
          <div className="dog__detail__characteristics-item">MAX</div>
          <div className="dog__detail__characteristics-item">ALTURA</div>
          <div className="dog__detail__characteristics-item">40 Cm</div>
          <div className="dog__detail__characteristics-item">20 cm</div>
          <div className="dog__detail__characteristics-item-title">PESO</div>
          <div className="dog__detail__characteristics-item">5 KG</div>
          <div className="dog__detail__characteristics-item">10 kg</div>
          <div className="dog__detail__characteristics-item-title">
            AÑOS DE VIDA
          </div>
          <div className="dog__detail__characteristics-item">11 AÑOS</div>
          <div className="dog__detail__characteristics-item">17 AÑOS</div>
          <div className="dog__detail__characteristics-item-title">
            TEMPERAMENTO{" "}
          </div>
          <div className="dog__detail__characteristics-item-diferent">
            Wild, Hardworking, Dutiful
          </div>
        </div>
      </div>
      <div className="dog__detail__decoration">
        <div className="deco">
          <div>
            <h1 className="deco-1">canine curiosities</h1>
            <h1 className="deco-2">.</h1>
            <h1 className="deco-3">🐕</h1>
          </div>
          <p className="dog__detail__decoration__curiosities">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, at ab
            consequuntur praesentium quisquam voluptatum nesciunt itaque
            blanditiis earum fugiat aut dolores temporibus necessitatibus iste
            eius. Expedita neque ab autem impedit fuga suscipit aspernatur
            architecto magnam hic quibusdam aut libero quis soluta ut recusandae
            eum, optio perspiciatis quae voluptas corporis.
          </p>
        </div>
      </div>
    </DogCardContainer>
  );
}

export default DogCard;

const DogCardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  .dog__detail__container {
    width: 50%;
    text-align: center;
    align-items: center;
  }

  .dog__detail__header {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .dog__detail__name {
    width: 100%;
  }

  .dog__detail__img-container {
    display: flex;
    justify-content: center;
    text-align: center;
    height: 200px;
  }

  .dog__detail__img {
    height: 100%;
    border-radius: 10px 5px 10px 5px;
  }

  .dog__detail__characteristics {
    width: 100%;
    background: #fdfdfd;
    border: var(--border-color);
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 50px;
  }

  .dog__detail__characteristics-item {
    border: var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dog__detail__characteristics-item-title {
    border: var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dog__detail__characteristics-item-diferent {
    grid-column-start: 2;
    grid-column-end: 4;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dog__detail__decoration {
    background: #2193b0; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom,
      #6dd5ed,
      #2193b0
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom,
      #6dd5ed,
      #2193b0
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .deco {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 20px;
    color: var(--light-color);
    text-align: center;
    h1 {
      display: inline-block;
    }
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
  .deco-4 {
    animation: bounce4 0.5s alternate infinite ease-in;
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
