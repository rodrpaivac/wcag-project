import React, { useState } from "react";
import { Props } from "./types";

import { Container, RadioBoxSelected } from "./styles";

const RadioBox: React.FC<Props> = ({ isSelected }) => {
  const [_isSelected, setIsSelected] = useState<boolean>(isSelected);

  return (
    <Container
      aria-label={`Caixa de seleção: ${
        _isSelected ? "Selecionada" : "Não selecionada"
      }`}
      aria-required="true"
      onClick={() => setIsSelected((prev) => !prev)}
    >
      {_isSelected && <RadioBoxSelected />}
    </Container>
  );
};

export default RadioBox;
