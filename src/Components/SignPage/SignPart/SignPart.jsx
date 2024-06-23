import React, { useContext, useEffect, useRef, useState } from "react";
import "./styles.css";
import RegPanel from "./Panels/RegPanel";
import SignPanel from "./Panels/SignPanel";

export default function SignPart() {
  const [ regPanel, setPanel ] = useState(true);
  const [panel, setCurPanel] = useState(<RegPanel />);

  const panelApp = useRef(null);

  useEffect(() => {
    if (regPanel) setTimeout(() => setCurPanel(<RegPanel />), 400);
    else setTimeout(() => setCurPanel(<SignPanel />), 400);
  }, [regPanel]);

  return (
    <section className="sign_part">
      <main
        className="sign_part-panel"
        style={{
          border: `${regPanel ? "" : "2px solid #ff00c7"}`,
        }}
      >
        <aside
          className={`sign_part-panel-box_coating ${regPanel ? "reg" : "sign"}`}
        >
          <div className="sign_part-panel-content" ref={panelApp}>
            <h1 className="sign_part-panel-content-title">
              {regPanel ? "Регистрация" : "Войти"}
            </h1>
            <div className="sign_part-panel-content-social_icons">
              <img src="/images/social_auth01.svg" alt="" />
              <img src="/images/social_auth02.svg" alt="" />
              <img src="/images/social_auth03.svg" alt="" />
              <img src="/images/social_auth04.svg" alt="" />
            </div>
            <div
              className="sign_part-panel-content-auth_opp"
              onClick={() => {
                if (panelApp.current)
                  panelApp.current.classList.add("panel_anim");
                setTimeout(() => {
                  panelApp.current.classList.remove("panel_anim");
                }, 1000);

                setPanel(!regPanel);
              }}
            >
              {" "}
              {regPanel ? "Уже есть аккаунт" : "Впервые на сайте"}
            </div>
          </div>
        </aside>
        <div className={`panel_auth ${regPanel ? "reg" : "sign"}`}>{panel}</div>
      </main>
    </section>
  );
}
