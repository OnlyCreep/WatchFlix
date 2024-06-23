import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer_column_opps">
        <ul className="footer_column_opps-elem">
          <li className="footer_column_opps-elem-logo">
            <span className="footer_column_opps-elem-logo-part">Watch</span>
            <span className="footer_column_opps-elem-logo-part">Flix</span>
          </li>
          <li>Поиск</li>
          <li>Фильмы</li>
          <li>Сериалы</li>
        </ul>
      </div>
      <div className="footer_column_social">
        <h1 className="footer_column_social-title">
          Поддержите нас в соцсетях
        </h1>
        <div className="footer_column_social-icons">
          <img src="/images/social_icon01.svg" alt="" className="footer_column_social-icons-elem" />
          <img src="/images/social_icon02.svg" alt="" className="footer_column_social-icons-elem" />
          <img src="/images/social_icon03.svg" alt="" className="footer_column_social-icons-elem" />
          <img src="/images/social_icon04.svg" alt="" className="footer_column_social-icons-elem" />
        </div>
      </div>
    </footer>
  );
}
