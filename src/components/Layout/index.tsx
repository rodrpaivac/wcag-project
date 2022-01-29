import React, { useState } from "react";
import Endereco from "../../screens/Pagamento/screens/Endereco";
import FormaPagamento from "../../screens/Pagamento/screens/FormaPagamento";
import Footer from "../Footer";
import Header from "../Header";
import Product from "../Product";

import { Container, Wrapper } from "./styles";

const Layout: React.FC = () => {
  const [isEnderecoConfirmed, setIsEnderecoConfirmed] =
    useState<boolean>(false);
  const [isComprar, setIsComprar] = useState<boolean>(false);

  return (
    <Container>
      <Header />

      <Wrapper>
        {!isComprar ? (
          <Product setIsComprar={setIsComprar} />
        ) : !isEnderecoConfirmed ? (
          <Endereco setIsEnderecoConfirmed={setIsEnderecoConfirmed} />
        ) : (
          <FormaPagamento setIsEnderecoConfirmed={setIsEnderecoConfirmed} />
        )}
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Layout;
