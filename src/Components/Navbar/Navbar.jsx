import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import { RxCross2 } from "react-icons/rx";
import { PiUserCircle } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";

export default function Navbar(props) {
  const [mobile, setMobile] = useState(window.innerWidth <= 768 ? true : false);
  const [searchActive, setSearch] = useState(false);
  const [films, setFilms] = useState([]);

  const { panel, openPanel, setPage } = useContext(Context);

  useEffect(() => {
    fetch("response_1720244040786.json")
      .then((res) => res.json())
      .then((json) => setFilms(json.items))
      .catch((err) => console.log(err));
  }, [null]);

  window.addEventListener("resize", () => {
    openPanel(false);

    if (window.innerWidth <= 768) setMobile(true);
    else setMobile(false);
  });

  useEffect(() => {
    openPanel(false);

    if (window.innerWidth <= 768) setMobile(true);
    else setMobile(false);
  }, [null]);

  useEffect(() => {
    if (searchActive || panel) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [searchActive, panel]);

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
          {!searchActive && (
            <>
              {!mobile && (
                <>
                  <Link to={"/films"}>Фильмы</Link>
                  <Link to={"/serials"}>Сериалы</Link>
                  <Link to={"/for-children"}>Детям</Link>
                  <Link to={"/sport"}>Спорт</Link>
                  <Link to={"/news"}>Новости</Link>
                </>
              )}
            </>
          )}
        </aside>
        {searchActive && !mobile && (
          <div className="searchActive_block">
            <label
              htmlFor="name"
              className="search"
              onClick={() => {
                setSearch(true);
              }}
            >
              <IoIosSearch />
            </label>
            <input
              type="text"
              className="searchInput"
              placeholder="Название сериала или фильма"
              id="name"
              autoComplete="off"
            />
          </div>
        )}
        <aside className="navbar-opps-server_opps">
          {!mobile && (
            <>
              {!searchActive && (
                <label
                  htmlFor="name"
                  className={`search ${searchActive ? "active" : ""}`}
                  onClick={() => {
                    setSearch(true);
                  }}
                >
                  <IoIosSearch />
                </label>
              )}
              {!searchActive && (
                <li className="navbar-opps-server_opps-line"></li>
              )}
              {searchActive && (
                <RxCross2
                  className="searchCross"
                  onClick={() => {
                    setSearch(false);
                  }}
                />
              )}
              <Link to={"/sign"} className="navbar-opps-server_opps-auth_opp">
                <span>Войти</span>
                <PiUserCircle className="userIcon" />
              </Link>
            </>
          )}
          {mobile && (
            <>
              {!searchActive && (
                <label
                  htmlFor="name"
                  className="search"
                  onClick={() => {
                    setSearch(true);
                  }}
                >
                  <IoIosSearch />
                </label>
              )}
              {searchActive && (
                <RxCross2
                  className="searchCross"
                  onClick={() => {
                    setSearch(false);
                  }}
                />
              )}
              <Link to={"/sign"} className="navbar-opps-server_opps-auth_opp">
                <img src="/images/auth_icon.svg" alt="" />
              </Link>

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
      {searchActive && mobile && (
        <>
        <hr className="lineSearch" />
          <div className="searchActive_block">
            <label
              htmlFor="name"
              className="search"
              onClick={() => {
                setSearch(true);
              }}
            >
              <IoIosSearch />
            </label>
            <input
              type="text"
              className="searchInput"
              placeholder="Название сериала или фильма"
              id="name"
              autoComplete="off"
            />
          </div>
          <hr className="lineSearch" />
        </>
      )}
      {!searchActive && <div className="navbar-line"></div>}

      {searchActive && (
        <div className="searchPanel">
          <div className="searchPanel-content">
            <div className="searchPanel-content-title">Часто ищут</div>
            <div className="searchPanel-content-films">
              {films.map((el) => (
                <Link
                  to={`/film&id=${el.kinopoiskId}`}
                  onClick={() => {
                    setPage(el.kinopoiskId);
                  }}
                  className="searchPanel-content-films-elem"
                >
                  <img
                    src={el.posterUrl}
                    alt=""
                    className="searchPanel-content-films-elem-poster"
                  />
                  <span className="searchPanel-content-films-elem-name">
                    {el.nameRu}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      <div
        className={`navbar-cover ${searchActive ? "active" : ""}`}
        onClick={() => setSearch(false)}
      ></div>
    </nav>
  );
}
