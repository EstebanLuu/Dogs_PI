import React, { useEffect } from "react";
import { filterDog, getTemperament } from "../../../Redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

function FiltroTemperamento({ currentPage, setCurrentPage }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperament());
  }, [dispatch]);

  const temp = useSelector((state) => state.temperaments);

  function handleFilter(e) {
    const value = e.target.value;
    setCurrentPage(1);
    dispatch(filterDog(value));
  }

  return (
    <div>
      <select
        defaultValue={"DEFAULT"}
        className="select_ordernamiento"
        onChange={handleFilter}
      >
        <option value="DEFAULT" disabled>
          selecciona uno
        </option>
        <option className="option__name" value="All">
          All Temperaments
        </option>
        {temp &&
          temp.map((t, i) => {
            return (
              <option className="option__name" value={t.name} key={i}>
                {t.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default FiltroTemperamento;
