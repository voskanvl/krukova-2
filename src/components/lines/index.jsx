import React from "react";
import {
  Tab,
  Tabs,
  Accordion,
  Card,
  Button,
  TabContainer,
  Container
  // Nav,
  // Row,
  // Col
} from "react-bootstrap";
import { arrLines } from "./lines";
import { MyCard } from "./card1";

export const MyAccordion = () => (
  <Accordion>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Click me!
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>Hello! I'm the body</Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);

export const MyTabs = () => {
  return (
    <Container style={{ height: "100vh" }}>
      <br />
      <Tabs defaultActiveKey={arrLines[0][Object.keys(arrLines[0])[0]]}>
        {arrLines.map((line, i) => (
          <Tab title={line.name} eventKey={line.name} key={i}>
            <TabContainer>
              <Tabs variant="pills">
                {line.data.map((subline, j) => {
                  return (
                    <Tab title={subline.title} eventKey={subline.title} key={j}>
                      <MyCard subline={subline} />
                    </Tab>
                  );
                })}
              </Tabs>
            </TabContainer>
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
};
