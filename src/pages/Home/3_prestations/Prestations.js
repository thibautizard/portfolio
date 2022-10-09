import React from "react";
import TitleSection from "../../../components/titleSection/titleSection";
import "./Prestations.scss";
import Prestation from "./prestation/Prestation";
import prestations from "./prestations.json";

export default function Prestations() {
  return (
    <section id="prestations">
      <TitleSection title="Prestations" type="underline" />
      <div className="panelPrestations">
        {prestations.map((props, index) => (
          <Prestation index={index} {...props} />
        ))}
      </div>
    </section>
  );
}
