import React, { useState } from "react";
import "./styles.css";
import { Link, NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";

export default function NavMinor() {
  const [asidePanel, showPanel] = useState(false);

  return (
    <nav className="nav_minor">
      <ul className="nav_minor-opps">
        <Link to={"/"} className="nav_minor-oops-logo">
          <span className="logo_part">Watch</span>
          <span className="logo_part">Flix</span>
        </Link>
        <NavLink to={"/search"} className="nav_minor-oops-elem">
          Поиск
        </NavLink>
        <NavLink to={"/films"} className="nav_minor-oops-elem">
          Фильмы
        </NavLink>
        <NavLink to={"/serials"} className="nav_minor-oops-elem">
          Сериалы
        </NavLink>
        <NavLink to={"/sign"} className="nav_minor-oops-sign">
          Войти
        </NavLink>
        <img
          className="burger_menu"
          src="/images/burgerMenu.svg"
          alt=""
          onClick={() => {
            showPanel(!asidePanel);
          }}
        ></img>
      </ul>
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
    </nav>
  );
}
