import React from "react";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function FilmElem_sec(props) {
  const { el } = props.value;

  return (
    <div className="film_sec">
      <Link to={`/film&id=${el.kinopoiskId}`}>
        <img src={el.posterUrl} alt="" className="film_sec-poster" />
      </Link>
      <aside className="film_sec-info">
        <div className="film_sec-info-content">
          <Link
            to={`/film&id=${el.kinopoiskId}`}
            className="film_sec-info-content-name"
          >
            {el.nameRu}
          </Link>
          <div className="film_sec-info-content-genres">
            Жанры:{" "}
            {el.genres.map((item, i) =>
              i + 1 == el.genres.length ? item.genre + "." : item.genre + ", "
            )}
          </div>
          <div className="film_sec-info-content-year">
            {el.type == "TV_SERIES" ? "ТВ Сериал " : "Фильм "}/ {el.year}
          </div>
        </div>
      </aside>
    </div>
  );
}
