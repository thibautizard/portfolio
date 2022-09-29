import React from "react";
import { RoughNotation } from "react-rough-notation";
import "./titleSection.scss";
export default function TitleSection(props) {
  return (
    <h2
      className="titre"
      // type={props.type}
      // iterations={props.iterations}
      // animationDelay={props.animationDelay}
      // animationDuration={props.animationDuration}
      // color={props.color}
      // show={props.show}
    >
      {props.title}
    </h2>
  );
}

TitleSection.defaultProps = {
  type: "underline",
  iterations: 4,
  animationDelay: 1000,
  animationDuration: 1000,
  color: "var(--secondary-color)",
  show: true,
};
