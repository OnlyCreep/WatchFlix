import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Footer from "../MainPage/Footer/Footer";

export default function FilmPage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1",
      {
        method: "GET",
        headers: {
          "X-API-KEY": "089cb354-c6b5-49e5-b2d8-ceb003809973",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => setFilms(json.items))
      .catch((err) => console.log(err));
  }, [null]);

  console.log(films);

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
        {films.map((el) => (
          <Link to={`/film&id=${el.kinopoiskId}`} className="film_page_main-elem">
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
