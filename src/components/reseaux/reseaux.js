import React from "react";
import "./reseaux.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Reseaux() {
  return (
    <div className="reseaux" data-aos="fade-up" data-aos-duration="1500">
      <ul class="social__StyledSocialList-anu6nt-0 dVLQAC fade-enter-done">
        <li>
          <a
            href="https://github.com/thibautizard"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </li>

        {/* <li>
          <a
            href="https://twitter.com/thibautizard"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
        </li> */}

        <li>
          <a
            href="https://fr.linkedin.com/in/thibaut-izard-b9b60119b"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </li>

        <li>
          <a
            href="https://codepen.io/thibautizard"
            aria-label="Codepen"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "codepen"]} />
          </a>
        </li>
      </ul>
    </div>
  );
}
