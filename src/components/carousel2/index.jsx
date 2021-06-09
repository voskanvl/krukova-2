import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import config from "../../config/default.json";
import view1 from "../../media/salon/first.jpg";
import view2 from "../../media/salon/second.jpg";
import view3 from "../../media/salon/third.jpg";
import "./index.css";

export const MyCarousel2 = () => (
  <div className="container-fluid txtshadow">
    <div className="row position-ralative m-0 p-0 ">
      <div className="col-12">
        <Carousel interval={3000}>
          <Carousel.Item>
            <img className="d-block w-100" src={view1} alt="First slide" />
            <Carousel.Caption>
              <div>
                К созданию салона красоты мы приступили в 2006 году,
                использовалась технология удаленного консалтинга, когда нас
                снабдили планом помещения и разведданными о конкурентной
                ситуации вокруг выбранного помещения. Предполагалось создание
                салона красоты среднего уровня. Салон красоты получился очень
                уютным, по-домашнему располагающим. Несмотря на то, что в
                интерьере и атмосфере салона нет никакой роскоши.
              </div>
              <h4>Красивые люди ... здесь</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={view2} alt="Third slide" />
            <Carousel.Caption>
              <div>
                Соответственно везде стиль теплый, цветочный, приобладают
                фиалковые цвета. Мебель кофортная, светлая. Даже в туалете для
                клиентов стоит открытый шкафчик, на котором стоят свечи. В
                салоне лежат журналы, тарелочки с сухими цветами, влажные
                салфетки. В любой момент на ресепшн клиенту сделают чай, кофе,
                сливки и шоколад. У салона есть парковка
              </div>
              <h4>Красивые люди ... здесь</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={view3} alt="Third slide" />
            <Carousel.Caption>
              <p>
                Мы надеемся, что в нашем салоне Вам будет комфортно и уютно и
                наш опыт и проффесионализм наших мастеров позволят Вам выглядить
                превосходно!
              </p>
              <h4>Красивые люди ... здесь</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  </div>
);
