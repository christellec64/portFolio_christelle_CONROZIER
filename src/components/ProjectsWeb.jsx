import React from 'react'
import {Col, Container, Row} from 'reactstrap'
import './Projects.css'
import {Link} from 'react-router-dom'

function ProjectsWeb(props) {
  return (
    <Container fluid id="topWeb">
      <div className="returnButtonDiv">
        <Link className="returnButton" to="/projectsMenu">
          Retour
        </Link>
      </div>
      <h1> Mes projets Web & Mobile</h1>

      {/* WildBook */}
      <Row className="rowProjects">
        <Col xs={{size: '6', offset: '1'}}>
          <h4>Le WildBook</h4>
          <iframe src="https://wildbook-p1-wcs.netlify.app/" frameborder="0" />
        </Col>
        <Col xs={{size: '3', offset: '1'}}>
          <p>
            Création d'un WildBook de la promotion WildCodeSchool de Mars 2020.
          </p>
        </Col>
      </Row>

      {/* Hackaton Voyage depuis ton canapé */}
      <Row className="rowProjects">
        <Col xs={{size: '6', offset: '1'}}>
          <h4>Hackaton du 29 Mars 2020</h4>
          <iframe
            src="https://hackaton1-29-03-2020.netlify.app/"
            frameborder="0"
          />
        </Col>
        <Col xs={{size: '3', offset: '1'}}>
          <p>Theme : Voyage depuis ton capané. </p>
        </Col>
      </Row>

      {/* Virus Clicker */}
      <Row className="rowProjects">
        <Col xs={{size: '6', offset: '1'}}>
          <h4>Virus Clicker</h4>
          <iframe
            src="https://virus-clicker-p2-wcs.netlify.app/"
            frameborder="0"
          />
        </Col>
        <Col xs={{size: '3', offset: '1'}}>
          <p> Créer le jeu Virus Clicker en version multijoueur</p>
        </Col>
      </Row>

      {/* WildCircus*/}
      <Row className="rowProjects">
        <Col xs={{size: '6', offset: '1'}}>
          <h4> Wild Circus</h4>
          <iframe src="https://wild-circus-v2.netlify.app" frameborder="0" />
        </Col>
        <Col xs={{size: '3', offset: '1'}}>
          <p>
            Checkpoint final : refaire le projet WildCircus avec les compétences
            aquises durant la formation.
          </p>
        </Col>
      </Row>

      <div className="returnButtonDiv">
        <a className="returnButton" href="#topWeb">
          Back to Top
        </a>
      </div>
    </Container>
  )
}

export default ProjectsWeb
