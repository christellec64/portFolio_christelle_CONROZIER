import React from "react";

import "./AboutMe.css";
import {
  Col,
  Row,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardSubtitle,
  CardLink,
} from "reactstrap";

function AboutMe(props) {
  return (
    <>
      <h1>About Me</h1>
      <Row>
        <Col sm="2" />
        <Col sm="8">
          <Card>
            <CardBody>
              <CardTitle>Christelle CONROZIER</CardTitle>
              <CardSubtitle>
                Développeur Web & Mobile dans le secteur touristique
              </CardSubtitle>
            </CardBody>
            <img width="100%" src="/assets/318x180.svg" alt="Christelle CONROZIER" />
            <CardBody>
              <CardText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                dolorem sint enim nemo odit nam dicta, totam, sunt, magni
                consequatur mollitia corporis harum delectus quaerat incidunt
                quos! Aperiam, sint repudiandae.
              </CardText>
              <CardLink
                href="https://www.linkedin.com/in/christelle-conrozier/"
                target="_blank"
              >
                <img
                  width="5vw"
                  height="5vh"
                  src=""
                  alt="https://www.facebook.com/Christelleconrozier"
                  target="_blank"
                />
              </CardLink>
              <CardLink href="https://github.com/christellec64" target="_blank">
                <img
                  width="5vw"
                  height="5vh"
                  src=""
                  alt="https://github.com/christellec64"
                  target="_blank"
                />
              </CardLink>
              <CardLink
                href="https://www.facebook.com/Christelleconrozier"
                target="_blank"
              >
                <img
                  width="5vw"
                  height="5vh"
                  src=""
                  alt="https://www.facebook.com/Christelleconrozier"
                  target="_blank"
                />
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col sm="2" />
      </Row>
    </>
  );
}
export default AboutMe;
