import React from "react";

import {
  Container,
  ProductKind,
  Row,
  HeartIcon,
  ShareIcon,
  CartIcon,
  Condition,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  Delivery,
  DeliveryIcon,
  MethodCard,
  PaymentIcon,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
  PreviousPriceRow,
  SeeMore,
  FavoriteButton,
} from "./styles";

const ProductAction: React.FC = () => {
  return (
    <Container>
      <ProductKind>Roupas, Calçados e Acessórios</ProductKind>

      <Row>
        <h1>Camisetas de Diversas Cores Puro Algodão Original</h1>
        <FavoriteButton>
          <HeartIcon title="Salvar produto como favorito" />
        </FavoriteButton>
      </Row>

      <Condition>MAIS VENDIDO</Condition>

      <PriceCard>
        <PreviousPriceRow> R$ 58 </PreviousPriceRow>
        <PriceRow>R$ 34,99</PriceRow>

        <InstallmentsInfo>ou 3x de R$ 11,67</InstallmentsInfo>
        <SeeMore>Ver os meios de pagamento</SeeMore>
      </PriceCard>

      <Delivery>
        <DeliveryIcon>
          <img alt="Forma de entrega" src={truck} />
        </DeliveryIcon>

        <div>
          <span className="title">
            Chegará grátis entre terça-feira e quinta-feira{" "}
          </span>
          <SeeMore>Ver mais formas de entrega</SeeMore>
        </div>
      </Delivery>

      <StockStatus>
        <div>
          <span>Estoque disponível</span>
        </div>

        <p>Quantidade: 574 itens em estoque</p>
      </StockStatus>

      {/* <MethodCard>
        <div id="payment-title">
          <PaymentIcon />
          <span>Formas de pagamento</span>
        </div>
        <span className="details">Aceitamos qualquer dessas formas</span>
        <div id="payment-icons-div">
          <img
            className="payment-icon"
            src="https://img.icons8.com/fluency/48/000000/mastercard.png"
          />
          <img
            className="payment-icon"
            src="https://img.icons8.com/color/48/000000/visa.png"
          />
          <img
            className="payment-icon"
            src="https://www.keune.com.br/images/icons/card_elo.png"
            alt=""
          />
          <img
            className="payment-icon"
            src="https://cdn0.iconfinder.com/data/icons/50-payment-system-icons-2/480/Boleto.png"
          />
          <img
            className="payment-icon"
            src="https://logodownload.org/wp-content/uploads/2020/02/pix-bc-logo-3.png"
          />
        </div>
        <a href="#" className="more">
          Ver mais opções
        </a>
      </MethodCard> */}

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          {/* <ShieldIcon /> */}
          <img src="https://img.icons8.com/bubbles/50/000000/shield.png" />
          <p>
            Compre com segurança, receba o produto que está esperando ou
            devolvemos o seu dinheiro.
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;

const truck = require("../../assets/truck.png");
