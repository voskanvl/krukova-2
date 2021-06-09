import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./index.css";
import { stuffList } from "./stuff";
import { Image, Container } from "react-bootstrap";

export const Stuff = () => (
  <Container fluid id="stuffContainer">
    <br/>
    <h5 id="section4">Наши сотрудники</h5>
    {stuffList.map((e, i) => (
      <ScrollAnimation
        animateIn="bounceInRight"
        animateOut="bounceOutLeft"
        delay={500}
        key={i}
      >
        <Image src={e.img} alt={e.name} roundedCircle className="staffShadow" />
        <h5>{e.name}</h5>
        <div>{e.position}</div>
        <div>{e.description}</div>
        <br/>
      </ScrollAnimation>
    ))}
    <br/>
  </Container>
);
