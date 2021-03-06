import React from "react";
import { LiveMessage, LiveAnnouncer } from "react-aria-live";
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

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderDiv>
        <LeftContainer>
          <Div className="logo">
            <Logo
              aria-label={"Imagem da logo do Mercado Livre"}
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
