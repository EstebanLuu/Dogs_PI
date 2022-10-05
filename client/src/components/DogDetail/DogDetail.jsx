// import React, { useEffect } from "react";
// import styled from "styled-components";
// import { useSelector, useDispatch } from "react-redux";
// import { getDetail } from "../../Redux/actions/index";

// const DogDetail = (props) => {
//   const dispatch = useDispatch();
//   const dog = useSelector((state) => state.details);
//   const id = props.match.params.id;

//   useEffect(() => {
//     dispatch(getDetail(id));
//     console.log(id);
//   }, [dispatch, id]);

//   // return Dog.map((dog, i) => (
//   <DogDetailContainer>
//     <div className="DogDetail__card flex">
//       <h1>aca va la data</h1>
//       <div className="DogDetail__text"></div>
//       <div className="DogDetail__img"></div>
//     </div>
//   </DogDetailContainer>;
//   // ));
// };

// export default DogDetail;

// const DogDetailContainer = styled.div``;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DogDetail from "./DogDetail";
import { getDetail } from "../../Redux/actions/index.js";

function Details(props) {
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.details);
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div className="details_component">
      <Header />
      <DogDetail dog={dog[0]} />
      <Footer />
    </div>
  );
}

export default Details;
