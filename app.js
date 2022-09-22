// To install all needed libraries
// First run : npm i webpack babel-loader @babel/preset-react @babel/core babel-preset-react html-webpack-plugin webpack-dev-server css-loader style-loader @babel/plugin-proposal-class-properties webpack-cli -D && npm i react react-dom -S
// Then : touch .babelrc && touch webpack.config.js && mkdir src && touch index.html index.js
// Eventually add to scripts in package.json : "start": "webpack serve --config webpack.config.js"

import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./src/layouts/layout";
import Header from "./src/layouts/header";
import Realisations from "./src/layouts/realisations";
import AOS from "aos";
//import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";


import "./styles/main.scss";
import waves from "./public/img/waves.svg";

const App = () => {
  return (
    <Layout>
      <Header />
      <Realisations />
      <img src={waves} className="waves" />
    </Layout>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

AOS.init();

// library.add(fab, faCircleXmark);
// library.add(fab, faEye);
// library.add(fab, faArrowUpRightFromSquare);
// library.add(fab, faBan);

// function importAll(r) {
//   return r.keys().map(r);
// }

// const images = importAll(
//   require.context("./public/img", true, /\.(png|jpe?g|svg)$/)
// );
