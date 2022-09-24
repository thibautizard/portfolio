import React from "react";

import Card from "../card/card";

export default function Miniatures({
  projets,
  setDisplayPanel,
  setSelectedProjet,
}) {
  // Afficher le panneau quand on clique sur une miniature
  function handleDisplayPanel(e) {
    const index = Array.from(document.querySelectorAll(".card")).indexOf(
      e.currentTarget
    );

    setDisplayPanel(true);
    setSelectedProjet(projets[index]);
  }

  // Miniatures des projets
  const miniatures = projets.map((projet, i) => (
    <Card
      {...projet}
      key={`projet-${i}`}
      handleDisplayPanel={handleDisplayPanel}
    />
  ));

  return <div className="projets">{miniatures}</div>;
}
