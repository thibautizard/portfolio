import React, { Component, useState } from "react";

// Components
import TitleSection from "../../components/titleSection/titleSection";
import Miniatures from "../../components/miniatures/miniatures";
import PanelProjet from "../../components/panelProjet/panelProjet";

// CSS
import "./projets.scss";

// JSON
import data_projets from "../../../public/data/projets.json";

export default function Projets() {
  const projets = data_projets.projets;

  const [selectedProjet, setSelectedProjet] = useState(projets[0]);
  const [displayPanel, setDisplayPanel] = useState(false);

  return (
    <section id="projets">
      {/* Titre */}
      <TitleSection title="Mes projets" />

      {/* Miniatures */}
      <Miniatures
        projets={projets}
        setDisplayPanel={setDisplayPanel}
        setSelectedProjet={setSelectedProjet}
      />

      {/* Panneau Information */}
      <PanelProjet
        {...selectedProjet}
        displayPanel={displayPanel}
        hidePanel={() => setDisplayPanel(false)}
      />
    </section>
  );
}
