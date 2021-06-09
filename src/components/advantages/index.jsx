import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./advantage.css";

const Col = ({ img, head, text, delay }) => (
  <div className="col-4 text-center ">
    <ScrollAnimation delay={delay} animateIn="tada" initiallyVisible={true}>
      {img}
    </ScrollAnimation>
    <ScrollAnimation animateIn="flipInY">
      <h5>{head}</h5>
    </ScrollAnimation>
    <ScrollAnimation delay={delay} animateIn="flipInX" initiallyVisible={true}>
      <p>{text}</p>
    </ScrollAnimation>
  </div>
);

export const Advanteges = () => (
  <div className="container-fluid adv m-0">
    <div className="row p-5">
      <Col
        img={
          <img
            src="https://img.icons8.com/pastel-glyph/100/000000/time.png"
            alt=""
            className="inverted"
          />
        }
        head={"Мы экономим Ваше время"}
        text={" всегда можно записаться к мастеру заренее"}
        delay={4000}
      />
      <Col
        img={
          <img
            src="https://img.icons8.com/carbon-copy/100/000000/money.png"
            alt=""
            className="inverted"
          />
        }
        head={"Мы экономим Ваши деньги"}
        text={"мы гарантируем, что стоимость наших услуг Вас порадует"}
        delay={4500}
      />
      <Col
        img={
          <img
            src="https://img.icons8.com/ios/100/000000/einstein.png"
            alt=""
            className="inverted"
          />
        }
        head={"У нас большой ассортимент услуг"}
        text={"вам будет из чего выбрать!"}
        delay={5000}
      />
    </div>
  </div>
);
