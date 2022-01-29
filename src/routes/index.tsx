/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DetalheProduto from "../screens/DetalheProduto";
import Pagamento from "../screens/Pagamento";

const _Routes: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<DetalheProduto />} />
        <Route path="/pagamento" element={<Pagamento />} />
      </Routes>
    </BrowserRouter>
  );
};

export default _Routes;
