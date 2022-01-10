import React, { useEffect, useRef } from "react";
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
    <LiveAnnouncer>
      <Container>
        <HeaderDiv>
          <LeftContainer>
            <Div className="logo">
              <Logo src={logo} />
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
          {/* <DivButton className="signIn">
          <Button solid>Entrar</Button>
          <Button>Registrar-se</Button>
        </DivButton> */}
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
    </LiveAnnouncer>
  );
};

export default Header;

const logo = require("../../assets/logo1.png");
const search = require("../../assets/search.png");
const location = require("../../assets/location.png");
const cart = require("../../assets/cart.png");
