import React from "react";
import Navbar from "./sections/1_navbar/navbar";
import Presentation from "./sections/2_presentation/presentation";
import Background from "./sections/0_background/background";

export default function Home() {
  const style = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0vh 2vw 2vh 2vw",
    background: "var(--background-color)",
    background: "transparent",
  };

  return (
    <header style={{ style }}>
      <Background />
      <Navbar />
      <Presentation />
    </header>
  );
}
