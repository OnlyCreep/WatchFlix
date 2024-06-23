import React, { useContext } from "react";
import "./Styles.css";
import { Context } from "../../../Context";

export default function RegPanel() {

  return (
    <form className="panel">
      <div className="panel-form">
        <input
          type="text"
          id="login"
          className="panel-form-field"
          autoComplete="off"
          placeholder=""
        />
        <label htmlFor="login" className="panel-form-placeholder">
          Логин
        </label>
      </div>
      <div className="panel-form">
        <input
          type="text"
          id="email"
          className="panel-form-field"
          autoComplete="off"
          placeholder=""
        />
        <label htmlFor="email" className="panel-form-placeholder">
          Email
        </label>
      </div>
      <div className="panel-form">
        <input
          type="text"
          id="pass"
          className="panel-form-field"
          autoComplete="off"
          placeholder=""
        />
        <label htmlFor="pass" className="panel-form-placeholder">
          Пароль
        </label>
      </div>
      <div className="panel-form">
        <input
          type="text"
          id="pass_1"
          className="panel-form-field"
          autoComplete="off"
          placeholder=""
        />
        <label htmlFor="pass_1" className="panel-form-placeholder">
          Повтор пароля
        </label>
      </div>
      <button className="panel-butt" type="button">
        Регистрация
      </button>
    </form>
  );
}
