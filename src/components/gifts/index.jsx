import React from "react";
import "./gift.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Image, Container } from "react-bootstrap";

export const Gift = ({ giftAmount, giftNumber }) => (
  <div className="myLightBlock">
    <Container fluid >
      
      <table>
        <tbody>
          <tr>
            <td className="align-top">
              <ScrollAnimation
                delay={1500}
                animateIn="tada"
                initiallyVisible={true}
              >
                <Image
                  src={require("../../media/gifts/1500.png")}
                  alt=""
                  fluid
                />
              </ScrollAnimation>
            </td>
            <td className="align-middle">
              <ScrollAnimation
                delay={2000}
                animateIn="tada"
                initiallyVisible={true}
              >
                <Image
                  src={require("../../media/gifts/2500.png")}
                  alt=""
                  fluid
                />
              </ScrollAnimation>
            </td>
            <td className="align-bottom">
              <ScrollAnimation
                delay={2500}
                animateIn="tada"
                initiallyVisible={true}
              >
                <Image
                  src={require("../../media/gifts/3500.png")}
                  alt=""
                  fluid
                />
              </ScrollAnimation>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  </div>
);
