import React, { Fragment } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import { LiveAnnouncer } from "react-aria-live";

function App() {
  return (
    <LiveAnnouncer>
      <Layout />
      <GlobalStyles />
    </LiveAnnouncer>
  );
}

export default App;
