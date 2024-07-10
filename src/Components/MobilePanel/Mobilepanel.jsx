import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../Context";
import { RxCross2 } from "react-icons/rx";
import { LuLogIn } from "react-icons/lu";

export default function Mobilepanel() {
  const { panel, openPanel } = useContext(Context);

  return (
    <>
      {" "}
      <div
        className={`panel_cover ${panel ? "active" : ""}`}
        onClick={() => {
          openPanel(false);
        }}
      ></div>
      <aside className={`panel_mobile ${panel ? "active" : ""}`}>
        <div className="panel_mobile-sign_n_cross">
          <RxCross2 className="cross" onClick={() => openPanel(false)} />
          <Link to={"/sign"} className="sign_inPanel">
            Войти
            <LuLogIn className="login" />
          </Link>
        </div>
        <hr />
        <ul className="panel_mobile-opps" onClick={() => openPanel(false)}>
          <NavLink to={"/"}>Главная</NavLink>
          <NavLink to={"/films"}>Фильмы</NavLink>
          <Link>Сериалы</Link>
          <Link>Детям</Link>
          <Link>Спорт</Link>
          <Link>Новости</Link>
        </ul>
      </aside>
    </>
  );
}
