import React, { useContext } from "react";
import { Context } from "../../../Context";

export default function SignPanel() {

  return (
    <form className="panel">
      <div className="panel-form sign">
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
      <div className="panel-form sign">
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
      <button className="panel-butt sign" type="button">
        Войти
      </button>
    </form>
  );
}
