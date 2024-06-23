import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import RegPanel from "./Panels/RegPanel";
import SignPanel from "./Panels/SignPanel";

export default function SignPart_mobile() {
  const [regPanel, setPanel] = useState(true);
  const [panel, setCurPanel] = useState(
    <RegPanel value={{ setPanel, regPanel }} />
  );
  const [title, setTitle] = useState("Регистрация")

  const main_panel = useRef(null);

  useEffect(() => {
    if (main_panel.current) main_panel.current.classList.add("animOpacity");
    if (!regPanel)
      setTimeout(
        () => {
          setTitle("Войти")
          setCurPanel(<SignPanel value={{ setPanel, regPanel }} />)},
        400
      );
    else
      setTimeout(
        () => {
          setTitle("Регистрация")
          setCurPanel(<RegPanel value={{ setPanel, regPanel }} />)},
        400
      );
    setTimeout(() => {
      main_panel.current.classList.remove("animOpacity")
    }, 1000);
  }, [regPanel]);

  return (
    <section className="sign_part_mobile">
      <main className={`sign_part_mobile-panel ${regPanel ? "" : "sign"}`}>
        <div ref={main_panel} className="main_panel">
          <h1 className="sign_part_mobile-panel-title">
            {title}
          </h1>
          <div className="sign_part_mobile-panel-social_icons">
            <img src="/images/social_auth01.svg" alt="" />
            <img src="/images/social_auth02.svg" alt="" />
            <img src="/images/social_auth03.svg" alt="" />
            <img src="/images/social_auth04.svg" alt="" />
          </div>
          {panel}
        </div>
      </main>
    </section>
  );
}
