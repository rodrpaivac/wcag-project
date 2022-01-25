import React from "react";
import { Container, Image } from "./styles";
import { PictureItemProps, Props } from "./types";

const PicturesCarousel: React.FC<Props> = ({ pictures }) => {
  return (
    <Container>
      {pictures.map((element) => (
        <PictureItem picture={element} />
      ))}
    </Container>
  );
};

const PictureItem: React.FC<PictureItemProps> = ({ picture }) => {
  return <div />;
};

export default PicturesCarousel;
