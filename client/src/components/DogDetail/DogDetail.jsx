import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../Redux/actions/index.js";
import Footer from "../ReusableComponents/Footer";
import DogCard from "./DogCard";
import { useParams } from "react-router-dom";
import Navbar from "../Home/NavBar";

const DogDetail = () => {
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.details);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <DogDetailContainer className="details_component">
      <Navbar />
      <DogCard dog={dog[0]} />
      <Footer />
    </DogDetailContainer>
  );
};

export default DogDetail;

const DogDetailContainer = styled.div`
  .details_component {
    padding: 0 30px;
  }
  @media screen and (max-width: 574px) {
    .details_component {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 375px) {
    .details_component {
      padding: 0 15px;
    }
  }
`;
