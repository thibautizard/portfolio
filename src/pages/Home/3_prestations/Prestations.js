import React from "react";
import TitleSection from "../../../components/titleSection/titleSection";
import "./prestations.scss";
import Prestation from "./prestation/Prestation";
import data_prestations from "./prestations.json";

export default function Prestations() {
  return (
    <section id="prestations">
      <TitleSection title="Prestations" type="underline" />
      <div className="panelPrestations">
        {data_prestations.map((props, index) => (
          <Prestation index={index} {...props} />
        ))}
      </div>
    </section>
  );
}
