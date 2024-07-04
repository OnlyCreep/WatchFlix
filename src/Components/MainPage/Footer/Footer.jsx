import React, { useEffect, useState } from "react";
import "./styles.css";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  const [mobile, setMobile] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 630) setMobile(true);
    else setMobile(false);
  });

  useEffect(() => {
    if (window.innerWidth <= 630) setMobile(true);
    else setMobile(false);
  }, [null]);

  return (
    <footer className="footer_content">
      <hr style={{ backgroundColor: "#CC00FF", width: "100%" }} />
      {!mobile && (
        <>
          <main className="footer_content-columns">
            <ul className="footer_content-columns-content">
              <div className="footer_content-columns-content-title">
                Разделы
              </div>
              <Link to={"/serials"}>Сериалы</Link>
              <Link to={"#"}>Новости</Link>
              <Link to={"/films"}>Фильмы</Link>
              <Link to={"#"}>Детям</Link>
              <Link to={"#"}>Спорт</Link>
            </ul>
            <ul className="footer_content-columns-content">
              <div className="footer_content-columns-content-title">О нас</div>
              <Link to={"#"}>Политика конфиденциальности</Link>
              <Link to={"#"}>Пользовательское соглашение</Link>
              <Link to={"#"}>Сайт WatchFlix</Link>
              <Link to={"#"}>О компании</Link>
            </ul>
            <ul className="footer_content-columns-content">
              <div className="footer_content-columns-content-title">Другое</div>
              <Link to={"#"}>Рекламодателям</Link>
              <Link to={"#"}>Частые вопросы</Link>
              <Link to={"#"}>Вакансии</Link>
              <Link to={"#"}>Акции</Link>
            </ul>
            <ul className="footer_content-columns-content">
              <div className="footer_content-columns-content-title">
                Служба поддержки
              </div>
              <Link to={"#"}>Написать в службу поддержки</Link>
              <Link to={"#"}>Контакты службы</Link>
            </ul>
          </main>
          <div className="footer_content-social">
            <div className="footer_content-social-logo_n_copy">
              <div className="footer_content-social-logo">
                <span style={{ color: "#CC00FF" }}>Watch</span>
                <span style={{ color: "#FF00C7" }}>Flix</span>
              </div>
              <div className="footer_content-social-copy">
                © 2024 <br />
                Все права защищены
              </div>
            </div>
            <div className="footer_content-social-links">
              <img src="/images/social_icon04.svg" alt="" />
              <img src="/images/social_icon03.svg" alt="" />
              <img src="/images/social_icon02.svg" alt="" />
              <img src="/images/social_icon01.svg" alt="" />
            </div>
          </div>
        </>
      )}
      {mobile && (
        <>
          <div className="footer_content-social-logo_n_copy">
            <div className="footer_content-social-logo">
              <span style={{ color: "#CC00FF" }}>Watch</span>
              <span style={{ color: "#FF00C7" }}>Flix</span>
            </div>
            <div className="footer_content-social-copy">
              © 2024 <br />
              Все права защищены
            </div>
          </div>
          <main className="mobile_columns">
            <hr />
            <ul
              className="mobile_columns-content"
              onClick={(e) => {
                e.currentTarget.style = `--real_height:${e.currentTarget.scrollHeight}px;`;
                if (!e.currentTarget.classList.contains("active"))
                  e.currentTarget.classList.add("active");
                else e.currentTarget.classList.remove("active");
              }}
            >
              <div className="mobile_columns-content-title">
                <span>О нас</span>
                <IoIosArrowDown className="mobile_columns-content-arrow" />
              </div>
              <Link to={"#"}>Политика конфиденциальности</Link>
              <Link to={"#"}>Пользовательское соглашение</Link>
              <Link to={"#"}>Сайт WatchFlix</Link>
              <Link to={"#"}>О компании</Link>
            </ul>
            <hr />
            <ul
              className="mobile_columns-content"
              onClick={(e) => {
                e.currentTarget.style = `--real_height:${e.currentTarget.scrollHeight}px;`;
                if (!e.currentTarget.classList.contains("active"))
                  e.currentTarget.classList.add("active");
                else e.currentTarget.classList.remove("active");
              }}
            >
              <div className="mobile_columns-content-title">
                <span>Другое</span>
                <IoIosArrowDown className="mobile_columns-content-arrow" />
              </div>
              <Link to={"#"}>Рекламодателям</Link>
              <Link to={"#"}>Частые вопросы</Link>
              <Link to={"#"}>Вакансии</Link>
              <Link to={"#"}>Акции</Link>
            </ul>
            <hr />
            <ul
              className="mobile_columns-content"
              onClick={(e) => {
                e.currentTarget.style = `--real_height:${e.currentTarget.scrollHeight}px;`;
                if (!e.currentTarget.classList.contains("active"))
                  e.currentTarget.classList.add("active");
                else e.currentTarget.classList.remove("active");
              }}
            >
              <div className="mobile_columns-content-title">
                <span>Служба поддержки</span>
                <IoIosArrowDown className="mobile_columns-content-arrow" />
              </div>
              <Link to={"#"}>Написать в службу поддержки</Link>
              <Link to={"#"}>Контакты службы</Link>
            </ul>
            <hr />
            <ul
              className="mobile_columns-content"
              onClick={(e) => {
                e.currentTarget.style = `--real_height:${e.currentTarget.scrollHeight}px;`;
                if (!e.currentTarget.classList.contains("active"))
                  e.currentTarget.classList.add("active");
                else e.currentTarget.classList.remove("active");
              }}
            >
              <div className="mobile_columns-content-title">
                <span>Разделы</span>
                <IoIosArrowDown className="mobile_columns-content-arrow" />
              </div>
              <Link to={"/serials"}>Сериалы</Link>
              <Link to={"#"}>Новости</Link>
              <Link to={"/films"}>Фильмы</Link>
              <Link to={"#"}>Детям</Link>
              <Link to={"#"}>Спорт</Link>
            </ul>
            <hr />
          </main>
          <div className="footer_content-social-links">
            <img src="/images/social_icon04.svg" alt="" />
            <img src="/images/social_icon03.svg" alt="" />
            <img src="/images/social_icon02.svg" alt="" />
            <img src="/images/social_icon01.svg" alt="" />
          </div>
        </>
      )}
    </footer>
  );
}
