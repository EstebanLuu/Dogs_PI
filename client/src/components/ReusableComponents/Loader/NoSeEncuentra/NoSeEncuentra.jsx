import React from "react";
import styled from "styled-components";

const NoSeEncuentra = () => {
  return (
    <div className="NoSeEncuentra__container">
      Si pasan más de
      <span className="NoSeEncuentra__container__span"> 5 segundos</span> y no
      se encuentra nada, es posible que los perros de esta sección no existan
    </div>
  );
};

export default NoSeEncuentra;
