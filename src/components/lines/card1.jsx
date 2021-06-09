import React from "react";
import {
  Row,
  Col,
  Image,
  Accordion,
  Card,
  Button,
  Table
} from "react-bootstrap";

export const MyCard = ({ subline }) => (
  <div className="mytabcontent rounded">
    <Row>
      <Col md={4}>
        <Image src={subline.img} rounded fluid className="myimg"/>
      </Col>
      <Col md={8}>
        <h2>{subline.title}</h2>
        <br/>
        <div>{subline.description}</div>
        <br/>
        <Accordion>
          <Card >
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                className="my"
              >
                Наши цены
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Table
                striped
                hover
                size="sm"
              >
                <tbody>
                  {subline.costs ? (
                    subline.costs.map((e, i) => (
                      <tr key={i}>
                        <td md={8}>{e.name}</td>
                        <td md={4}>{e.price}</td>
                      </tr>
                    ))
                  ) : (
                    <tr></tr>
                  )}
                </tbody>
              </Table>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
    </Row>
  </div>
);
