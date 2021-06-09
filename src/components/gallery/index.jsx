import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import ButtonToolbar from "react-bootstrap/ButtonToolbar";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
//import Button from "react-bootstrap/Button";

const list1 = [
  require("../../media/beauty/thubnails/photo-1462804993656-fac4ff489837.jpeg"),
  require("../../media/beauty/thubnails/photo-1470072508653-1be229b63562.jpeg"),
  require("../../media/beauty/thubnails/photo-1487412947147-5cebf100ffc2.jpeg"),
  require("../../media/beauty/thubnails/photo-1494354205675-139c8101dfa5.jpeg"),
  require("../../media/beauty/thubnails/photo-1514136649217-b627b4b9cfb2.jpeg"),
  require("../../media/beauty/thubnails/photo-1515212799670-2481411f0d64.jpeg"),
  require("../../media/beauty/thubnails/photo-1519253624197-1c7a18680357.jpeg"),
  require("../../media/beauty/thubnails/photo-1533086781864-48f0b6a9c599.jpeg"),
  require("../../media/beauty/thubnails/8c3cfcdd51f71aaf8d67d213f8dc9f43.jpg"),
  require("../../media/beauty/thubnails/10d-1000x1000.jpg"),
  require("../../media/beauty/thubnails/761d76aead08a53c7ea32604ad676298.jpg"),
  require("../../media/beauty/thubnails/89391168130bc11f84a9de3bd3d2bfa0.jpg"),
  require("../../media/beauty/thubnails/bb-1000x1000.jpg"),
  require("../../media/beauty/thubnails/FullSizeRender-02-05-19-06-45-1000x996.jpg"),
  require("../../media/beauty/thubnails/qTl_sJNE_iY-1000x1000.jpg"),
  require("../../media/beauty/thubnails/resnitsy.jpg"),
  require("../../media/beauty/thubnails/snyatie-1000x1000.jpg"),
  require("../../media/beauty/thubnails/755cc4bd5986e5cc45e54b304393a285.jpg"),
  require("../../media/beauty/thubnails/c5b3d2067e55c78320662000e23739d7.png"),
  require("../../media/beauty/thubnails/e17d05bccd0ee9aa4698b2ffa36206e1.png"),
];
const list2 = [
  require("../../media/beauty/photo-1462804993656-fac4ff489837.jpeg"),
  require("../../media/beauty/photo-1470072508653-1be229b63562.jpeg"),
  require("../../media/beauty/photo-1487412947147-5cebf100ffc2.jpeg"),
  require("../../media/beauty/photo-1494354205675-139c8101dfa5.jpeg"),
  require("../../media/beauty/photo-1514136649217-b627b4b9cfb2.jpeg"),
  require("../../media/beauty/photo-1515212799670-2481411f0d64.jpeg"),
  require("../../media/beauty/photo-1519253624197-1c7a18680357.jpeg"),
  require("../../media/beauty/photo-1533086781864-48f0b6a9c599.jpeg"),
  require("../../media/beauty/8c3cfcdd51f71aaf8d67d213f8dc9f43.jpg"),
  require("../../media/beauty/10d-1000x1000.jpg"),
  require("../../media/beauty/761d76aead08a53c7ea32604ad676298.jpg"),
  require("../../media/beauty/89391168130bc11f84a9de3bd3d2bfa0.jpg"),
  require("../../media/beauty/bb-1000x1000.jpg"),
  require("../../media/beauty/FullSizeRender-02-05-19-06-45-1000x996.jpg"),
  require("../../media/beauty/qTl_sJNE_iY-1000x1000.jpg"),
  require("../../media/beauty/resnitsy.jpg"),
  require("../../media/beauty/snyatie-1000x1000.jpg"),
  require("../../media/beauty/755cc4bd5986e5cc45e54b304393a285.jpg"),
  require("../../media/beauty/c5b3d2067e55c78320662000e23739d7.jpg"),
  require("../../media/beauty/e17d05bccd0ee9aa4698b2ffa36206e1.jpg"),
];

const MyModal = ({ img, imgbg }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col onClick={handleShow}>
          <Image src={img} className="img-thumbnail" />
        </Col>
      </div>
      <Modal show={show} onHide={handleClose} centered fluid>
        <Modal.Body>
          <Image
            src={imgbg}
            style={{
              borderRadius: "7px",
              boxShadow: "0 0 8px black",
            }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export const Gallery = () => (
  <Container
    fluid
    style={{
      height: "100%",
    }}
  >
    <Row>
      <Col></Col>
      <Col md={6}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            backgroundColor: "#800080",
          }}
        >
          {list1.map((e, i) => (
            <MyModal img={e} imgbg={list2[i]} key={i} />
          ))}
        </div>
      </Col>
      <Col></Col>
    </Row>
  </Container>
);
