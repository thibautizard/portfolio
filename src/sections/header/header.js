import React from "react";
import Navbar from "../../components/navbar/navbar";
import Presentation from "../../components/presentation/presentation";
import "./header.scss";

export default function Home() {
  return (
    <header>
      <Navbar />
      <Presentation />
    </header>
  );
}
