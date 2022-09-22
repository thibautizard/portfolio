import React from "react";
import "./navbar.scss";

export default function navbar() {
  return (
    <nav data-aos="fade-down" data-aos-duration="1500">
      <a href="" class="initiales">
        TI
      </a>
      <ul class="liens">
        <li class="lien">
          <a href="#realisations">Mes projets</a>
        </li>
        {/* <li class="lien">
          <a href="#competences">Compétences</a>
        </li>
        <li class="lien">
          <a href="#recommandations">Recommandations</a>
        </li> */}
        <li>
          <a className="contact" href="mailto: thibaut.izard.pro@gmail.com">
            ME CONTACTER
          </a>
        </li>
      </ul>
    </nav>
  );
}
