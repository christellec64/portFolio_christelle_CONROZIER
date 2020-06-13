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

import mePic from "./Img/moi_carre.png";
import fb from "./Img/fb_icon_325x325.png";
import github from "./Img/1200px-Octicons-mark-github.svg.png";
import linkedin from "./Img/Logo-LinkedIn.png";

function AboutMe(props) {
  return (
    <>
      <Row>
        <h1>A Propos</h1>{" "}
      </Row>
      <Row>
        <Col sm="3" />
        <Col sm="6">
          <Card className="card mx-auto">
            <div className="cardImageProfil">
              <img width="90%" src={mePic} alt="Christelle CONROZIER" />
            </div>
            <div className="cardBody">
              <CardBody>
                <CardTitle>Christelle CONROZIER</CardTitle>
                <CardSubtitle>
                  Développeur Web & Mobile dans le secteur touristique
                </CardSubtitle>
              </CardBody>
              <CardBody>
                <CardText>
                  Actuellement en formation de développeur Web & Mobile à la
                  Wild Code School et titulaire d’un BTS Tourisme, je suis à la
                  recherche d’un stage en communication digitale dans le secteur
                  touristique ou en agence de communication. <br />
                  <br />
                  Tout au long de mes expériences, j’ai pu développer des
                  compétences dont le sens du contact, l’autonomie,
                  l’organisation, la gestion de projet et le développement web.
                </CardText>
                <div className="mail">
                  <a href="mailto:christelle.conrozier@orange.fr">
                    christelle.conrozier@orange.fr
                  </a>
                </div>
                <CardLink
                  href="https://www.linkedin.com/in/christelle-conrozier/"
                  target="_blank"
                >
                  <img
                    width="30vw"
                    height="30vh"
                    src={linkedin}
                    alt="https://www.linkedin.com/in/christelle-conrozier/"
                    target="_blank"
                  />
                </CardLink>
                <CardLink
                  href="https://github.com/christellec64"
                  target="_blank"
                >
                  <img
                    width="30vw"
                    height="30vh"
                    src={github}
                    alt="https://github.com/christellec64"
                    target="_blank"
                  />
                </CardLink>
                <CardLink
                  href="https://www.facebook.com/Christelleconrozier"
                  target="_blank"
                >
                  <img
                    width="30vw"
                    height="30vh"
                    src={fb}
                    alt="https://www.facebook.com/Christelleconrozier"
                    target="_blank"
                  />
                </CardLink>
              </CardBody>
            </div>
          </Card>
        </Col>
        <Col sm="3" />
      </Row>
    </>
  );
}
export default AboutMe;
