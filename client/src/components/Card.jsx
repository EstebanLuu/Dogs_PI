import React from "react";
import imageDogDefault from "../assets/imagenDefault.jpg";
import styled from "styled-components";

function Card({ image, name, temperament, weight_min, weight_max }) {
  return (
    <CardContainer>
      <div className="card__image-container ">
        <img
          className="card__image"
          src={image ? image : imageDogDefault}
          alt={name}
        />
      </div>
      <div className="info_card info">
        <span className="card_name_dog info ">{name}</span>
        <div>
          <span className="card_weight_dog info">
            {weight_min} - {weight_max} KG
          </span>
        </div>
        <div>
          <p className="card_temperament_dog info">{temperament}</p>
        </div>
      </div>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.div`
  text-align: center;
  background-color: #181818;
  height: 400px;
  width: 200px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 5px;
  &:hover {
    box-shadow: rgb(252, 160, 39) 0px 8px 24px;
  }

  .card__image-container {
    height: fit-content;
  }

  .card__image {
    width: 150px;
  }

  .info_card {
    height: 100px;
    text-decoration: none;
  }

  .card_name_dog {
    color: var(--main-color);
  }
`;
