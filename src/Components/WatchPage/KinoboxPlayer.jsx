import React, { useEffect, useRef } from "react";

function KinoboxPlayer(value) {
  const containerRef = useRef(null);
  const kpId = value.value;

  console.log(document.location.href);

  useEffect(() => {
    if (containerRef.current) {
      window.kbox(containerRef.current, {
        search: { kinopoisk: kpId },
        menu: {
          // Настройки меню
          enable: true, // Показывать меню
          default: "menu_list", // Вид меню для стандартных устройств
          mobile: "menu_button", // Вид меню для мобильных устройств
          format: "{N} :: {T} ({Q})", // Формат пункта меню
          limit: 1, // Максимальное количество элементов в меню
          open: false, // Открывать меню по умолчанию
        },
      });
    }
  }, [kpId]);

  return <div ref={containerRef} className="kinobox_player"></div>;
}

export default KinoboxPlayer;
