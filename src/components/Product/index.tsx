import React from "react";
import SellerInfo from "../../components/SellerInfo";
import ProductAction from "../ProductAction";
import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
  SeeMore,
} from "./styles";

import { Carousel } from "react-carousel-minimal";

const Product: React.FC = () => {
  const data = [
    {
      image:
        "https://www.citysoccerpro.com/wp-content/uploads/2017/11/shirt.jpg",
    },
    {
      image: "https://www.theadairgroup.com/images/Assorted_T_Shirts_large.jpg",
    },

    {
      image:
        "https://5.imimg.com/data5/AL/FP/MY-45474819/black-plain-blank-cotton-t-shirts-500x500.jpg",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <Container>
      <Panel>
        <Column>
          <Gallery>
            <Carousel
              data={data}
              time={8000}
              width="610px"
              height="550px"
              captionStyle={captionStyle}
              radius="3px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="white"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

function WarrantySection() {
  return (
    <Section>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="title">Compra garantida com o Lorem Ipsum</p>
          <p className="description">
            Receba o produto que está esperando ou devolvemos o seu dinheiro
          </p>
        </span>
        <span>
          <p className="title">Garantia do vendedor</p>
          <p className="description">Sem garantia</p>
        </span>
      </div>

      <SeeMore>Saiba mais sobre garantia</SeeMore>
    </Section>
  );
}

function Info() {
  return (
    <Description>
      <h2>Descrição</h2>
      <p>
        A primeira imagem exibe uma camisa de gola redonda, manga curta e sem
        estampa, de cor laranja.
      </p>
      <p>
        A segunda imagem exibe quatro camisas de gola redonda, manga curta e sem
        estampa, de cores amarelo claro, cinza escuro, cinza claro e vermelho,
        respectivamente, enfileiradas da esquerda à direita.
      </p>
      <p>
        A terceira imagem exibe uma pessoa vestindo uma camisa de gola redonda,
        manga curta e sem estampa, de cor preta.
      </p>
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam
        impedit beatae quod eius exercitationem porro expedita, voluptatem
        temporibus sequi nisi voluptas? Ea libero nulla hic neque fugit, placeat
        maiores?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusamus ullam impedit beatae quod eius exercitationem porro expedita,
        voluptatem temporibus sequi nisi voluptas? Ea libero nulla hic neque
        fugit, placeat maiores?
      </p>
    </Description>
  );
}

export default Product;
