import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer__top">
        <h1>Mi proyecto Individual</h1>
      </div>
      <div className="footer__bottom"></div>
    </FooterContainer>
  );
};

export default Footer;
const FooterContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  color: #cacaca;
  .footer__top {
    text-align: center;
    font-size: 10px;
  }

  .footer__top__img {
    width: 100%;
    height: auto;
  }
`;
