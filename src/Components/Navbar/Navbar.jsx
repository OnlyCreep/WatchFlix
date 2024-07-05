import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { BiBody } from "react-icons/bi";
import { Context } from "../Context";

export default function Navbar(props) {
  const [mobile, setMobile] = useState(window.innerWidth <= 768 ? true : false);
  const { panel, openPanel } = useContext(Context);

  window.addEventListener("resize", () => {
    openPanel(false);

    if (window.innerWidth <= 768) setMobile(true);
    else setMobile(false);
  });

  return (
    <nav className="navbar">
      <ul className="navbar-opps">
        <aside className="navbar-opps-front_opps">
          <Link to={"/"}>
            <img
              src="/images/logo.svg"
              className="navbar-opps-front_opps-logo"
            />
          </Link>
          {!mobile && (
            <>
              <Link to={"/films"}>Фильмы</Link>
              <Link to={"/serials"}>Сериалы</Link>
              <Link to={"/for-children"}>Детям</Link>
              <Link to={"/sport"}>Спорт</Link>
              <Link to={"/news"}>Новости</Link>
            </>
          )}
        </aside>
        <aside className="navbar-opps-server_opps">
          {!mobile && (
            <>
              <Link to={"/sign"} className="navbar-opps-server_opps-auth_opp">
                <span>Войти</span>
                <img src="/images/auth_icon.svg" alt="" />
              </Link>
              <li className="navbar-opps-server_opps-line"></li>
              <img src="/images/search_icon.svg" alt="" className="search" />
            </>
          )}
          {mobile && (
            <>
              <Link to={"/sign"} className="navbar-opps-server_opps-auth_opp">
                <img src="/images/auth_icon.svg" alt="" />
              </Link>
              <img src="/images/search_icon.svg" alt="" className="search" />
              <img
                src="/images/burger_menu.svg"
                alt=""
                className="burger_menu"
                onClick={() => openPanel(true)}
              />
            </>
          )}
        </aside>
      </ul>
      <div className="navbar-line"></div>
    </nav>
  );
}
