import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./index.css";
import { clientsList } from "./clients";
import { Image, Container } from "react-bootstrap";

export const Clients = () => (
  <Container fluid id="clientsContainer">
    <br />
    <h5>ОТЗЫВЫ</h5>
    {clientsList.map((e, i) => (
      <ScrollAnimation animateIn="fadeIn" delay={500} key={i}>
        <Image
          src={e.img}
          alt={e.name}
          roundedCircle
          className="clientsShadow"
        />
        <h5>{e.name}</h5>
        <div>{e.position}</div>
        <div>{e.description}</div>
        <br />
      </ScrollAnimation>
    ))}
    <br />
  </Container>
);
