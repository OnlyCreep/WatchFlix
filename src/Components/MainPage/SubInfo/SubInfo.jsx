import React from "react";
import "./styles.css";

export default function SubInfo() {
  return (
    <section className="sub_info">
      <h1 className="sub_info-title">Платные подписки</h1>
      <h2 className="sub_info-title_fotr">С платной подпиской вы cможете</h2>
      <main className="sub_info-block">
        <div className="sub_info-block-elem">
          <img
            src="/images/sub_icon01.svg"
            alt=""
            className="sub_info-block-elem-image"
          />
          <div>
            <div className="sub_info-block-elem-fr_text">
              Смотреть фильмы и сериалы
            </div>
            <div className="sub_info-block-elem-sc_text">
              Без ограничения по времени
            </div>
          </div>
        </div>
        <div className="sub_info-block-elem">
          <div>
            <div className="sub_info-block-elem-fr_text">Без рекламы</div>
            <div className="sub_info-block-elem-sc_text">
              Наслаждаться просмотром не отвлекаясь на рекламу
            </div>
          </div>
          <img
            src="/images/sub_icon02.svg"
            alt=""
            className="sub_info-block-elem-image"
          />
        </div>
        <div className="sub_info-block-elem">
          <img
            src="/images/sub_icon03.svg"
            alt=""
            className="sub_info-block-elem-image"
          />
          <div>
            <div className="sub_info-block-elem-fr_text">С полным доступом</div>
            <div className="sub_info-block-elem-sc_text">
              Бесконечный лимит по просмотрам за месяц
            </div>
          </div>
        </div>
        <div className="sub_info-block-elem">
          <div>
            <div className="sub_info-block-elem-fr_text">
              Подтвержённый профиль
            </div>
            <div className="sub_info-block-elem-sc_text">
              Другие пользователи будут видеть что у вас есть платная подписка
            </div>
          </div>
          <img
            src="/images/sub_icon04.svg"
            alt=""
            className="sub_info-block-elem-image"
          />
        </div>
      </main>
      <button className="sub_info-butt">Купить подписку</button>
    </section>
  );
}
