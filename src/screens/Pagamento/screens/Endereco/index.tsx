import React, { useState } from "react";
import RadioBox from "../../../../components/RadioBox";

import {
  Address,
  AddressRow,
  Button,
  Container,
  EditarButtonContainer,
  EditarButtonLabel,
  LocationIcon,
  LocationIconContainer,
  RadioBoxContainer,
  RadioBoxSelected,
  SelectedAddressContainer,
  SubTitle,
  Title,
} from "./styles";
import { Props } from "./types";

const Endereco: React.FC<Props> = ({ setIsEnderecoConfirmed }) => {
  const [isSelected, setIsSelected] = useState<boolean>(true);
  return (
    <Container>
      <Title>Aonde você quer receber sua compra?</Title>
      <SelectedAddressContainer>
        <SubTitle>Endereço de entrega</SubTitle>
        <AddressRow>
          <LocationIconContainer>
            <LocationIcon
              aria-label={"ícone de localização"}
              aria-required="true"
            />
          </LocationIconContainer>
          <Address>
            Avendida 26 de outubro, número 4000.
            <br />
            Bairro Bela Vista, Ipatinga - MG.
            <br />
            CEP: 35.160-208.
          </Address>
          <RadioBox isSelected={true} />
        </AddressRow>
        <EditarButtonContainer onClick={() => alert("Função não implementada")}>
          <EditarButtonLabel>Editar ou escolher outro</EditarButtonLabel>
        </EditarButtonContainer>
      </SelectedAddressContainer>
      <Button
        onClick={() => {
          setIsEnderecoConfirmed(true);
        }}
      >
        Confirmar
      </Button>
    </Container>
  );
};

export default Endereco;
