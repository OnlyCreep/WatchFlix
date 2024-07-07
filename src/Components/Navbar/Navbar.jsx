import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import { RxCross2 } from "react-icons/rx";
import { PiUserCircle } from "react-icons/pi";
import Input_search from "./Input_search";
import SearchLabel from "./SearchLabel";
import FilmCard from "./FilmCard";
import { IoIosArrowForward } from "react-icons/io";

export default function Navbar() {
  const [mobile, setMobile] = useState(window.innerWidth <= 768 ? true : false);
  const [searchActive, setSearch] = useState(false);
  const [films, setFilms] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("bfea6215-8e13-4034-aca3-8ba2c6f06f4b");

  const { panel, openPanel } = useContext(Context);

  useEffect(() => {
    if (!films) setToken("7b5d174c-c300-47ed-95a6-ee21c6c3b638");
    if (!films) setToken("ed2b6df7-2bbb-4601-90fb-0afef513796e");
    if (!films) setToken("089cb354-c6b5-49e5-b2d8-ceb003809973");
  }, [films]);

  useEffect(() => {
    setLoading(true);
    if (value != "")
      setTimeout(() => {
        fetch(
          `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=${value}&page=1`,
          {
            method: "GET",
            headers: {
              "X-API-KEY": token,
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((json) => {
            setFilms(json.items.slice(0, 6));
          })
          .then(() => {
            setTimeout(() => {
              setLoading(false);
            }, 500);
          })
          .catch((err) => console.log(err));
      }, 500);
    else {
      setLoading(false);
      fetch("response_1720244040786.json")
        .then((res) => res.json())
        .then((json) => setFilms(json.items))
        .catch((err) => console.log(err));
    }
  }, [value, token]);

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
            <SearchLabel value={{ setSearch }} />
            <Input_search value={{ setValue }} />
          </div>
        )}
        <aside className="navbar-opps-server_opps">
          {!mobile && (
            <>
              {!searchActive && <SearchLabel value={{ setSearch }} />}
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
              {!searchActive && <SearchLabel value={{ setSearch }} />}
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
            <SearchLabel value={{ setSearch }} />
            <Input_search value={{ setValue }} />
          </div>
          <hr className="lineSearch" />
        </>
      )}
      {!searchActive && <div className="navbar-line"></div>}

      {searchActive && (
        <div
          className="searchPanel"
          style={{
            alignItems: `${loading ? "center" : ""}`,
            display: `${loading ? "flex" : ""}`,
          }}
        >
          <div
            className="searchPanel-content"
            style={{ paddingTop: `${loading ? "0vw" : ""}` }}
          >
            {!loading && (
              <>
                <div className="searchPanel-content-title">
                  {value && (
                    <>
                      Результаты поиска
                      <IoIosArrowForward />
                    </>
                  )}
                  {!value && <>Часто ищут</>}
                </div>
                <div className="searchPanel-content-films">
                  {films.map((el) => (
                    <FilmCard value={el} />
                  ))}
                </div>
              </>
            )}
            {loading && (
              <div className="loading">
                <span className="loading-circle"></span>
                <span className="loading-circle"></span>
                <span className="loading-circle"></span>
              </div>
            )}
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
