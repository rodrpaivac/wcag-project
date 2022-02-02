import React from "react";
import {
  HeaderDiv,
  Container,
  Div,
  Logo,
  SearchContainer,
  Input,
  IconContainer,
  LeftContainer,
  EnderecoContainer,
  Label,
  Value,
  Column,
  RightContainer,
  TransparentButton,
  CartIcon,
  LocationIcon,
  SearchIcon,
} from "./styles";
import { Props } from "./types";

const Header: React.FC<Props> = ({ goBackHome }) => {
  return (
    <Container>
      <HeaderDiv>
        <LeftContainer>
          <Div className="logo" onClick={() => goBackHome()}>
            <Logo
              aria-label={
                "Imagem da logo do Mercado Livre. Clique aqui para retornar à página principal."
              }
              aria-required="true"
              src={logo}
            />
          </Div>
          <EnderecoContainer>
            <LocationIcon title="Endereço de entrega" />
            <Column>
              <Label>Enviar para</Label>
              <Value>Ipatinga 35160208</Value>
            </Column>
          </EnderecoContainer>
        </LeftContainer>

        <SearchContainer>
          <Input placeholder="Buscar produtos, marcas e muito mais..." />
          <IconContainer>
            <SearchIcon title="Pesquisar" />
          </IconContainer>
        </SearchContainer>

        <RightContainer>
          <TransparentButton>
            <Value>Crie a sua conta</Value>
          </TransparentButton>
          <TransparentButton>
            <Value>Entre</Value>
          </TransparentButton>
          <TransparentButton>
            <Value>Compras</Value>
          </TransparentButton>
          <TransparentButton>
            <CartIcon title="Carrinho" />
          </TransparentButton>
        </RightContainer>
      </HeaderDiv>
    </Container>
  );
};

export default Header;

const logo = require("../../assets/logo1.png");
