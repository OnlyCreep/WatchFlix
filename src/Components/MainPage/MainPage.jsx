import React, { useCallback, useContext, useEffect, useState } from "react";
import "./styles.css";
import Navbar from "../Navbar/Navbar";
import Mainslider from "./Mainslider/Mainslider";
import Footer from "./Footer/Footer";
import MinorSlider from "./MinorSlider/MinorSlider";
import GenresSlider from "./GenresSlider/GenresSlider";
import MainPoster from "./MainPoster/MainPoster";
import { RxCross2 } from "react-icons/rx";
import { LuLogIn } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../Context";
import Mobilepanel from "../MobilePanel/Mobilepanel";

export default function MainPage() {
  document.title = "WatchFlix - главная";

  const { panel, openPanel } = useContext(Context);

  return (
    <>
      <div className={`main_cover ${panel ? "bias" : ""}`}>
        <Navbar />
        <Mainslider />
        <section className="sliders_trd">
          <MinorSlider
            value={{
              title: "Подборка из разных коллекций",
              req: "response_1719974325600.json",
            }}
          />
          <MinorSlider
            value={{
              title: "Топ 10 фильмов",
              req: "response_1719974370770.json",
              conditional_function: (film) => {
                return film.slice(0, 10);
              },
            }}
          />
          <MinorSlider
            value={{
              title: "Драмы",
              req: "response_1719974414567.json",
            }}
          />
        </section>
        <GenresSlider />
        <MainPoster />
        <section className="sliders_trd">
          <MinorSlider
            value={{
              title: "Фантастика",
              req: "response_1720090392281.json",
            }}
          />
          <MinorSlider
            value={{
              title: "Южная корея",
              req: "response_1720090451567.json",
            }}
          />
          <MinorSlider
            value={{
              title: "Топ 10 сериалов",
              req: "response_1720090535124.json",
              conditional_function: (film) => {
                return film.slice(0, 10);
              },
            }}
          />
          <MinorSlider
            value={{
              title: "Русская комедия",
              req: "response_1720103766577.json",
            }}
          />
        </section>
        <Footer />
      </div>
<Mobilepanel />
    </>
  );
}
