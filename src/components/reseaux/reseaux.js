import React from "react";
import "./reseaux.scss";
import github_icon from "../../../public/img/RS/github.svg";
import twitter_icon from "../../../public/img/RS/twitter.svg";
import linkedin_icon from "../../../public/img/RS/linkedin.svg";
import codepen_icon from "../../../public/img/RS/codepen.svg";

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
            <img src={github_icon} />
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/thibautizard"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter_icon} />
          </a>
        </li>

        <li>
          <a
            href="https://fr.linkedin.com/in/thibaut-izard-b9b60119b"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin_icon} />
          </a>
        </li>

        <li>
          <a
            href="https://codepen.io/thibautizard"
            aria-label="Codepen"
            target="_blank"
            rel="noreferrer"
          >
            <img src={codepen_icon} />
          </a>
        </li>
      </ul>
    </div>
  );
}
