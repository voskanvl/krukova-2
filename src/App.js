import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Css from "./index.module.css";
// import { useSelector } from "react-redux";
import { NavBar, Header } from "./components/navbar";
import { MyCarousel } from "./components/carousel";
import { MyCarousel2 } from "./components/carousel2";
import { HeadLine } from "./components/headLine";
import { Advanteges } from "./components/advantages";
import { Gallery } from "./components/gallery";
import { Yamap } from "./components/map";
import { Socials } from "./components/social";
import { MyTabs } from "./components/lines";
import { Gift } from "./components/gifts";
import { Stuff } from "./components/stuff";

import "./App.css";
import { Clients } from "./components/clients";
import { Actions } from "./components/actions";

// const GetState = () => useSelector(state => state);

function App() {
  return (
    <div className={"container-fluid"}>
      {/* <GetState /> */}
      <Header/>
      <NavBar />
      <MyCarousel />
      <HeadLine txt="Наши услуги" id="section1" />
      <MyTabs />
      <Advanteges />
      <HeadLine txt="Наша история" id="section2" />
      <MyCarousel2 />
      <Clients/>
      <HeadLine txt="Галерия наших работ" id="section3" />
      <Gallery />
      <HeadLine txt="Подарочные сертификаты" />
      <Gift />
      <HeadLine txt="Наши актуальные акции" id=""/>
      <Actions/>
      <HeadLine txt="Наша команда" id="section4" />
      <Stuff />
      <HeadLine txt="Здесть можно нас найти" id="section5" />
      <h2 className="text-center">Наш номер: +7(914) 503-94-91</h2>
      <Yamap />
      <Socials />
    </div>
  );
}

export default App;
