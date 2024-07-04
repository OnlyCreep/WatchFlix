import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";

export default function Slide(props) {
  const [imgWidth, setWidth] = useState(0);
  const [imgHeight, setHeight] = useState(0);
  const [imgColor, setColor] = useState(0);

  const slide = useRef(null);

  const { film } = props.value;
  const { non_seen } = props.value;
  const { size } = props.value;

  const {setPage} = useContext(Context)

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setWidth(img.width);
      setHeight(img.height);
    };
    img.src = film.coverUrl;
  }, [null]);

  return (
    <Link
    onClick={()=>setPage(film.kinopoiskId)}
    to={`${non_seen?"/film&id="+film.kinopoiskId : ""}`}
      ref={slide}
      className={`main_slider-slide ${!non_seen ? "non_seen" : ""}`}
      style={{
        "--poster": `url(${film.coverUrl})`,
        "--size_width": `${size.width}px`,
        "--size_height": `${size.height}px`,
      }}
    >
      <img src={film.logoUrl} alt="" className="main_slider-slide-logo" />
      <div className="main_slider-slide-info">
        <div className="main_slider-slide-info-content">
          <div className="main_slider-slide-info-rate">
            {film.ratingKinopoisk}
          </div>
          <div className="main_slider-slide-info-genre">
            {film.genres[0].genre}
          </div>
          <div className="main_slider-slide-info-year">{film.year}</div>
        </div>
        <div className="main_slider-slide-info-age">
          {film.ratingAgeLimits.slice(3, 5)}+
        </div>
      </div>
    </Link>
  );
}
