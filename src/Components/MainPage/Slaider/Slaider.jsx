import React, { useContext, useEffect, useRef, useState } from "react";
import "./styles.css";
import { Context } from "../../Context";

export default function Slaider() {
  let { films } = useContext(Context);
  films = films.slice(0, 3);

  const [queue, setQueue] = useState(1);
  const [posX, setPosX] = useState(0);
  const [adaptW, setAdapt] = useState(0);

  return (
    <section className="slaider">
      <h1 className="slaider-title">Самые просматриваемые фильмы</h1>
      <main className="slaider-current">
        {films.map((el, i) => (
          <div
            onClick={(e) => {
              if (i != films.length) {
                if (!e.currentTarget.classList.contains("active")) {
                  if (i < queue) {
                    setQueue(i);
                    setPosX(posX + e.currentTarget.clientWidth + 80);
                  } else {
                    setQueue(i);
                    setPosX(posX - (e.currentTarget.clientWidth + 100));
                  }
                }
              }
            }}
            className={`slaider-current-elem ${i == queue ? "active" : ""}`}
            key={el.kinopoiskId}
            style={{
              transform: `${`translateX(${posX}px)`}`,
            }}
          >
            <img
              src={el.posterUrl}
              alt=""
              className="slaider-current-elem-image"
            />
            <div className="slaider-current-elem-name">{el.nameRu}</div>
          </div>
        ))}
      </main>
    </section>
  );
}
