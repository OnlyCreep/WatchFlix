import React, { useContext, useEffect, useRef, useState } from "react";
import "./styles.css";
import NavMinor from "../SearchPage/NavMinor/NavMinor";
import Footer from "../MainPage/Footer/Footer";
import { IoIosArrowDown } from "react-icons/io";
import {
  TfiLayoutGrid2Alt,
  TfiLayoutGrid3Alt,
  TfiLayoutListThumb,
} from "react-icons/tfi";
import FilmElem_simple from "./FilmGrid/FilmElem_simple";
import FilmElem_sec from "./FilmGrid/FilmElem_sec";
import FilmElem_trd from "./FilmGrid/FilmElem_trd";
import { Context } from "../Context";

export default function SerialPage() {
  const [type_page, setType] = useState(
    `${
      document.location.pathname == "/films"
        ? "TOP_POPULAR_MOVIES"
        : "POPULAR_SERIES"
    }`
  );

  const [filterShown, showFilter] = useState(false);
  const [filter_opp, setFilter] = useState("date");
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(2);
  const [gridPos, setGrid] = useState(0);

  const filterElem = useRef(null);

  useEffect(() => {
    fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=${type_page}&page=${page}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "7b5d174c-c300-47ed-95a6-ee21c6c3b638",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) =>
        setFilms(
          json.items
            .sort((a, b) => (a.nameRu < b.nameRu ? 1 : -1))
            .sort((a, b) => (a.year < b.year ? 1 : -1))
        )
      )
      .catch((err) => console.log(err));
  }, [type_page]);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.contains(filterElem.current)) showFilter(false);
    });
  });

  function sortFilter(filter) {
    console.log(filter_opp);
    if (filter == "date") {
      setFilms(
        films
          .sort((a, b) => (a.nameRu < b.nameRu ? 1 : -1))
          .sort((a, b) => (a.year < b.year ? 1 : -1))
      );
    }
    if (filter == "rate")
      setFilms(
        films.sort((a, b) => (a.ratingKinopoisk < b.ratingKinopoisk ? 1 : -1))
      );
    if (filter == "name")
      setFilms(films.sort((a, b) => (a.nameRu < b.nameRu ? 1 : -1)));
  }

  const filterObj = {
    "Дате выпуска": "date",
    Названию: "name",
    Рейтингу: "rate",
  };

  const filterConv = {
    date: "Дате выпуска",
    name: "Названию",
    rate: "Рейтингу",
  };

  return (
    <>
      <NavMinor />
      <section className="film">
        <div className="film-panel">
          <div className="film-panel-filter">
            Сортировка по:{" "}
            <ul
              className="film-panel-filter-elem"
              onClick={(e) => {
                showFilter(!filterShown);
              }}
              ref={filterElem}
            >
              <li
                className="currentOpp"
                style={{ backgroundColor: `${filterShown ? "#ac008f" : ""}` }}
              >
                {filterConv[filter_opp]}
                <IoIosArrowDown />
              </li>
              {filterShown && (
                <div className="film-panel-filter-list">
                  <li
                    onClick={(e) => {
                      if (filterObj[e.currentTarget.innerText] != filter_opp) {
                        setFilter(filterObj[e.currentTarget.innerText]);
                        sortFilter(filterObj[e.currentTarget.innerText]);
                      }
                    }}
                    style={{
                      backgroundColor: `${
                        filterObj["Дате выпуска"] == filter_opp ? "#ac008f" : ""
                      }`,
                    }}
                  >
                    Дате выпуска
                  </li>
                  <li
                    onClick={(e) => {
                      if (filterObj[e.currentTarget.innerText] != filter_opp) {
                        setFilter(filterObj[e.currentTarget.innerText]);
                        console.log(filter_opp);
                        console.log(filterObj[e.currentTarget.innerText]);
                        sortFilter(filterObj[e.currentTarget.innerText]);
                      }
                    }}
                    style={{
                      backgroundColor: `${
                        filterObj["Рейтингу"] == filter_opp ? "#ac008f" : ""
                      }`,
                    }}
                  >
                    Рейтингу
                  </li>
                  <li
                    onClick={(e) => {
                      if (filterObj[e.currentTarget.innerText] != filter_opp) {
                        setFilter(filterObj[e.currentTarget.innerText]);
                        sortFilter(filterObj[e.currentTarget.innerText]);
                      }
                    }}
                    style={{
                      backgroundColor: `${
                        filterObj["Названию"] == filter_opp ? "#ac008f" : ""
                      }`,
                    }}
                  >
                    Названию
                  </li>
                </div>
              )}
            </ul>
          </div>
          <div className="film-panel-filter-grid">
            <TfiLayoutListThumb
              className={`film-panel-filter-grid-content ${
                gridPos == 0 ? "active" : ""
              }`}
              onClick={() => setGrid(0)}
            />
            <TfiLayoutGrid2Alt
              className={`film-panel-filter-grid-content ${
                gridPos == 1 ? "active" : ""
              }`}
              onClick={() => setGrid(1)}
            />
            <TfiLayoutGrid3Alt
              className={`film-panel-filter-grid-content ${
                gridPos == 2 ? "active" : ""
              }`}
              onClick={() => setGrid(2)}
            />
          </div>
        </div>
        <hr />
        <main
          className={`film-content ${
            gridPos == 0 ? "" : gridPos == 1 ? "sec" : gridPos == 2 ? "trd" : ""
          }`}
        >
          {gridPos == 0 &&
            films.map((el) => <FilmElem_simple value={{ el }} />)}
          {gridPos == 1 && films.map((el) => <FilmElem_sec value={{ el }} />)}
          {gridPos == 2 && films.map((el) => <FilmElem_trd value={{ el }} />)}
        </main>
        <div className="page_slider"></div>
      </section>
      <Footer />
    </>
  );
}
