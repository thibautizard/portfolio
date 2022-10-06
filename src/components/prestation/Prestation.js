import React from "react";
import "./Prestation.scss";

export default function Prestation({ title, subtitle, price }) {
  return (
    <div className="container-prestation">
      <div className="header">
        <h3 className="title">{title}</h3>
        <h5 className="subtitle">{subtitle}</h5>
        <p className="price">{price.base}</p>
      </div>
      <ul className="details">
        
      </ul>
    </div>
  );
}
