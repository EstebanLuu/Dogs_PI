import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchDogs } from "../Redux/actions/index.js";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Lupa from "../assets/icons8-búsqueda.svg";
import Menu from "../assets/menu.svg";

function NavBar() {
  const dispatch = useDispatch();

  const [nameDog, setNameDog] = useState("");
  const [menu, setMenu] = useState(false);

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

  const handleClickMenu = () => {
    setMenu(!menu);
  };

  return (
    <NavbarContainer>
      <Link className="link" to="/home">
        <h1 className="title responsive-title">Page Dogs</h1>
      </Link>
      <div className="search-bar">
        <Link className="link" to="/home">
          <h1 className="title">Page Dogs</h1>
        </Link>
        <div
          className={`list-searchbar ${
            menu ? "list-searchbar-responsive" : ""
          }`}
          onClick={handleClickMenu}
        >
          <Link className="link" to="/home">
            <h4 className="list-name">Home</h4>
          </Link>

          <Link className="link" to="/create-dog">
            <h4 className="list-name">Create dog</h4>
          </Link>

          <Link className="link" to="/landing">
            <h4 className="list-name">Landing</h4>
          </Link>
        </div>
        <div>
          <div className="search-div">
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
        </div>
        <img
          className={`menu ${menu ? "menu-responsive" : "menu"}`}
          src={Menu}
          alt=""
          onClick={handleClickMenu}
        />
      </div>
      <div
        className={`wrapper ${menu ? "wrapper-responsive" : ""}`}
        onClick={handleClickMenu}
      ></div>
    </NavbarContainer>
  );
}

export default NavBar;

const NavbarContainer = styled.div`
  .search-bar {
    width: 100%;
    z-index: 1000;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0;
  }

  .title {
    z-index: 100;
    margin: 0px;
  }

  .list-searchbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
  }

  .search-div {
    display: flex;
    z-index: 100;
    align-items: center;
    justify-content: center;
  }

  .list-name {
    font-size: 15px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      color: var(--main-color);
    }
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
  .menu {
    display: none;
    z-index: 100;
  }
  .responsive-title {
    display: none;
  }

  .list-searchbar-responsive {
    top: -3000px;
    left: -3000px;
  }

  .wrapper {
    top: -3000px;
    left: -3000px;
    transition: 0.5s;
  }

  .divSearchBar_Results {
    position: absolute;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
  }

  @media screen and (max-width: 992px) {
    .list-searchbar {
      position: absolute;
      top: -3000px;
      color: #fff;
    }

    .link {
      color: #fff;
      &:hover {
        color: var(--main-color);
      }
    }

    .list-searchbar-responsive {
      position: initial;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      color: #fff;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: fixed;
    }

    .list-name {
      margin: 20px;
    }

    .wrapper-responsive {
      top: 0;
      left: 0;
      background: #141414;
      position: absolute;
      width: 100%;
      z-index: -1;
      height: 100%;
    }

    .menu {
      display: initial;
      right: 25px;
      cursor: pointer;
    }

    .results {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (max-width: 768px) {
    .title {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 576px) {
    .title {
      display: none;
    }
    .responsive-title {
      display: initial;
      display: flex;
      background-color: #fff;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  }

  @media screen and (max-width: 350px) {
    .divSearchBar_Results {
      position: initial;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .responsive-title {
      display: initial;
      display: flex;
      background-color: #fff;
      align-items: center;
      justify-content: start;
      width: 100%;
    }
    .menu {
      position: absolute;
      right: 0;
      top: 0;
    }
    .search-div {
      width: 100%;
      justify-content: center;
    }
    .search-bar {
      padding: 0;
      padding-top: 10px;
    }
  }
`;
