import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import navbarcss from "./navbar.module.css";
const scrollToTop = () => {
  scroll.scrollToTop();
  // scroll.scrollMore(500);
};
export const NavBar = () => (
  <nav className={navbarcss.nav} id="navbar">
    <div className={navbarcss.navContent}>
      <img className="nav-logo" alt="Logo" onClick={scrollToTop} />
      <div className={navbarcss.navDescription}>
        <p>673732, Забайкальский край, Могоча, Садовая ул., д 5а</p>
        <h5>8 (914) 503-94-91</h5>
        <p>beauty@awesome.com</p>
      </div>
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
            Section 1
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
            Section 2
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
            Section 3
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
            Section 4
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
