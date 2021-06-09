import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Action } from "./action";

export const Actions = () => (
  <div 
  className="myactions"
  
  >
    <ScrollAnimation
      delay={1000}f
      animateIn="bounceInLeft"
      animateOut="bounceOutLeft"
      initiallyVisible={false}
    >
      <Action
        title="СЧАСТЛИВЫЕ ЧАСЫ"
        amount="15%"
        bottomTitle="скидка в понендельник и четверг с 10 до 12 на популярные услуги"
      />
    </ScrollAnimation>
    <ScrollAnimation
      delay={2000}
      animateIn="bounceInLeft"
      animateOut="bounceOutLeft"
      initiallyVisible={false}
    >
      <Action
        title="СТУДЕНЧЕСКИЙ ЧЕТВЕРГ"
        amount="15%"
        bottomTitle="всем студентам скидка в четверг по студенческому билету"
      />
    </ScrollAnimation>
    <ScrollAnimation
      delay={3000}
      animateIn="bounceInLeft"
      animateOut="bounceOutLeft"
      initiallyVisible={false}
    >
      <Action
        title="С ДНЕМ РОЖДЕНИЯ!"
        amount="15%"
        bottomTitle="будьте особенно красивыми в день рождения"
      />
    </ScrollAnimation>
  </div>
);
