import React, { useContext, useEffect, useRef, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Context } from "../../Context";

export default function MinorSlider(props) {
  const { title } = props.value;
  const { req } = props.value;
  const { conditional_function } = props.value;

  const { setPage } = useContext(Context);

  const slider = useRef(null);

  const [films, setFilms] = useState([]);
  const [posX, setPosX] = useState(0);
  const [maxPos, setMaxPos] = useState(0);
  const [gap, setGap] = useState(20);
  const [sizes, setSize] = useState({
    width: 340,
    height: 500,
  });
  const [maxRotate, setMaxRotate] = useState(3);
  const [slideSwip, setSwip] = useState(true);

  const [transition, setTransition] = useState(true);
  const [touchWidth, setTWidth] = useState(0);

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (touchWidth <= -1) setTWidth(0);
    if (touchWidth >= maxPos + sizes.width + gap + 1 + (20 - films.length))
      setTWidth(maxPos + sizes.width + gap + (20 - films.length));
  }, [touchWidth]);

  function handleResize() {
    if (window.innerWidth >= 1440) setGap(20);
    if (window.innerWidth <= 1024) {
      setMobile(true);
      setTransition(false);
      setGap(15);
    }
    if (window.innerWidth <= 768) setGap(10);
    if (window.innerWidth <= 480) setGap(5);
    if (window.innerWidth > 1024) {
      setTransition(true);
    }
    setSize({
      width: (window.innerWidth * 18) / 100,
      height: (window.innerWidth * 25) / 100,
    });
    setPosX(0);
  }

  useEffect(() => {
    if (window.innerWidth >= 1440) setGap(20);
    if (window.innerWidth <= 1024) {
      setMobile(true);
      setTransition(false);
      setGap(15);
    }
    if (window.innerWidth <= 768) setGap(10);
    if (window.innerWidth <= 480) setGap(5);
    if (window.innerWidth > 1024) {
      setTransition(true);
    }
    setSize({
      width: (window.innerWidth * 18) / 100,
      height: (window.innerWidth * 25) / 100,
    });
    setPosX(0);
  }, [null]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch(req)
      .then((res) => res.json())
      .then((json) => {
        if (conditional_function) setFilms(conditional_function(json.items));
        else setFilms(json.items);
      })
      .catch((err) => console.log(err));
  }, [null]);

  useEffect(() => {
    if (slider.current) setMaxPos((sizes.width + gap + 2) * (films.length - 6));
  }, [films, sizes]);

  return (
    <>
      <h1 className="sliders_trd-title">{title}</h1>
      <div className="sliders_trd-content" ref={slider}>
          <main
            className={`sliders_trd-slider ${transition ? "trans_on" : ""}`}
            style={{
              transform: `translateX(${-posX}px)`,
              gap: `${gap}px`,
            }}
          >
            {films.map((el, i) => (
              <Link
                key={i}
                to={`/film&id=${el.kinopoiskId}`}
                onClick={() => setPage(el.kinopoiskId)}
                style={{
                  "--poster_url": `url(${el.posterUrl})`,
                  "--poster_width": `${sizes.width}px`,
                  "--poster_height": `${sizes.height}px`,
                }}
                className="sliders_trd-slider-slide"
              ></Link>
            ))}
          </main>
        <div className="sliders_trd-content-arrows">
          <button
            className="sliders_trd-content-arrows-elem left"
            style={{
              display: `${posX ? "grid" : "none"}`,
            }}
            onClick={() => {
              if (slideSwip) {
                setSwip(false);
                setTimeout(() => {
                  setSwip(true);
                }, 600);
                if (posX - (sizes.width + gap + 2) * maxRotate >= 0)
                  setPosX(posX - (sizes.width + gap + 2) * maxRotate);
                else setPosX(posX + (0 - posX));
              }
            }}
          >
            <img src="/images/arrow.svg" alt="" />
          </button>
          <button
            className="sliders_trd-content-arrows-elem right"
            style={{
              display: `${posX >= maxPos ? "none" : "grid"}`,
            }}
            onClick={() => {
              if (slideSwip) {
                setSwip(false);
                setTimeout(() => {
                  setSwip(true);
                }, 600);
                if (posX + (sizes.width + gap + 2) * maxRotate <= maxPos)
                  setPosX(posX + (sizes.width + gap + 2) * maxRotate);
                else
                  setPosX(
                    posX +
                      maxPos -
                      posX +
                      sizes.width +
                      gap +
                      2 +
                      20 -
                      films.length
                  );
              }
            }}
          >
            <img src="/images/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
