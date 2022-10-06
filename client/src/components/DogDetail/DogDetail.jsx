import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../Redux/actions/index.js";
import Footer from "../ReusableComponents/Footer";
import DogCard from "./DogCard";
import { useParams } from "react-router-dom";
import Navbar from "../ReusableComponents/NavBar";

const DogDetail = () => {
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.details);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <>
      <Navbar />
      <DogDetailContainer>
        <DogCard dog={dog[0]} />
        <Footer />
      </DogDetailContainer>
    </>
  );
};

export default DogDetail;

const DogDetailContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
