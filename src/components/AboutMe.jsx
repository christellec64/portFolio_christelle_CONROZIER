import React from 'react'

import './AboutMe.css'
import {
  Col,
  Row,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardSubtitle,
  CardLink,
} from 'reactstrap'

import mePic from './Img/moi_carre.png'
import fb from './Img/fb_icon_325x325.png'
import github from './Img/1200px-Octicons-mark-github.svg.png'
import linkedin from './Img/Logo-LinkedIn.png'

function AboutMe(props) {
  return (
    <>
      <Row>
        <h1>A Propos</h1>{' '}
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
                <CardSubtitle>Game Developper C# / Unity</CardSubtitle>
              </CardBody>
              <CardBody>
                <CardText>
                  <p>
                    Venant de terminer ma formation de développeur de jeux vidéo
                    à la 3W Academy, j&apos;ai obtenu ma certification Unity fin
                    Juillet 2021 .
                  </p>
                  <p>
                    Je suis actuellement à la recherche d&apos;un poste en tant
                    que game developper dans une entreprise de jeux vidéo.
                  </p>
                  <p>
                    Tout au long de mes expériences, j’ai pu développer des
                    compétences dont le sens du contact, l’autonomie,
                    l’organisation, la gestion de projet et le développement
                    web.
                  </p>
                  <em>
                    Pour en savoir plus sur mes différents projets, je vous
                    invite à les découvrir dans l'onglet "Projets".
                  </em>
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
  )
}
export default AboutMe
