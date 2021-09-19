import React from 'react'
import {Col, Container, Row} from 'reactstrap'
import './ProjectsGame.css'
import {Link} from 'react-router-dom'

import raccoonGalaxy from './Img/gamingimg/RaccoonGalaxy.png'
import auditorium from './Img/gamingimg/auditorium.png'
import beatemup from './Img/gamingimg/beatemup.png'

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
          <a
            className="projectLinkHorizontalImg"
            target="_blank"
            rel="noopener noreferrer"
            href="https://i.simmer.io/@MxKitty/roccoon-galaxy"
          >
            <img
              className="projectImgHorizontal"
              src={raccoonGalaxy}
              alt="Raccoon Galaxy"
            />
          </a>
        </Col>
        <Col className="secondCol" xs={{size: '3', offset: '1'}}>
          <h5>
            <b>Contexte</b>
          </h5>
          <p>
            Ce projet a été réalisé dans le cadre de ma formation à la 3w
            Academy. Afin d'évaluer les compétences acquises durant la
            formation, nous devions réaliser un projet en autonomie durant 2
            semaines.
          </p>
          <h5>
            <b>Concept</b>
          </h5>
          <p>Jeu d’action, remake d’un bomberMan en 2D, solo player.</p>
          <h5>
            <b>Synopsis</b>
          </h5>
          <p>
            "Racoonius, une planète peuplée par des ratons-laveurs, s'est fait
            dérober son gland sacré qui protège leur planète. Le joueur
            incarnera le héros qui tentera d’empêcher le roi des forces du mal,
            Foxiar et ses sbires, de voler les glands sacrés des autres
            planètes."
          </p>
          <h5>
            <b>Compétences</b>
          </h5>
          <ul>
            <li>Travail en autonomie</li>
            <li>Développement : Unity, C#</li>
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
      <hr />

      {/* Auditorium */}
      <Row className="rowProjectsGame">
        <Col xs={{size: '6', offset: '1'}}>
          <h4>Auditorium</h4>
          <a
            className="projectLinkHorizontalImg"
            target="_blank"
            rel="noopener noreferrer"
            href="https://i.simmer.io/@MxKitty/auditorium-remake"
          >
            <img
              className="projectImgHorizontal"
              src={auditorium}
              alt="Auditorium"
            />
          </a>
        </Col>
        <Col className="secondCol" xs={{size: '3', offset: '1'}}>
          <h5>
            <b>Contexte</b>
          </h5>
          <p>
            Ce projet a été réalisé durant la formation à la 3w Academy afin
            d&apos;apprendre à utiliser la gestion du son et la 2D dans Unity.
          </p>
          <h5>
            <b>Objectif</b>
          </h5>
          <p>
            Recréer quelques niveaux du jeu Auditorium créé par le studio Cipher
            Prime en 2009, voici la version jouable en ligne{' '}
            <a
              className="webLink"
              href=" https://cipherprime.com/games/auditorium/"
            >
              https://cipherprime.com/games/auditorium/
            </a>
            .
          </p>
          <h5>
            <b>Compétences</b>
          </h5>
          <ul>
            <li>Développement : Unity, C#</li>
          </ul>
          <br />
          <br />
          <p>
            Lien vers le site :
            <a
              target="_blank"
              className="webLink"
              rel="noopener noreferrer"
              href="https://i.simmer.io/@MxKitty/auditorium-remake"
            >
              {''} <b>Auditorium Remake</b>
            </a>
          </p>
        </Col>
      </Row>
      <hr />

      {/* Beat'em Up */}
      <Row className="rowProjectsGame">
        <Col xs={{size: '6', offset: '1'}}>
          <h4>Beat'em Up</h4>
          <a
            className="projectLinkHorizontalImg"
            target="_blank"
            rel="noopener noreferrer"
            href="https://i.simmer.io/@MxKitty/beat-em-up"
          >
            <img
              className="projectImgHorizontal"
              src={beatemup}
              alt="Beat'em Up"
            />
          </a>
        </Col>
        <Col className="secondCol" xs={{size: '3', offset: '1'}}>
          <h5>
            <b>Contexte</b>
          </h5>
          <p>
            Ce projet a été réalisé en groupe de 4 étudiants, durant la
            formation à la 3w Academy afin d&apos;apprendre à utiliser un outil
            de gestion de version : Unity Collaborate.
          </p>
          <h5>
            <b>Objectif</b>
          </h5>
          <p>
            Recréer partiellement le jeu flash promotionnel Incubattle, créé en
            2011 par Paul Veer, Noel Berry et Infinite Ammo. Vous serez
            également en groupes de deux et utiliserez Unity Collab.
          </p>
          <h5>
            <b>Compétences</b>
          </h5>
          <ul>
            <li>Développement : Unity, C#</li>
          </ul>
          <br />
          <br />
          <p>
            Lien vers le site :
            <a
              target="_blank"
              className="webLink"
              rel="noopener noreferrer"
              href="https://i.simmer.io/@MxKitty/beat-em-up"
            >
              {''} <b>Beat&apos;em Up</b>
            </a>
          </p>
        </Col>
      </Row>
      <hr />

      <div className="returnButtonDiv">
        <a className="returnButton" href="#topGame">
          Back to Top
        </a>
      </div>
    </Container>
  )
}

export default ProjectsGame
