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
      <div className="div_button_filter">
        <button className="button_filter" onClick={handleClick}>
          <span className="icon_filtro">☰</span>
          Filtros
        </button>
      </div>
      {open && (
        <div className="div_filtros_relative">
          <div className="div_filtros">
            <div className="div_fil">
              <span className="filtro_name">Creado en</span>
              <FiltroCreado
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
            <div className="div_fil">
              <span className="filtro_name">Temperamentos</span>
              <FiltroTemperamento
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>

            <div className="div_ordernamiento">
              <select className="select_ordernamiento" onChange={handleChange}>
                <option className="option_name" value="name_A-Z">
                  Nombre (A-Z)
                </option>
                <option className="option_name" value="name_Z-A">
                  Nombre (Z-A)
                </option>
                <option className="option_name" value="peso_MAX-MIN">
                  Peso (MIN-MAX)
                </option>
                <option className="option_name" value="peso_MIN-MAX">
                  Peso (MAX-MIN)
                </option>
              </select>
            </div>
          </div>
        </div>
      )}
    </FiltrosContainer>
  );
}

export default Filtros;

const FiltrosContainer = styled.div`
  margin: 0 var(--Margin-LR);
  .div_filtro_ordernamineto {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
  }

  .div_ordernamiento {
    display: flex;
    /* margin-bottom: 70px; */
  }

  .select_ordernamiento {
    font-size: 15px;
    color: var(--naranja);
    cursor: pointer;
    margin-top: 2px;
    padding: 5px;
    border: var(--border-color);
    border-radius: 10px;
  }
  .select_ordernamiento:focus {
    outline: none;
  }
  .option_name {
    color: var(--azul-oscuro);
  }

  .div_button_filter {
    display: flex;
    justify-content: start;
    padding: 0 120px;
    margin: 25px 0;
  }

  .button_filter {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    font-weight: 500;
    padding: 7px 12px 5px 10px;
    border-radius: 10px;
    color: var(--gris-claro);
    border: 1px solid var(--gris-placeholder);
    background-color: var(--blanco);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .button_filter:hover {
    color: var(--gris-oscuro);
    border-color: var(--gris-oscuro);
  }

  .icon_filtro {
    width: 25px;
  }

  .div_filtros_relative {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .div_filtros {
    position: absolute;
    display: flex;
    width: 70%;
    gap: 20px;
    padding: 10px;
    top: -82px;
    left: 250px;
    border-radius: 10px;
    border: var(--border-color);
    background: var(--light-color);
  }

  /* .div_fil {
    font-weight: 600;
    display: flex;
    flex-direction: column;
    gap: 10px;
  } */

  .filtro_name {
    color: var(--gris-oscuro);
  }

  @media screen and (max-width: 574px) {
    .div_filtros_relative {
      position: relative;
      right: 0px;
    }

    .div_filtros {
      position: absolute;
      display: flex;
      flex-direction: column;
      background-color: var(--blanco);
      gap: 50px;
      padding: 20px;
      border-radius: 10px;
      border: 1px solid var(--gris-placeholder);
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 574px) {
    .home_options {
      flex-direction: column;
    }
    .div_filtro_ordernamineto {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-width: 514px;
    }
  }

  @media screen and (max-width: 419px) {
    .home {
      max-width: 1110px;
      margin: 0 auto;
      padding: 0 15px;
    }
    .div_ordernamiento {
      display: flex;
      flex-direction: column;
    }
    .ordenar_text {
      font-size: 15px;
    }
    .select_ordernamiento {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 375px) {
    .button_filter {
      gap: 5px;
      font-size: 16px;
      padding: 7px 10px 5px 8px;
      border-radius: 8px;
    }

    .button_filter:hover {
      color: var(--gris-oscuro);
      border-color: var(--gris-oscuro);
    }

    .icon_filtro {
      width: 20px;
    }

    .div_filtros_relative {
      position: relative;
      left: 0px;
    }
  }
`;
