import React from "react";

import Card from "./Card/Card";

export default function Grid({ projets, setDisplayPanel, setSelectedProjet }) {
  // Afficher le panneau quand on clique sur une miniature
  function handleDisplayPanel(e) {
    const index = Array.from(document.querySelectorAll(".card")).indexOf(
      e.currentTarget
    );

    setDisplayPanel(true);
    setSelectedProjet(projets[index]);
  }

  // Miniatures des projets
  const cards = projets.map((projet, i) => (
    <Card
      {...projet}
      key={`projet-${i}`}
      handleDisplayPanel={handleDisplayPanel}
    />
  ));

  return <div className="projets">{cards}</div>;
}
