import React from "react";
import { RoughNotation } from "react-rough-notation";

export default function TitleSection(props) {
  return (
    <RoughNotation
      className="titre"
      type={props.type}
      iterations={props.iterations}
      animationDelay={props.animationDelay}
      animationDuration={props.animationDuration}
      color={props.color}
      show={props.show}
    >
      {props.title}
    </RoughNotation>
  );
}

TitleSection.defaultProps = {
  type: "underline",
  iterations: 4,
  animationDelay: 1000,
  animationDuration: 2000,
  color: "var(--secondary-color)",
  show: true,
};
