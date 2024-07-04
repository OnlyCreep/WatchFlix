import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import Slide from "./Slide";

export default function Mainslider() {
  const [films, setFilms] = useState([]);
  const [sliderWidth, setWidth] = useState("none");
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(false);
  const [clones, setClones] = useState([]);
  const [slideSwip, setSwip] = useState(true);
  const [proto_index, setProtoI] = useState(false);
  const [gap_elem, setGap] = useState(30);
  const [touchWidth, setTWidth] = useState(sliderWidth);
  const [touchActive, setTouch] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [size, setSize] = useState({
    height: 650,
    width: 1150,
  });

  const handleSizeChange = () => {
    if (window.innerWidth <= 1440) setGap(25);
    if (window.innerWidth <= 768) setGap(20);
    if (window.innerWidth <= 480) setGap(10);

    setSize({
      height: (window.innerWidth * 35) / 100 + (1920 - window.innerWidth) / 22,
      width: (window.innerWidth * 60) / 100 + (1920 - window.innerWidth) / 16,
    });
  };

  function right_swip() {
    if (slideSwip) {
      setIndex(index - 1);
      setSwip(false);
      if (index != 1) setTransition(true);
      setWidth(sliderWidth + (size.width + gap_elem));
      setTimeout(() => {
        setSwip(true);
        setTWidth(sliderWidth);
      }, 600);
    }
  }

  function left_swip() {
    if (slideSwip) {
      setIndex(index + 1);
      setSwip(false);
      if (index != films.length - 1 + clones.length) setTransition(true);
      setWidth(sliderWidth - (size.width + gap_elem));
      setTimeout(() => {
        setSwip(true);
        setTWidth(sliderWidth);
      }, 600);
    }
    setTWidth(sliderWidth);
  }

  useEffect(() => {
    if (window.innerWidth <= 1440) setGap(25);
    if (window.innerWidth <= 768) setGap(20);
    if (window.innerWidth <= 480) setGap(10);

    setSize({
      height: (window.innerWidth * 35) / 100,
      width: (window.innerWidth * 60) / 100,
    });
  }, [null]);

  useEffect(() => {
    window.addEventListener("resize", handleSizeChange);
  }, []);

  const slider = useRef(null);

  useEffect(() => {
    fetch("response_1719636419183.json", {
      method: "GET",
      headers: {
        "X-API-KEY": "7b5d174c-c300-47ed-95a6-ee21c6c3b638",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setFilms(json.items))
      .catch((err) => console.log(err));
  }, [null]);

  useEffect(() => {
    if (films != 0)
      setClones([
        <Slide
          value={{
            film: films[films.length - 4],
            non_seen: index == 20,
            size,
          }}
        />,
        <Slide
          value={{
            film: films[films.length - 3],
            non_seen: index == 21,
            size,
          }}
        />,
        <Slide
          value={{
            film: films[films.length - 2],
            non_seen: index == 2,
            size,
          }}
        />,
        <Slide
          value={{
            film: films[films.length - 1],
            non_seen: index == 3,
            size,
          }}
        />,
      ]);
  }, [films, index]);

  useEffect(() => {
    setTransition(false);
    setIndex(Math.round(films.length / 2 - 1) + Math.round(clones.length / 2));
    if (size)
      if ((films.length + clones.length) % 2 == 0) {
        setWidth(size.width / 2 + gap_elem / 2);
      } else setWidth(0);

    setTWidth(sliderWidth);
  }, [proto_index, size]);

  useEffect(() => {
    if (
      document.querySelectorAll(".main_slider-slide")[
        films.length - 1 + clones.length - 1
      ]
    ) {
      if (index == 2)
        document
          .querySelectorAll(".main_slider-slide")
          [films.length - 1 + clones.length - 1].classList.remove("non_seen");
      else
        document
          .querySelectorAll(".main_slider-slide")
          [films.length - 1 + clones.length - 1].classList.add("non_seen");
    }
    if (index == 1) {
      setIndex(films.length + 1);
      if (slider.current)
        setTimeout(() => {
          setTransition(false);
          setWidth(-sliderWidth + (size.width + gap_elem));
        }, 600);
    }
    if (index == films.length - 1 + clones.length - 1) {
      if (slider.current) setIndex(2);
      setTimeout(() => {
        setTransition(false);
        setWidth(-sliderWidth - (size.width + gap_elem));
      }, 600);
    }
  }, [index, films]);

  return (
    <section
      className="main_slider"
      style={{ opacity: `${sliderWidth != "none" ? 1 : 0}` }}
    >
      <main
        ref={slider}
        className={`slider_elem ${transition ? "loaded" : ""}`}
        style={{
          "--slider_width": `${touchActive ? touchWidth : sliderWidth}px`,
          gap: `${gap_elem}px`,
        }}
        onLoad={() => setProtoI(!proto_index)}
        onTouchStart={(e) => {
          setStartPos(e.touches[0].clientX);
        }}
        onTouchMove={(e) => {
          if (slideSwip) {
            setTouch(true);
            setTransition(false);
          }
          setTWidth(sliderWidth - (startPos - e.touches[0].clientX));
        }}
        onTouchEnd={() => {
          if (slideSwip) {
            setTouch(false);
            setTransition(true);
          }
          if (
            sliderWidth > touchWidth + window.innerWidth / 8 &&
            touchWidth != startPos
          )
            left_swip();
          if (
            sliderWidth < touchWidth - window.innerWidth / 8 &&
            touchWidth != startPos
          )
            right_swip();
        }}
      >
        {clones[0]}
        {clones[1]}
        {clones[2]}
        {clones[3]}
        {films.map((el, i = 1) => (
          <Slide
            key={i + 4}
            value={{ film: el, non_seen: index == i + 4, size }}
          />
        ))}
      </main>
      <div className="arrows">
        <div className="arrow left" onClick={right_swip}>
          <img src="/images/arrow.svg" alt="" />
        </div>
        <div className="arrow right" onClick={left_swip}>
          <img src="/images/arrow.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
