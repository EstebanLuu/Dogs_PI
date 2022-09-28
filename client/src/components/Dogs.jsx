import React from "react";
import styled from "styled-components";

const Dogs = () => {
  return (
    <DogsContainer>
      <div className="navbar">
        <h1 className="title">Page Dogs</h1>
        <input type="text" className=""/>
      </div>
    </DogsContainer>
  );
};

export default Dogs;

const DogsContainer = styled.div`
  margin: 20px var(--marginLR);
`;
