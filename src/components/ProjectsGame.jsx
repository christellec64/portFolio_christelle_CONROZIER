import React from 'react'
import {Col, Container, Row} from 'reactstrap'
import './Projects.css'
import {Link} from 'react-router-dom'

function ProjectsGame(props) {
  return (
    <Container fluid id="topGame">
      <div className="returnButtonDiv">
        <Link className="returnButton" to="/projectsMenu">
          Retour
        </Link>
      </div>
      <h1> Mes projets Gaming</h1>

      {/* Raccoon Galaxy */}
      <Row className="rowProjects">
        <Col xs={{size: '6', offset: '1'}}>
          <h4>Raccoon Galaxy</h4>
          <iframe title="Raccoon Galaxy" src="" frameborder="0" />
        </Col>
        <Col xs={{size: '3', offset: '1'}}>
          <p>{/* TEXT */}</p>
        </Col>
      </Row>

      {/* Auditorium */}
      <Row className="rowProjects">
        <Col xs={{size: '6', offset: '1'}}>
          <h4>Auditorium</h4>
          <iframe title="Auditorium" src="" frameborder="0" />
        </Col>
        <Col xs={{size: '3', offset: '1'}}>
          <p>{/* TEXT */}</p>
        </Col>
      </Row>

      {/* Beat'em Up */}
      <Row className="rowProjects">
        <Col xs={{size: '6', offset: '1'}}>
          <h4>Beat'em Up</h4>
          <iframe title="Beat em Up" src="" frameborder="0" />
        </Col>
        <Col xs={{size: '3', offset: '1'}}>
          <p>{/* TEXT */}</p>
        </Col>
      </Row>

      <div className="returnButtonDiv">
        <a className="returnButton" href="#topGame">
          Back to Top
        </a>
      </div>
    </Container>
  )
}

export default ProjectsGame
