import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function MainTitle() {
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1024) {
      setPosY(0);
      setPosX(0);
    }
  });

  const [posY, setPosY] = useState(0);
  const [posX, setPosX] = useState(0);

  function handleParallax(e) {
    setPosY((e.clientY - window.innerWidth / 2) / 100);
    setPosX((e.clientX - window.innerHeight / 2) / 100);
  }
  return (
    <>
      <div
        className="parallax_skin"
        onMouseMove={(e) => {
          if (window.innerWidth > 1024) handleParallax(e);
        }}
      ></div>
      <section
        className="main_title"
        onMouseMove={(e) => {
          if (window.innerWidth > 1024) handleParallax(e);
        }}
      >
        <h1 className="main_title-elem">
          <span
            className="main_title-elem-polygon"
            style={{ "--posX": `${posX}px`, "--posY": `${posY}px` }}
          ></span>
          <span className="main_title-elem-text">
            Без <span style={{ color: "#D40080" }}>ограничений</span>
          </span>
          <span
            className="main_title-elem-polygon"
            style={{ "--posX": `${posX}px`, "--posY": `${posY}px` }}
          ></span>
        </h1>
        <h2 className="main_title-elem_sec">
          Лучшие <span style={{ color: "#FF00C7" }}>фильмы</span> и{" "}
          <span style={{ color: "#CC00FF" }}>сериалы</span>
        </h2>
        <Link to={"/films"}><button className="main_title-watch_butt">Смотреть</button></Link>
      </section>
    </>
  );
}
