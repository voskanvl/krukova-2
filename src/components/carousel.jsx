import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import config from "../config/default.json";
import girl1 from "../media/beauty/photo-1470072508653-1be229b63562.jpeg";
import girl2 from "../media/beauty/photo-1487412947147-5cebf100ffc2.jpeg";
import girl3 from "../media/beauty/photo-1515212799670-2481411f0d64.jpeg";

export const MyCarousel = () => (
  <div className="container-fluid m-0 p-0">
    <div className="row">
      <div className="col-2"></div>
      <div className="col">
        <Carousel interval={3000}>
          <Carousel.Item>
            <img className="d-block w-100" src={girl1} alt="First slide" />
            <Carousel.Caption>
              <h2>Так просто быть красивой</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={girl2} alt="Third slide" />

            <Carousel.Caption>
              <h1>Красивые люди ... здесь</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={girl3} alt="Third slide" />
            <Carousel.Caption>
              <h4>Красота не требует жерт. Красота требует внимания</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-2"></div>
    </div>
  </div>
);
