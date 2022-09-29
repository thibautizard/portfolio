import React from "react";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav data-aos="fade-down" data-aos-duration="1500">
      <a href="" class="initiales">
        TI
      </a>
      <ul class="liens">
        <li class="lien">
          <a href="#projets">Projets</a>
        </li>
        <li class="lien">
          <a href="#prestations">Prestations</a>
        </li>
        <li class="lien">
          <a href="CV/CV.pdf" target="_blank">
            CV
          </a>
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
