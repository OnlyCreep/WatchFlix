import React, { useState } from "react";
import "./styles.css";
import { BiHeart } from "react-icons/bi";

export default function Search() {
  const [filterOn, setFilOn] = useState(false);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(2024);
  const [films, setFilms] = useState([]);
  const [inptVal, setVal] = useState("");
  const [warn, setWarn] = useState("");
  const [lettersMax, setMax] = useState(300);
  const [searchText, setText] = useState("");

  function search() {
    if (inptVal) {
      setText(inptVal);
      setWarn("");
      fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=${rate}&ratingTo=10&yearFrom=1960&yearTo=${year}&keyword=${encodeURI(
          inptVal
        )}&page=1`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "7b5d174c-c300-47ed-95a6-ee21c6c3b638",
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((json) => {
          if (
            json.items.filter(
              (el) => el.nameRu != null && el.ratingKinopoisk != null
            ) == ""
          )
            setWarn("По вашему запросу не найдено результатов");
          setFilms(
            json.items.filter(
              (el) => el.nameRu != null && el.ratingKinopoisk != null
            )
          );
        })
        .catch((err) => console.log(err));
    } else {
      setText("");
      setFilms("");
      setWarn("По вашему запросу не найдено результатов");
    }

    console.log(films);
  }

  return (
    <section className="search_part">
      {searchText || warn ? (
        <div className="search_text">Поиск по запросу: "{searchText}"</div>
      ) : (
        ""
      )}
      <form
        className="search_part-panel"
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            e.preventDefault();
            search();
          }
        }}
      >
        <div className="search_part-panel-field">
          <input
            type="text"
            className="search_part-panel-field-name"
            id="film"
            placeholder=""
            autoComplete="off"
            onChange={(e) => {
              setVal(e.target.value);
            }}
          />
          <label htmlFor="film" className="search_part-panel-field-label">
            Название
          </label>
          <img
            src="/images/filter_icon.svg"
            alt=""
            className="search_part-panel-field-filter"
            onClick={() => {
              setYear(2024);
              setRate(0);
              setFilOn(!filterOn);
            }}
          />
        </div>
        <button
          className="search_part-panel-butt"
          type="button"
          onClick={search}
        >
          Найти
        </button>
      </form>
      {filterOn && (
        <div className="search_part-filter_panel">
          <div className="search_part-filter_panel-rate">
            <h1 className="search_part-filter_panel-rate-title">Рейтинг</h1>
            <input
              type="range"
              className="search_part-filter_panel-rate-inpt"
              onChange={(e) => {
                setRate(e.target.value / 10);
              }}
            />
            <div className="search_part-filter_panel-rate-value">{rate}/10</div>
          </div>
          <div className="search_part-filter_panel-year">
            <h1 className="search_part-filter_panel-year-title">Год выпуска</h1>
            <div className="search_part-filter_panel-year_field">
              <div className="search_part-filter_panel-year-arrows">
                <img
                  src="/images/arrow01.svg"
                  alt=""
                  className="search_part-filter_panel-year-arrows-elem"
                  onClick={() => {
                    if (year != 1960) setYear(year - 1);
                  }}
                />
                <img
                  src="/images/arrow02.svg"
                  alt=""
                  className="search_part-filter_panel-year-arrows-elem"
                  onClick={() => {
                    if (year != 2024) setYear(year + 1);
                  }}
                />
              </div>
              <div className="search_part-filter_panel-year-value">{year}</div>
            </div>
          </div>
        </div>
      )}
      <main className="search_part-films">
        {warn && <div className="warn">{warn}</div>}
        {films &&
          films.map((el) => (
            <div className="search_part-films-elem">
              <img
                src={el.posterUrl}
                alt=""
                className="search_part-films-elem-image"
              />
              <aside className="search_part-films-elem-infos">
                <div className="search_part-films-elem-info">
                  <div className="search_part-films-elem-info-name">
                    {el.nameRu}
                  </div>
                  <div className="search_part-films-elem-info-genres">
                    Жанры:{" "}
                    {el.genres.map((item, i) =>
                      i + 1 == el.genres.length
                        ? item.genre + "."
                        : item.genre + ", "
                    )}
                  </div>
                  <div className="search_part-films-elem-info-year">
                    {el.year} года
                  </div>
                </div>
                <div className="search_part-films-elem-funcs">
                  <div className="inlike_icon">
                    <div className="mask"></div>
                    <BiHeart className="search_part-films-elem-funcs-inlike" />
                  </div>
                  <button className="search_part-films-elem-funcs-watch">
                    Смотреть
                  </button>
                </div>
              </aside>
            </div>
          ))}
      </main>
    </section>
  );
}
