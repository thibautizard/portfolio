import React from "react";
import { Slider, useSlider } from "./Slider.js";
import "./Prestation.scss";

// Libraries
import parse from "html-react-parser";

export default function Prestation({
  title,
  subtitle,
  prices,
  devise,
  formules,
  color,
  items,
  index,
}) {

  const { level, price, sliderRef } = useSlider(prices);

  return (
    <div className="container-prestation">
      <div className="header" style={{ backgroundColor: color }}>
        <h3 className="title">{title}</h3>
        <h5 className="subtitle">{subtitle}</h5>
        <p className="price">{`${price}${devise}`}</p>
        <p className="formule">{formules[level - 1]}</p>
        <Slider
          {...arguments[0]}
          sliderRef={sliderRef}
          isVisible={prices.length > 1}
        />
      </div>
      {items && (
        <ul className="details">
          {items
            .filter((item) => item.levels.includes(level))
            .map((item) => (
              <li className="item">
                <p className="name">{parse(item.name)}</p>
                <p className="precision">{parse(item.precision)}</p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
