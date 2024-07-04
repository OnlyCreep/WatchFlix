import React, { useContext, useEffect, useState } from "react";
import Footer from "../MainPage/Footer/Footer";
import { Context } from "../Context";
import "./styles.css";
import KinoboxPlayer from "./KinoboxPlayer";
import { GoStarFill } from "react-icons/go";
import Navbar from "../Navbar/Navbar";

export default function WatchPage() {
  const { filmId } = useContext(Context);

  const [film, setFilm] = useState("");

  useEffect(() => {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`, {
      method: "GET",
      headers: {
        "X-API-KEY": "7b5d174c-c300-47ed-95a6-ee21c6c3b638",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setFilm(json))
      .catch((err) => console.log(err));
  }, [null]);

  const typeContent = {
    FILM: "Фильм",
    TV_SERIES: "Сериал",
  };

  console.log(film);

  return (
    <>
      <Navbar />
      <section className="watch_page">
        <main className="watch_page">
          <div className="watch_page-film_info">
            <img
              src={film.posterUrl}
              alt=""
              className="watch_page-film_info-poster"
            />
            <div className="watch_page-film_info-content">
              <div className="watch_page-film_info-content-rate">
                <GoStarFill className="watch_page-film_info-content-rate-star" />
                <div className="watch_page-film_info-content-rate-info">
                  {film.ratingKinopoisk}
                  <span className="min_rate">/10</span>
                </div>
              </div>
              <h1 className="watch_page-film_info-content-name">
                {film.nameRu}
              </h1>
              <div className="watch_page-film_info-content-year-type">
                <span>{typeContent[film.type]}</span> <span>{film.year}</span>
              </div>
              <h1 className="watch_page-film_info-content-description_title">Описание</h1>
              <div className="watch_page-film_info-content-description">
                {film.description}
              </div>
            </div>
          </div>
          <KinoboxPlayer value={filmId} />
        </main>
      </section>
      <Footer />
    </>
  );
}
