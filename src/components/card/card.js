import React from "react";
import "./card.scss";

export default function Card({
  title,
  description_short,
  prev,
  github,
  key,
  visible,
  highlight,
  title_color,
  displayPanel,
}) {
  const i = Math.floor(Math.random() * key + 1);
  return (
    visible && (
      <div class="projet outer-card">
        <div
          class={`card ${highlight && "highlight"}`}
          onMouseMove={animateCard}
          onMouseOut={restoreCardDimensions}
          onClick={displayPanel}
        >
          <img
            class="bg"
            src={`img/projets/${title.toLowerCase()}/${
              highlight ? "cover_highlight_compressed" : "cover_compressed"
            }.jpg`}
          />

          <section className="description">
            <div class="overlay"></div>
            <p class="title" style={{ color: title_color }}>
              {" "}
              {title}{" "}
            </p>
            <div class="details">
              <span style={{ color: "white" }}>{description_short}</span>
              <div class="buttons">
                <button class="psp">En savoir plus</button>
                {prev && (
                  <a
                    class="prev"
                    href={prev}
                    target="_blank"
                    onClick="e => e.stopPropagation()"
                  ></a>
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
  let overlay = card.querySelector(".overlay");
  let image = card.querySelector("img");

  card.style.transitionDuration = "0ms";
  overlay.style.transitionDuration = "0ms";
  image.style.transitionDuration = "0ms";

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
                            }deg)`;

  image.style.transform = `scale(1)
                             translateX(${
                               ((rect.width - x) / rect.width - 0.5) * 25
                             }px)
                             translateY(${
                               ((rect.height - y) / rect.height - 0.5) * 25
                             }px)`;
}

function restoreCardDimensions(e) {
  let card = e.currentTarget;
  let overlay = card.querySelector(".overlay");
  let image = card.querySelector("img");

  card.style.transitionDuration = "500ms";
  overlay.style.transitionDuration = "500ms";
  image.style.transitionDuration = "500ms";
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  image.style.transform = "scale(1)";
  overlay.style.opacity = "0";
}
