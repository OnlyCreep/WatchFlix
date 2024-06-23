import React, { useState } from "react";

export default function RegPanel(props) {
    const {regPanel, setPanel} = props.value;

  return (
    <form className="panel mobile">
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

      <div
        className="sign_part_mobile-panel-qw"
        onClick={() => setPanel(!regPanel)}
      >
        {regPanel ? "Уже есть аккаунт" : "Впервые на сайте"}
      </div>
      <button
        className={`panel-butt mobile ${regPanel ? "" : "sign"}`}
        type="button"
      >
        {regPanel ? "Регистрация" : "Войти"}
      </button>
    </form>
  );
}
