import React from "react";
// import Iframe from "react-iframe";

export const Yamap = () => (
  <div className="container-fluid ">
    <div className="row">
      <div className="col-2 "></div>
      <iframe
        className="col-8"
        title="Красивые люди"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a25af1f2ff44eb2a2267de79cbc6dddcd53ddd0c9e7c0074a4d4ebd6391d36d&amp;source=constructor"
        width="800"
        height="400"
        frameBorder="0"
      ></iframe>
      <div className="col-2"></div>
    </div>
  </div>
);
