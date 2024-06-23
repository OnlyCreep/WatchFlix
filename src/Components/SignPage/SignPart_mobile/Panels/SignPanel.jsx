import React from "react";

export default function SignPanel(props) {
  const { regPanel, setPanel } = props.value;

  return (
    <form className="panel mobile">
      <div className="panel-form">
        <input
          type="text"
          id="login"
          className="panel-form-field sign"
          autoComplete="off"
          placeholder=""
        />
        <label htmlFor="login" className="panel-form-placeholder sign">
          Логин
        </label>
      </div>
      <div className="panel-form">
        <input
          type="text"
          id="pass"
          className="panel-form-field sign"
          autoComplete="off"
          placeholder=""
        />
        <label htmlFor="pass" className="panel-form-placeholder sign">
          Пароль
        </label>
      </div>
      <div
        className={`sign_part_mobile-panel-qw ${regPanel ? "" : "sign"}`}
        onClick={() => setPanel(!regPanel)}
      >
        {regPanel ? "Уже есть аккаунт" : "Впервые на сайте"}
      </div>
      <button
        className={`panel-butt mobile ${regPanel ? "" : "sign"}`}
        type="button"
      >
        Войти
      </button>
    </form>
  );
}
