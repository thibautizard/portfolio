import React, { Component, useState } from "react";

// Components
import TitleSection from "../../../components/titleSection/titleSection";
import Grid from "./sections/1_grid/Grid";
import PanelProjet from "./sections/2_panel/Panel";
import Background from "./sections/0_background/Background";

// CSS
import "./Projets.scss";

// JSON
import data_projets from "./projets.json";

export default function Projets() {
  const projets = data_projets.projets;

  const [selectedProjet, setSelectedProjet] = useState(projets[0]);
  const [displayPanel, setDisplayPanel] = useState(false);

  return (
    <section id="projets">
      {/* Background */}
      <Background />

      {/* Titre */}
      <TitleSection title="Mes projets" />

      {/* Grille projets */}
      <Grid
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
