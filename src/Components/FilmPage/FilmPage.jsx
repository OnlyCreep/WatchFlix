import React, { useContext, useEffect, useRef, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Footer from "../MainPage/Footer/Footer";
import { Context } from "../Context";

export default function FilmPage() {
  const [films, setFilms] = useState([]);
  const [filmPage, setFilmPage] = useState(2);
  const [scrollChange, setChange] = useState(false);
  const [token, setToken] = useState("bfea6215-8e13-4034-aca3-8ba2c6f06f4b");

  useEffect(() => {
    if (!films) setToken("7b5d174c-c300-47ed-95a6-ee21c6c3b638");
    if (!films) setToken("ed2b6df7-2bbb-4601-90fb-0afef513796e");
    if (!films) setToken("089cb354-c6b5-49e5-b2d8-ceb003809973");
  }, [films]);

  const { setPage } = useContext(Context);

  function handleFilmsChange(e) {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      700
    )
      setChange(true);
  }

  useEffect(() => {
    document.addEventListener("scroll", handleFilmsChange);
    return () => {
      document.removeEventListener("scroll", handleFilmsChange);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = "visible";
  }, [null]);

  useEffect(() => {
    if (scrollChange) {
      fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=${filmPage}`,
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
          setFilms([...films, ...json.items]);
        })
        .then(() => setFilmPage((prevState) => prevState + 1))
        .catch((err) => console.log(err))
        .finally(() => setChange(false));
    }
  }, [scrollChange]);

  useEffect(() => {
    fetch(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1",
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
        setFilms(json.items);
      })
      .catch((err) => console.log(err));
  }, [null]);

  return (
    <>
      <header className="film_page_header">
        {" "}
        <div className="film_page_header-content">
          {" "}
          <Link to={"/"} className="film_page_header-content-logo">
            Watch<b>Flix</b>
          </Link>
          <div className="film_page_header-content-title">Фильмы</div>
          <div className="film_page_header-content-description">
            Смотрите разнообразные <b>фильмы</b> на нашем сайте
          </div>
        </div>
        <div className="film_page_header-bc"></div>
      </header>
      <main className="film_page_main">
        {films.map((el, i) => (
          <Link
            key={i}
            onClick={() => setPage(el.kinopoiskId)}
            to={`/film&id=${el.kinopoiskId}`}
            className="film_page_main-elem"
          >
            <div
              className="film_page_main-elem-poster"
              style={{ "--posterUrl": `url(${el.posterUrl})` }}
            ></div>
            <div className="film_page_main-elem-name">{el.nameRu}</div>
            <div className="film_page_main-elem-year_n_genre">
              {el.year}, {el.genres[0].genre}
            </div>
          </Link>
        ))}
      </main>
      <Footer />
    </>
  );
}
