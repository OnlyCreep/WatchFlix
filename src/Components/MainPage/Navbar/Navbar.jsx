import React, { useEffect, useState } from "react";
import "./styles.css";
import MainLogo from "../MainLogo/MainLogo";
import { NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";

export default function Navbar() {
  const [asidePanel, showPanel] = useState(false);

  return (
    <nav
      className="nav_mainPage"
      style={{ zIndex: `${asidePanel ? "99" : "100"}` }}
    >
      <>
        <aside
          className="sidePanel"
          style={{
            backgroundColor: `${asidePanel ? "rgba(0, 0, 0, 0.4)" : ""}`,
            height: `${asidePanel ? "100vh" : "0"}`,
          }}
          onClick={() => showPanel(!asidePanel)}
        ></aside>
        <ul
          className="sidePanel-opps"
          style={{
            transform: `translateX(${asidePanel ? "0" : "120%"})`,
            zIndex: `${asidePanel ? "99" : "-100"}`,
          }}
        >
          <div
            className="sidePanel-opps-left_elem"
            style={{ zIndex: `${asidePanel ? "99" : "-100"}` }}
          >
            <CgClose
              className="closeButt"
              onClick={() => showPanel(!asidePanel)}
            />
            <NavLink
              className="sidePanel-opps-elem-sign"
              onClick={() => (document.body.style.overflow = "visible")}
              to={"/"}
            >
              Главная
            </NavLink>
            <NavLink
              className="sidePanel-opps-elem-sign"
              onClick={() => (document.body.style.overflow = "visible")}
              to={"/sign"}
            >
              Войти
            </NavLink>
            <NavLink
              className="sidePanel-opps-elem"
              to={"/search"}
              onClick={() => (document.body.style.overflow = "visible")}
            >
              Поиск
            </NavLink>
            <NavLink
              to={"/films"}
              className="sidePanel-opps-elem"
              onClick={() => (document.body.style.overflow = "visible")}
            >
              Фильмы
            </NavLink>
            <NavLink
              to={"/serials"}
              className="sidePanel-opps-elem"
              onClick={() => (document.body.style.overflow = "visible")}
            >
              Сериалы
            </NavLink>
          </div>
        </ul>
      </>
      <ul className="nav_mainPage-opps">
        <div className="nav_mainPage-opps-left_elem">
          <NavLink className="nav_mainPage-opps-elem" to={"/search"}>
            Поиск
          </NavLink>
          <NavLink to={"/films"} className="nav_mainPage-opps-elem">
            Фильмы
          </NavLink>
          <NavLink to={"/serials"} className="nav_mainPage-opps-elem">
            Сериалы
          </NavLink>
        </div>
        <li className="nav_mainPage-opps-logo">
          <MainLogo />
        </li>
        <NavLink className="nav_mainPage-opps-elem-sign" to={"/sign"}>
          Войти
        </NavLink>
        <img
          src="/images/burgerMenu.svg"
          alt=""
          className="nav_mainPage-opps-elem-burger"
          onClick={() => {
            document.body.style.overflow = "hidden";
            showPanel(!asidePanel);
          }}
        />
      </ul>
    </nav>
  );
}
