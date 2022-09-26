import React from "react";
import TitleSection from "../../components/titleSection/titleSection";
import "./prestations.scss";

export default function Prestations() {
  return (
    <section id="prestations">
      <TitleSection title="Prestations" type="underline" />
      <div className="panelPrestation"></div>
    </section>
  );
}
