import React from 'react'
import {Col, Container, Row} from 'reactstrap'
import {Link} from 'react-router-dom'
import './Projects.css'

function ProjectsMenu(props) {
  return (
    <Container fluid>
      <h1>Mes différents projets</h1>
      <Row className="rowProjectMenu">
        <Col  xs={{size: '4', offset: '2'}}>
          <Link className="projectChoiceLink" to="/projectsWeb">Projets Web & Mobile</Link>
        </Col>
        <Col xs={{size: '4', offset: '0'}}>
          <Link className="projectChoiceLink" to="/projectsGame">Projets Gaming</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default ProjectsMenu
