import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import navbarcss from "./navbar.module.css";
import { Image } from "react-bootstrap";
const scrollToTop = () => {
  scroll.scrollToTop();
  // scroll.scrollMore(500);
};
export const Header = () => (
  <div>
    <Image
      src={require("../media/logo/logoL.png")}
      fluid
      onClick={scrollToTop}
      style={{
        left: "0"
      }}
      className={navbarcss.sideImage}
    />
    <div className={navbarcss.mymainheader}>
      <p>673732, Забайкальский край, Могоча, Садовая ул., д 5а</p>
      <p>САЛОН КРАСТОТЫ</p>
      <h1 style={{ textShadow: "0 0 8px black" }}>КРАСИВЫЕ ЛЮДИ</h1>
      <h5>8 (914) 503-94-91</h5>
      <p>beauty@awesome.com</p>
    </div>
    <Image
      src={require("../media/logo/logoR.png")}
      fluid
      onClick={scrollToTop}
      style={{ right: "0" }}
      className={navbarcss.sideImage}
    />
  </div>
);
export const NavBar = () => (
  <div className={navbarcss.myNavStiky}>
    <div></div>
    <nav className={navbarcss.nav} id="navbar">
      <ul className={navbarcss.navItems}>
        <li className={navbarcss.navItem}>
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Наши услуги
          </Link>
        </li>
        <li className={navbarcss.navItem}>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            История
          </Link>
        </li>
        <li className={navbarcss.navItem}>
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Галерея
          </Link>
        </li>
        <li className={navbarcss.navItem}>
          <Link
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Наша команда
          </Link>
        </li>
        <li className={navbarcss.navItem}>
          <Link
            activeClass="active"
            to="section5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Как нас найти
          </Link>
        </li>
      </ul>
    </nav>
    <div></div>
  </div>
);
