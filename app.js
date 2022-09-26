// To install all needed libraries
// First run : npm i webpack babel-loader @babel/preset-react @babel/core babel-preset-react html-webpack-plugin webpack-dev-server css-loader style-loader @babel/plugin-proposal-class-properties webpack-cli -D && npm i react react-dom -S
// Then : touch .babelrc && touch webpack.config.js && mkdir src && touch index.html index.js
// Eventually add to scripts in package.json : "start": "webpack serve --config webpack.config.js"

import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/sections/header/header";
import Projets from "./src/sections/projets/projets";
import Prestations from "./src/sections/prestations/prestations";
import Reseaux from "./src/components/reseaux/reseaux";
import Waves from "./src/components/waves/waves";
import AOS from "aos";

import "./styles/main.scss";

const App = () => {
  return (
    <>
      <Header />
      <Projets />
      <Waves fill="#07111a" />
      <Prestations />
      <Reseaux />
    </>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

AOS.init();

// Apparition et disparition du curseur incitant à défiler
window.addEventListener("scroll", (_) => {
  const scroll = document.querySelector(".scroll");
  const position = parseInt(window.scrollY);
  scroll.setAttribute("data-aos-delay", "0");
  scroll.style.opacity = position !== 0 ? "0" : "1";
});