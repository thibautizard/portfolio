import React from "react";
import Reseaux from "../components/reseaux/reseaux";

export default function Layout({ children }) {
  return (
    <div className="layout">
      {children}
      <Reseaux />
    </div>
  );
}

// Apparition et disparition du curseur incitant à défiler
window.addEventListener("scroll", (_) => {
  const scroll = document.querySelector(".scroll");
  const position = parseInt(window.scrollY);
  scroll.setAttribute("data-aos-delay", "0");
  scroll.style.opacity = position !== 0 ? "0" : "1";
});
