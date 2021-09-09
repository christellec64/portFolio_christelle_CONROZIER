import React from 'react'
import {Col, Container, Row} from 'reactstrap'
import './ProjectsGame.css'
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
      <Row className="rowProjectsGame">
        <Col xs={{size: '6', offset: '1'}}>
          <h4>Raccoon Galaxy</h4>
          <iframe
            title="Raccoon Galaxy"
            src="https://i.simmer.io/@MxKitty/roccoon-galaxy"
          ></iframe>
        </Col>
        <Col xs={{size: '3', offset: '1'}}>
          <h5>
            <b>Contexte</b>
          </h5>
          <p>
            Ce projet a été réalisé en attendant de trouver un stage pour
            valider ma formation à la WildCodeSchool, pour ma mère : Isabelle
            Conrozier Kassovic.
          </p>
          <p>
            IcKasso vient du I de Isabelle, du c de Conrozier et Kasso de
            Kassovic. Ma mère a lancé sa micro-entreprise en 2002 afin de vendre
            ses oeuvres. C'est à son domicile qu'elle réalise ses oeuvres
            uniques : des sculptures, généralement en terre cuite, des peintures
            et autres créations en terre cuite.
          </p>
          <h5>
            <b>Objectif</b>
          </h5>
          <p>
            Le projet consiste à réaliser un site vitrine pour ma mère avec la
            possibilité de l'alimenter via une interface dédier.
          </p>
          <h5>
            <b>Compétences</b>
          </h5>
          <ul>
            <li>Travail en autonomie</li>
            <li>
              Technologies utilisées : JS, CSS, React, BootStrap/ReactStrap,
              MySQL, Express JS
            </li>
            <li>Outils utilisés : PhotoShop, Github</li>
          </ul>
          <br />
          <br />
          <p>
            Lien vers le site :
            <a
              target="_blank"
              className="webLink"
              rel="noopener noreferrer"
              href="https://i.simmer.io/@MxKitty/roccoon-galaxy"
            >
              {''} <b>Raccoon Galaxy</b>
            </a>
          </p>
        </Col>
      </Row>

      {/* Auditorium */}
      <Row className="rowProjectsGame">
        <Col xs={{size: '6', offset: '1'}}>
          <h4>Auditorium</h4>
          <iframe
            title="Auditorium"
            src="https://i.simmer.io/@MxKitty/auditorium-remake"
          />
        </Col>
        <Col xs={{size: '3', offset: '1'}}>
          <h5>
            <b>Contexte</b>
          </h5>
          <p>
            Ce projet a été réalisé en attendant de trouver un stage pour
            valider ma formation à la WildCodeSchool, pour ma mère : Isabelle
            Conrozier Kassovic.
          </p>
          <p>
            IcKasso vient du I de Isabelle, du c de Conrozier et Kasso de
            Kassovic. Ma mère a lancé sa micro-entreprise en 2002 afin de vendre
            ses oeuvres. C'est à son domicile qu'elle réalise ses oeuvres
            uniques : des sculptures, généralement en terre cuite, des peintures
            et autres créations en terre cuite.
          </p>
          <h5>
            <b>Objectif</b>
          </h5>
          <p>
            Le projet consiste à réaliser un site vitrine pour ma mère avec la
            possibilité de l'alimenter via une interface dédier.
          </p>
          <h5>
            <b>Compétences</b>
          </h5>
          <ul>
            <li>Travail en autonomie</li>
            <li>
              Technologies utilisées : JS, CSS, React, BootStrap/ReactStrap,
              MySQL, Express JS
            </li>
            <li>Outils utilisés : PhotoShop, Github</li>
          </ul>
          <br />
          <br />
          <p>
            Lien vers le site :
            <a
              target="_blank"
              className="webLink"
              rel="noopener noreferrer"
              href="https://i.simmer.io/@MxKitty/roccoon-galaxy"
            >
              {''} <b>Raccoon Galaxy</b>
            </a>
          </p>
        </Col>
      </Row>

      {/* Beat'em Up */}
      <Row className="rowProjectsGame">
        <Col xs={{size: '6', offset: '1'}}>
          <h4>Beat'em Up</h4>
          <iframe
            title="Beat em Uprt"
            src="https://i.simmer.io/@MxKitty/beat-em-up"
          />
        </Col>
        <Col xs={{size: '3', offset: '1'}}>
          <h5>
            <b>Contexte</b>
          </h5>
          <p>
            Ce projet a été réalisé en attendant de trouver un stage pour
            valider ma formation à la WildCodeSchool, pour ma mère : Isabelle
            Conrozier Kassovic.
          </p>
          <p>
            IcKasso vient du I de Isabelle, du c de Conrozier et Kasso de
            Kassovic. Ma mère a lancé sa micro-entreprise en 2002 afin de vendre
            ses oeuvres. C'est à son domicile qu'elle réalise ses oeuvres
            uniques : des sculptures, généralement en terre cuite, des peintures
            et autres créations en terre cuite.
          </p>
          <h5>
            <b>Objectif</b>
          </h5>
          <p>
            Le projet consiste à réaliser un site vitrine pour ma mère avec la
            possibilité de l'alimenter via une interface dédier.
          </p>
          <h5>
            <b>Compétences</b>
          </h5>
          <ul>
            <li>Travail en autonomie</li>
            <li>
              Technologies utilisées : JS, CSS, React, BootStrap/ReactStrap,
              MySQL, Express JS
            </li>
            <li>Outils utilisés : PhotoShop, Github</li>
          </ul>
          <br />
          <br />
          <p>
            Lien vers le site :
            <a
              target="_blank"
              className="webLink"
              rel="noopener noreferrer"
              href="https://i.simmer.io/@MxKitty/roccoon-galaxy"
            >
              {''} <b>Raccoon Galaxy</b>
            </a>
          </p>
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
