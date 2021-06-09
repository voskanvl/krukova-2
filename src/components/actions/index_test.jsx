import React from "react";
// import ScrollAnimation from "react-animate-on-scroll";
import { Action } from "./action";

export const Actions = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: "50vh"
    }}
  >
    <Action
      title="СЧАСТЛИВЫЕ ЧАСЫ"
      amount="15%"
      bottomTitle="скидка в понендельник и четверг с 10 до 12 на популярные услуги"
    />
    <Action
      title="СТУДЕНЧЕСКИЙ ЧЕТВЕРГ"
      amount="15%"
      bottomTitle="всем студентам скидка в четверг по студенческому билету"
    />
    <Action
      title="С ДНЕМ РОЖДЕНИЯ!"
      amount="15%"
      bottomTitle="будьте особенно красивыми в день рождения"
    />
  </div>
);
