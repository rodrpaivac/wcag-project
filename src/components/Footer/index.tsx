import React from "react";

import { FooterDiv, Container, Div } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterDiv>
        <Div>
          <h4>Contato</h4>
          <p>example@gmail.com</p>
          <p>(38) 98824-2257</p>
        </Div>
      </FooterDiv>
    </Container>
  );
};

export default Footer;
