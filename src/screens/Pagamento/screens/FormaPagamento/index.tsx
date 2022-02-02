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
  VoltarButtonContainer,
  VoltarLabel,
  Buttons,
} from "./styles";
import { Props } from "./types";

const FormaPagamento: React.FC<Props> = ({
  setIsEnderecoConfirmed,
  goBackHome,
}) => {
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
      <Buttons>
        <Button
          onClick={() => {
            goBackHome();
          }}
        >
          Finalizar compra
        </Button>

        <VoltarButtonContainer onClick={() => setIsEnderecoConfirmed(false)}>
          <VoltarLabel>Editar endereço de entrega</VoltarLabel>
        </VoltarButtonContainer>
      </Buttons>
    </Container>
  );
};

export default FormaPagamento;
