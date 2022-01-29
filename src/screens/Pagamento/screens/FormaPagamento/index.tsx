import React, { useEffect, useState } from "react";
import RadioBox from "../../../../components/RadioBox";

import {
  Container,
  FormaPagamentoContainer,
  Title,
  FormaPagamentoLabel,
  IconContainer,
  Icon,
  Button,
} from "./styles";
import { Props } from "./types";

const FormaPagamento: React.FC<Props> = () => {
  return (
    <Container>
      <Title>Como você prefere pagar?</Title>
      <FormaPagamentoContainer>
        <IconContainer>
          <Icon aria-label={"ícone da master card"} aria-required="true" />
        </IconContainer>
        <FormaPagamentoLabel
          aria-label={"Pagar com cartão Nubank de final 6983"}
          aria-required="true"
        >
          Cartão Nubank ****6983
        </FormaPagamentoLabel>
        <RadioBox isSelected={true} />
      </FormaPagamentoContainer>

      <Button onClick={() => alert("Teste finalizado")}>
        Finalizar compra
      </Button>
    </Container>
  );
};

export default FormaPagamento;
