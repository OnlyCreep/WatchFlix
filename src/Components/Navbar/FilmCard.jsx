import React, { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";

export default function FilmCard(props) {
  const el = props.value;

  const { setPage } = useContext(Context);

  return (
    <Link
      key={el.kinopoiskId}
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
      <span className="searchPanel-content-films-elem-name">{el.nameRu}</span>
    </Link>
  );
}
