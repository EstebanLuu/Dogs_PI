import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../../Redux/actions/index";
import Card from "./Card";
import { Link } from "react-router-dom";
import Loader from "../ReusableComponents/Loader/Loader";
import Pagination from "./Pagination";
import styled from "styled-components";

function AllCards({
  currentPage,
  setCurrentPage,
  dogsPerPage,
  indexOfFirstDog,
  indexOfLastDog,
}) {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const CurrentDog = dogs.slice(indexOfFirstDog, indexOfLastDog);
  const paginate = (page) => {
    setCurrentPage(page);
  };

  // ------ CARDS ------
  const cards = () => {
    return CurrentDog.map((dog, i) => (
      <Link to={`/home/${dog.id}`} key={i} className="link__info__dog link ">
        <Card
          image={dog.image}
          name={dog.name}
          weight_min={dog.weight_min}
          weight_max={dog.weight_max}
          temperament={dog.temperament}
        />
      </Link>
    ));
  };

  // ------ return component (renderizado) ------
  return (
    <CardsContainer className="AllCards_component">
      <div className="AllCards">{dogs.length !== 0 ? cards() : <Loader />}</div>

      <Pagination
        dogsPerPage={dogsPerPage}
        totalPosts={dogs.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </CardsContainer>
  );
}

export default AllCards;

const CardsContainer = styled.div`
  margin: 0 var(--marginLR);
  .link__info__dog {
    color: #000000;
    font-size: var(--p);
  }

  .AllCards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
`;
