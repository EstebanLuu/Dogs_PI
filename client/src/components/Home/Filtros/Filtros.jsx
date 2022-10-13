import React, { useState } from "react";
import FiltroTemperamento from "./FiltroTemperamento";
import FiltroCreado from "./FiltroCreado";
import styled from "styled-components";
import { orderByName, orderByWeight } from "../../../Redux/actions/index";
import { useDispatch } from "react-redux";

function Filtros({ currentPage, setCurrentPage }) {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  function handleClick() {
    setOpen(!open);
  }

  function handleChange(e) {
    const value = e.target.value;
    if (value === "name_A-Z" || value === "name_Z-A") {
      dispatch(orderByName(value));
    }
    if (value === "peso_MIN-MAX" || value === "peso_MAX-MIN") {
      dispatch(orderByWeight(value));
    }
  }

  return (
    <FiltrosContainer>
      <div className="filtros__button__container">
        <button className="button_filter" onClick={handleClick}>
          <span className="icon_filtro">☰</span>
          Filtros
        </button>
      </div>

      {open && (
        <div className="filtros_container">
          <div className="filtros__items">
            <div className="filtro__container">
              <span className="filtro_name">Creado en</span>
              <FiltroCreado
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>

            <div className="filtro__container">
              <span className="filtro_name">Temperamentos</span>
              <FiltroTemperamento
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>

            <div className="filtro__container">
              <div className="filtro__select">
                <span className="filtro_name">Por Nombre</span>
                <select
                  className="select_ordernamiento"
                  onChange={handleChange}
                >
                  <option className="option__name" value="name_A-Z">
                    Nombre (A-Z)
                  </option>
                  <option className="option__name" value="name_Z-A">
                    Nombre (Z-A)
                  </option>
                  <option className="option__name" value="peso_MAX-MIN">
                    Peso (MIN-MAX)
                  </option>
                  <option className="option__name" value="peso_MIN-MAX">
                    Peso (MAX-MIN)
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </FiltrosContainer>
  );
}

export default Filtros;

const FiltrosContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  .filtros__button__container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .button_filter {
    padding: 3px;
    background-color: #fff;
    color: var(--black-color);
    border: var(--border-color);
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    margin-left: 70px;
    &:hover {
      border: var(--border-color);
    }
  }

  .filtro__container {
    border-radius: 10px;
    padding: 10px;
    border: var(--border-color);
  }

  .filtros__items {
    padding: 10px;
    width: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    border-radius: 10px;
    justify-content: space-around;
  }

  .filtro__select {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
  }

  .select_ordernamiento {
    border-radius: 5px;
    padding: 3px;
    cursor: pointer;
    outline: none;
  }

  .option__name {
    color: #dabbbb;
    cursor: pointer;
    background: #fff;
    display: block;
  }

  .filtro_name {
    color: var(--main-color);
    background: #fff;
  }

  @media screen and (max-width: 576px) {
    .filtros__items {
      flex-direction: column;
    }
    .filtro__container {
      margin-bottom: 10px;
      width: 50%;
      text-align: center;
    }
    .filtro__select {
      align-items: center;
    }
    .filtros__button__container {
      justify-content: center;
    }
    .button_filter {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 350px) {
    .filtro__container {
      margin-bottom: 10px;
      width: 100%;
      text-align: center;
    }
  }
`;
