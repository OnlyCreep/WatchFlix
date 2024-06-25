import React from "react";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function FilmElem_trd(props) {
  const { el } = props.value;

  return (
    <div className="search_part-films-elem trd">
      <Link to={`/film&id=${el.kinopoiskId}`}>
        <img
          src={el.posterUrl}
          alt=""
          className="search_part-films-elem-image_trd"
        />
      </Link>
      <aside className="search_part-films-elem-infos">
        <div className="search_part-films-elem-info">
          <Link
            to={`/film&id=${el.kinopoiskId}`}
            className="search_part-films-elem-info-name trd"
          >
            {el.nameRu}
          </Link>
          <div className="search_part-films-elem-info-year_trd">
            {el.type == "TV_SERIES" ? "ТВ Сериал " : "Фильм "}/ {el.year}
          </div>
        </div>
      </aside>
    </div>
  );
}
