import React, { useContext } from "react";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Context } from "../../Context";

export default function FilmElem_sec(props) {
  const { el } = props.value;

  const { setPage } = useContext(Context);

  return (
    <div className="film_sec">
      <Link
        to={`/film&id=${el.kinopoiskId}`}
        onClick={() => setPage(el.kinopoiskId)}
      >
        <img src={el.posterUrl} alt="" className="film_sec-poster" />
      </Link>
      <aside className="film_sec-info">
        <div className="film_sec-info-content">
          <Link
            onClick={() => setPage(el.kinopoiskId)}
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
