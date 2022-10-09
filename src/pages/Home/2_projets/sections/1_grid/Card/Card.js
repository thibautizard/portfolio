import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./Card.scss";

// Paths

export default function Card({
  title,
  description_short,
  prev,
  github,
  visible,
  highlight,
  title_color,
  handleDisplayPanel,
}) {
  const background_url = require(`../../../img/${title.toLowerCase()}/${
    highlight ? "cover_highlight_compressed" : "cover_compressed"
  }.webp`);

  const aosZooms = [
    "zoom-out",
    "zoom-out-up",
    "zoom-out-down",
    "zoom-out-left",
    "zoom-out-right",
  ];

  return (
    visible && (
      <div
        class="projet outer-card"
        data-aos={aosZooms[Math.ceil(Math.random() * aosZooms.length) - 1]}
        data-aos-delay={300 * Math.ceil(Math.random() * 3)}
        data-aos-duration={1500}
      >
        <div
          class={`card ${highlight && "highlight"}`}
          onMouseMove={animateCard}
          onMouseOut={restoreCardDimensions}
          onClick={handleDisplayPanel}
        >
          <img src={background_url} />
          <section className="description">
            <div class="overlay"></div>
            <p class="title" style={{ color: title_color }}>
              {" "}
              {title}{" "}
            </p>
            <div class="details">
              <span style={{ color: "white" }}>{description_short}</span>
              <div class="buttons">
                {github && (
                  <a
                    class="psp"
                    href={github}
                    target="_blank"
                    onClick="e => e.stopPropagation()"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}
                {prev && (
                  <a
                    class="prev"
                    href={github}
                    target="_blank"
                    onClick="e => e.stopPropagation()"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  );
}

function animateCard(e) {
  const rotationIntensity = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--rotation-intensity");

  const overlayFactor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--overlay-factor");

  let card = e.currentTarget;
  let overlay = e.currentTarget.parentElement.querySelector(".overlay");

  focusCard(card.parentElement);
  let rect = card.getBoundingClientRect();

  const [x, y] = [e.clientX - rect.left, e.clientY - rect.top];

  // Overlay
  overlay.style.transform = `translate3d(${-(
    (x * (100 / overlayFactor)) / rect.width -
    50 / overlayFactor
  )}%,
                                           ${-(
                                             (y * (100 / overlayFactor)) /
                                               rect.height -
                                             50 / overlayFactor
                                           )}%,
                                           0)`;

  overlay.style.opacity =
    Math.abs(rect.width / 2 - x) / rect.width +
    Math.abs(rect.height / 2 - y) / rect.height;

  card.style.transform = `rotateX(${
    -(y / (rect.height / 2) - 1) * rotationIntensity
  }deg)
                            rotateY(${
                              (x / (rect.width / 2) - 1) * rotationIntensity
                            }deg) scale(1.03)`;
}

function restoreCardDimensions(e) {
  let card = e.currentTarget;
  let overlay = card.querySelector(".overlay");
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  overlay.style.opacity = "0";
  loseFocusCard(card.parentElement);
}

function focusCard(card) {
  const allCards = card.parentElement.childNodes;

  allCards.forEach((cardToCheck) => {
    if (cardToCheck !== card) {
      cardToCheck.querySelector(".card").style.filter = "brightness(0.3)";
    }
  });
}

function loseFocusCard(card) {
  const allCards = card.parentElement.childNodes;
  allCards.forEach(
    (cardToCheck) =>
      (cardToCheck.querySelector(".card").style.filter = "brightness(1)")
  );
}
