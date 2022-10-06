import React from "react";
import TitleSection from "../../components/titleSection/titleSection";
import "./prestations.scss";
import Prestation from "../../components/prestation/Prestation";
import data_prestations from "../../../public/data/prestations.json";

export default function Prestations() {
  return (
    <section id="prestations">
      <TitleSection title="Prestations" type="underline" />
      <div className="panelPrestations">
        {data_prestations.map((props) => (
          <Prestation {...props} />
        ))}
      </div>
    </section>
  );
}
