import React from "react";
import {
  Container,
  Title,
  Seller,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
  SeeMore,
} from "../SellerInfo/styles";

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Vendedor:</Title>

      <Seller>
        <img src="https://github.com/brunofilho1.png" alt="Foto do vendedor" />
        <div>
          <a href="#">
            <h3>Bruno Filho</h3>
          </a>
          <span>Vendo camisas, calças, moletons, blusas e mais.</span>
        </div>
      </Seller>

      <LocationCard>
        <LocationIcon />
        <div>
          <p>Localização</p>
          <strong>São Paulo — SP</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer
          aria-label={"Medidor de reputação do vendedor: reputação excelente ."}
          aria-required="true"
        >
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className="active"></li>
        </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>561</strong>
            <span>Vendas nos últimos 4 meses</span>
          </div>

          <div>
            <strong>
              <SupportIcon />
            </strong>
            <span>Presta um bom atendimento</span>
          </div>

          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span>Vendas nos últimos 4 meses</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <SeeMore>Ver mais dados deste vendedor</SeeMore>
    </Container>
  );
};

export default SellerInfo;
