import React from "react";
import Header from "./1_header/Header";
import Projets from "./2_projets/Projets";
import Prestations from "./3_prestations/Prestations";
import Reseaux from "../../components/reseaux/reseaux";
import Waves from "../../components/waves/waves";

function Home() {
  return (
    <>
      <Header />
      <Projets />
      <Waves color="#07111a" reverse={false} />
      {/* <Prestations />
      <Waves color="#07111a" reverse={true} /> */}
      <Reseaux />
    </>
  );
}

export default Home;
