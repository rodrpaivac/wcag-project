import React from "react";

import {
  HeaderDiv,
  Container,
  Button,
  Div,
  DivButton,
  Logo,
  SearchContainer,
  Input,
  IconContainer,
  SearchIcon,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderDiv>
        <Div className="logo">
          <Logo src={logo} />
        </Div>
        <SearchContainer>
          <Input />
          <IconContainer>
            <SearchIcon src={search} />
          </IconContainer>
        </SearchContainer>
        <DivButton className="signIn">
          <Button solid>Entrar</Button>
          <Button>Registrar-se</Button>
        </DivButton>
      </HeaderDiv>
    </Container>
  );
};

export default Header;

const logo = require("../../assets/logo1.png");
const search = require("../../assets/search.png");
