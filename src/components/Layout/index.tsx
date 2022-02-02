import React, { useState } from "react";
import Endereco from "../../screens/Pagamento/screens/Endereco";
import FormaPagamento from "../../screens/Pagamento/screens/FormaPagamento";
import Footer from "../Footer";
import Header from "../Header";
import Product from "../Product";

import {
  Container,
  Wrapper,
  SuccessfulPayment,
  SucessfulIcon,
  OuterDiv,
  SuccessfulMessage,
  GoBackContainer,
  Label,
} from "./styles";

const Layout: React.FC = () => {
  const [isEnderecoConfirmed, setIsEnderecoConfirmed] =
    useState<boolean>(false);
  const [isComprar, setIsComprar] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const goBackHome = (isSuccessful?: boolean) => {
    if (isSuccessful) {
      setIsFinished(true);
    } else {
      setIsEnderecoConfirmed(false);
      setIsComprar(false);
    }
  };

  return (
    <Container>
      <Header goBackHome={goBackHome} />
      {isFinished && (
        <OuterDiv>
          <SuccessfulPayment>
            <SucessfulIcon color="#60BBA7" />
          </SuccessfulPayment>
          <SuccessfulMessage>
            Pagamento realizado com sucesso!
          </SuccessfulMessage>
          <GoBackContainer
            onClick={() => {
              setIsFinished(false);
              goBackHome();
            }}
          >
            <Label>Voltar</Label>
          </GoBackContainer>
        </OuterDiv>
      )}
      <Wrapper>
        {!isComprar ? (
          <Product setIsComprar={setIsComprar} />
        ) : !isEnderecoConfirmed ? (
          <Endereco
            goBackHome={goBackHome}
            setIsEnderecoConfirmed={setIsEnderecoConfirmed}
          />
        ) : (
          <FormaPagamento
            goBackHome={() => goBackHome(true)}
            setIsEnderecoConfirmed={setIsEnderecoConfirmed}
          />
        )}
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Layout;
