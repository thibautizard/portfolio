import React from "react";
import { Link } from "react-router-dom";
import pdf from "../../../../../../public/CV/CV.pdf";
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
        {/* <li class="lien">
          <a href="#prestations">Prestations</a>
        </li> */}
        <li class="lien">
          <a href={pdf} target="_blank">
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
          <Link className="contact" to="/contact">
            ME CONTACTER
          </Link>
        </li>
      </ul>
    </nav>
  );
}
