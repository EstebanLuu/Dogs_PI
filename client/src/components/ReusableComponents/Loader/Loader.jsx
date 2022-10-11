import React from "react";
import styled from "styled-components";
import NoSeEncuentra from "./NoSeEncuentra/NoSeEncuentra";

function Loader() {
  return (
    <>
      <LoaderContainer>
        <button className="loader__button">
          <div className="loader__round">
            <div className="loader-circle" />
          </div>
        </button>
        <NoSeEncuentra />
      </LoaderContainer>
    </>
  );
}
export default Loader;

const LoaderContainer = styled.div`
  display: block;
  width: 100%;
  height: 200px;
  position: relative;

  .loader__button {
    display: block;
    width: 100%;
    margin-top: 13px;
    border: none;
    border-radius: 3px;
    color: #000000;
    font-size: 15px;
    font-weight: 500;
    line-height: 15px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    height: 100%;
    width: 100%;
    background-color: #ffffff;
  }

  .loader__round {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .loader__round::after {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .loader-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: relative;
    border-top: 3px solid rgba(0, 0, 0, 0);
    border-right: 3px solid rgba(0, 0, 0, 0);
    border-bottom: 2px solid var(--main-color);
    border-left: 2px solid var(--main-color);
    font-size: 5px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
    text-indent: -9999em;
  }

  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .NoSeEncuentra__container {
    text-align: center;
    font-size: 15px;
  }

  .NoSeEncuentra__container__span {
    color: var(--main-color);
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 250px;

    .NoSeEncuentra__container {
      position: absolute;
      bottom: 5px;
      margin-bottom: 10px;
    }
  }
`;
