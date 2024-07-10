import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import { Context } from "./Context";
import SignPage from "./SignPage/SignPage";
import FilmPage from "./FilmPage/FilmPage";
import SerialPage from "./SerialPage/FilmPage";
import WatchPage from "./WatchPage/WatchPage";

export default function App() {
  const [films, setFilms] = useState([]);
  const [filmId, setPage] = useState(document.location.pathname.split("=")[1]);
  const [panel, openPanel] = useState(false);

  useEffect(()=>{
    openPanel(false)
    document.body.style.overflow = "visible"
  }, [null])

  useEffect(() => {
    fetch(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1",
      {
        method: "GET",
        headers: {
          "X-API-KEY": "7b5d174c-c300-47ed-95a6-ee21c6c3b638",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => setFilms(json.items))
      .catch((err) => console.log(err));
  }, [null]);

  return (
    <Context.Provider value={{ films, filmId, setPage, panel, openPanel }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sign" element={<SignPage />} />
          <Route path="/films" element={<FilmPage />} />
          <Route path={`/film&id=${filmId}`} element={<WatchPage />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
