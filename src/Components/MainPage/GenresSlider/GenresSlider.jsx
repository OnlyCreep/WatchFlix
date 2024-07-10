import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function GenresSlider() {
  const [filmPosters, setPosters] = useState([]);
  const [posX, setPosX] = useState(0);
  const [maxRotate, setMax] = useState(0);
  const [simpleRot, setSimpleRot] = useState(3);
  const [gap, setGap] = useState(0);
  const [sizes, setSizes] = useState({
    block: 320,
    posterH: 200,
  });
  const [swip, setSwip] = useState(true);

  const slide = useRef(null);

  useEffect(() => {
    setSwip(false);
    setTimeout(() => {
      setSwip(true);
    }, 600);
  }, [posX]);

  function handleSizeChange() {
    setPosX(0);

    setGap((window.innerWidth * 2.61) / 100);

    setSizes({
      block: (window.innerWidth * 16.7) / 100,
      posterH: (window.innerWidth * 10.45) / 100,
    });
  }

  useEffect(() => {
    fetch("forGenres_films.json")
      .then((res) => res.json())
      .then((json) => setPosters(json.items))
      .catch((err) => console.log(err));
  }, [null]);

  useEffect(() => {
    setGap((window.innerWidth * 2.61) / 100);

    setPosX(0);

    setSizes({
      block: (window.innerWidth * 16.7) / 100,
      posterH: (window.innerWidth * 10.45) / 100,
    });
  }, [null]);

  useEffect(() => {
    window.addEventListener("resize", handleSizeChange);
  }, []);

  useEffect(() => {
    if (slide.current)
      setMax((sizes.block + 50) * (filmPosters.length - 2 - simpleRot));
  }, [filmPosters]);

  return (
    <main className="genres_content">
      <h1 className="genres_slider-title">Жанры</h1>
      <section className="genres_slider">
        <div>
          <div
            className="genres_slider-content"
            style={{ transform: `translateX(${-posX}px)`, gap: `${gap}px` }}
          >
            {filmPosters.map((el, i) => (
              <Link
                to={"#"}
                className="genres_slider-slide"
                ref={slide}
                style={{ "--size": `${sizes.block}px` }}
              >
                <div className="genres_slider-slide-posters">
                  {el.posters.map((poster) => (
                    <img
                      src={poster}
                      alt=""
                      className="genres_slider-slide-posters-elem"
                      style={{
                        "--heightP": `${sizes.posterH}px`,
                      }}
                    />
                  ))}
                </div>
                <h1 className="genres_slider-slide-posters-title">
                  {el.genre}
                </h1>
              </Link>
            ))}
          </div>
        </div>
        <div className="sliders_trd-content-arrows">
          <button
            className="sliders_trd-content-arrows-elem left"
            style={{ display: `${posX == 0 ? "none" : "grid"}` }}
            onClick={() => {
              if (swip) {
                if (posX - (sizes.block + 50) * simpleRot >= 0)
                  setPosX(posX - (sizes.block + 50) * simpleRot);
                else setPosX(posX - 0 - posX);
              }
            }}
          >
            <img src="/images/arrow.svg" alt="" />
          </button>
          <button
            className="sliders_trd-content-arrows-elem right"
            style={{ display: `${posX >= maxRotate ? "none" : "grid"}` }}
            onClick={() => {
              if (swip) {
                if (posX + (sizes.block + 50) * simpleRot <= maxRotate)
                  setPosX(posX + (sizes.block + 50) * simpleRot);
                else setPosX(posX + maxRotate - posX + 50);
              }
            }}
          >
            <img src="/images/arrow.svg" alt="" />
          </button>
        </div>
      </section>
    </main>
  );
}
