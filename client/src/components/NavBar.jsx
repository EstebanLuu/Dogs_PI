import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchDogs } from "../Redux/actions/index.js";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Lupa from "../assets/icons8-búsqueda.svg";

function NavBar() {
  const dispatch = useDispatch();

  const [nameDog, setNameDog] = useState("");

  const dogsHome = useSelector((state) => state.dogsHome);

  function handleChange(e) {
    setNameDog(e.target.value);
    if (nameDog && nameDog) {
      dispatch(searchDogs(nameDog));
    }
  }

  function handleClick() {
    setNameDog("");
  }

  return (
    <NavbarContainer>
      <div className="search-bar">
        <input
          className="searchBar__input"
          type="text"
          placeholder="Buscar"
          onChange={handleChange}
          value={nameDog}
        />
        <button
          className={nameDog.length > 0 ? "cleaner active" : "cleaner"}
          onClick={handleClick}
        >
          <img className="lupita" src={Lupa} alt="lupa" />
        </button>
      </div>

      <div
        className={
          nameDog.length !== 0
            ? "divSearchBar_Results active"
            : "divSearchBar_Results"
        }
      >
        <div className="div_nameResult">
          {nameDog &&
            dogsHome.slice(0, 10).map((d, i) => {
              return (
                <div>
                  <Link className="results" to={`/home/${d.id}`} key={i}>
                    {d.name}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </NavbarContainer>
  );
}

export default NavBar;

const NavbarContainer = styled.div`
  .search-bar {
    width: fit-content;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .searchBar__input {
    padding: 4px;
    border: 1px solid #e4e4e4;
    &:focus {
      outline: none;
    }
  }

  .cleaner {
    width: 30px;
    cursor: pointer;
    border: 1px solid #e4e4e4;
    border-radius: 0 10px 10px 0;
    background: #ffffff;
    &:hover {
    }
  }

  .lupita {
    width: 100%;
    display: block;
  }
`;
