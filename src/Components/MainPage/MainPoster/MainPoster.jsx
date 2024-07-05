import React from "react";
import "./styles.css";

export default function MainPoster() {
  return (
    <section className="main_poster">
      <div className="main_poster-content">
        <div className="main_poster-content-elem">
          <img
            src="/images/posterLogo.svg"
            alt=""
            className="main_poster-content-elem-logo"
          />
          <div className="main_poster-content-elem-info">
            <span className="main_poster-content-elem-info-rate">8.1</span>
            <span className="main_poster-content-elem-info-year">2022</span>
            <span className="main_poster-content-elem-info-genre">Драма</span>
            <span className="main_poster-content-elem-info-age">18+</span>
          </div>
          <div className="main_poster-content-elem-description">
            Таргариены сражаются друг с другом и растят драконов. Эпическая сага
            о жестокой войне за Железный трон
          </div>
          <button className="main_poster-content-elem-watch">Смотреть</button>
        </div>
      </div>
    </section>
  );
}
