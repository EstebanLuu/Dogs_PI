import React from "react";
import { filterCreated } from "../../../Redux/actions/index";
import { useDispatch } from "react-redux";

function FiltroCreado({ currentPage, setCurrentPage }) {
  const dispatch = useDispatch();

  function handleSelect(e) {
    const value = e.target.value;
    setCurrentPage(1);
    dispatch(filterCreated(value));
  }

  return (
    <div>
      <select className="select_ordernamiento" onChange={handleSelect}>
        <option selected disabled>
          selecciona uno
        </option>
        <option className="option__name" value="All">
          Todos
        </option>
        <option className="option__name" value="Api">
          API
        </option>
        <option className="option__name" value="creados">
          Base de datos
        </option>
      </select>
    </div>
  );
}

export default FiltroCreado;
