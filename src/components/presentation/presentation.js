import React from "react";
import pp from "../../../public/img/photo.png";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

function Presentation() {
  return (
    <>
      <section id="presentation">
        <div
          class="text"
          data-aos="zoom-out"
          data-os-delay="1000"
          data-aos-duration="1500"
        >
          <h4 class="roles">Sites et applications web </h4>
          <h4 class="name">
            THIBAUT
            <br /> IZARD
          </h4>
          <p>
            <RoughNotation
              iterations="1"
              color="var(--secondary-color)"
              show="true"
              animationDelay="2000"
              animationDuration="1500"
            >
              Développeur web
            </RoughNotation>{" "}
            et{" "}
            <RoughNotation
              iterations="1"
              color="var(--secondary-color)"
              show="true"
              animationDelay="2500"
              animationDuration="1500"
            >
              UX/UI designer
            </RoughNotation>{" "}
            basé à <b>Toulouse</b> (France)
          </p>
          <button>
            <a href="#collaborations">COMMENT TRAVAILLER AVEC MOI</a>
          </button>
        </div>
        <img src={pp} data-aos="zoom-out" data-aos-duration="1500" />
      </section>
      <a
        href="#realisations"
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-delay="3000"
        data-aos-anchor-placement="bottom-bottom"
        class="scroll"
      ></a>
    </>
  );
}

export default Presentation;