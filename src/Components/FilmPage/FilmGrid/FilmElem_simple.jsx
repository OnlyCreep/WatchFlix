import React, { useContext } from "react";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Context } from "../../Context";

export default function FilmElem_simple(props) {
  const { el } = props.value;

  const { setPage } = useContext(Context);

  return (
    <div className="search_part-films-elem">
      <Link
        to={`/film&id=${el.kinopoiskId}`}
        onClick={() => setPage(el.kinopoiskId)}
      >
        <img
          src={el.posterUrl}
          alt=""
          className="search_part-films-elem-image"
        />
      </Link>
      <aside className="search_part-films-elem-infos">
        <div className="search_part-films-elem-info">
          <Link
            onClick={() => setPage(el.kinopoiskId)}
            to={`/film&id=${el.kinopoiskId}`}
            className="search_part-films-elem-info-name"
          >
            {el.nameRu}
          </Link>
          <div className="search_part-films-elem-info-genres">
            Жанры:{" "}
            {el.genres.map((item, i) =>
              i + 1 == el.genres.length ? item.genre + "." : item.genre + ", "
            )}
          </div>
          <div className="search_part-films-elem-info-year">
            {el.type == "TV_SERIES" ? "ТВ Сериал " : "Фильм "}/ {el.year}
          </div>
        </div>
      </aside>
    </div>
  );
}
