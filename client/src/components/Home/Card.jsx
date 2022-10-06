import React from "react";
import imageDogDefault from "../../assets/imagenDefault.jpg";
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
  background-color: #ffffff;
  border: var(--border-color);
  height: 350px;
  width: 200px;
  margin: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.158) 0px 8px 24px;
  }

  .card__image-container {
    width: 180px;
    height: 150px;
    overflow: hidden;
  }

  .card__image {
    pointer-events: none;
    width: 100%;
    height: auto;
  }

  .info_card {
    height: 130px;
    text-decoration: none;
    background-color: #ffffff;
    user-select: text;
  }

  .card_name_dog {
    font-weight: bold;
  }
`;
