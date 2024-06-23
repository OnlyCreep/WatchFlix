import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { Context } from "../../Context";

export default function Selection() {
  let { films } = useContext(Context);
  films = films.slice(8, 14);

  const [lettersMax, setLetMax] = useState(0);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(resize, [width]);

  function resize() {
    if (window.innerWidth > 1234) setLetMax(1000);
    if (window.innerWidth <= 1234) setLetMax(310);
    if (window.innerWidth <= 905) setLetMax(230);
    if (window.innerWidth <= 768) setLetMax(150);
    if (window.innerWidth <= 400) setLetMax(100);
  }

  useEffect(() => resize(), [window.innerWidth]);

  return (
    <section className="selection">
      <h1 className="selection-title">Подборка новых фильмов</h1>
      <main className="selection-films">
        {films.map((el) => (
          <div className="selection-films-elem">
            <img
              src={el.posterUrl}
              alt=""
              className="selection-films-elem-image"
            />
            <div className="selection-films-elem-info">
              <div className="selection-films-elem-info-name">{el.nameRu}</div>
              {el.description && (
                <div className="selection-films-elem-info-description">
                  {el.description.length < lettersMax
                    ? el.description
                    : el.description.slice(0, lettersMax) + "..."}
                </div>
              )}
              <div className="selection-films-elem-info-genres">
                {el.genres.map((item, i) =>
                  i + 1 == el.genres.length
                    ? item.genre + "."
                    : item.genre + ", "
                )}
              </div>
              <div className="selection-films-elem-info-year">
                {el.year} года
              </div>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}
