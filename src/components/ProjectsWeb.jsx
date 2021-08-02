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

      {/* IcKasso */}
      <Row className="rowProjects">
        <Col xs={{size: '7', offset: '1'}}>
          <h4>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ickasso.com"
            >
              IcKasso
            </a>
          </h4>
          <iframe title="ickasso" src="https://ickasso.com" frameborder="0" />
        </Col>
        <Col className="secondCol" xs={{size: '3', offset: '0'}}>
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
              href="https://ickasso.com"
            >
              {''} <b>IcKasso</b>
            </a>
          </p>
        </Col>
      </Row>

      {/* Plateforme Networking Crea*/}
      <Row className="rowProjects">
        <Col xs={{size: '7', offset: '1'}}>
          <h4>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://networking.crea-aquitaine.org"
            >
              Plateforme Networking de l'association CREA Aquitaine
            </a>
          </h4>
          <iframe
            title="CREA"
            src="https://networking.crea-aquitaine.org"
            frameborder="0"
          />
        </Col>
        <Col className="secondCol" xs={{size: '3', offset: '0'}}>
          <h5>
            <b>Contexte</b>
          </h5>
          <p>
            Ce projet a été réalisé dans le cadre de ma formation à la
            WildCodeSchool, en groupe de 7 étudiants pour l'association CREA
            Aquitaine.
          </p>
          <p>
            L'association CREA accompagne les entrepreneurs du Pays-Basque en
            France et en Espagne. En raison de la crises sanitaire mondiale et
            une envie de s'adapter, CREA a voulu développer une plateforme de
            Networking pour aider son réseau à échanger virtuellement.
          </p>
          <h5>
            <b>Objectif</b>
          </h5>
          <p>
            Réalisation d'une plateforme multilingue en Basque, Espagnole et
            Français.
          </p>
          <h5>
            <b>Compétences</b>
          </h5>
          <ul>
            <li>Travail en groupe</li>
            <li>Méthode AGIL</li>
            <li>Relation Client</li>
            <li>Technologies utilisées : JS, CSS, React, MySQL, Express JS</li>
            <li>Outils utilisés : Trello, Adobe XD, Github</li>
          </ul>
          <br />
          <br />
          <p>
            Lien vers le site :
            <a
              className="webLink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://networking.crea-aquitaine.org"
            >
              {''} <b>Plateforme Networking CREA</b>
            </a>
          </p>
        </Col>
      </Row>

      {/* WildCircus*/}
      <Row className="rowProjects">
        <Col xs={{size: '7', offset: '1'}}>
          <h4>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wild-circus-v2.netlify.app"
            >
              WildCircus
            </a>
          </h4>
          <iframe
            title="WildCircus"
            src="https://wild-circus-v2.netlify.app"
            frameborder="0"
          />
        </Col>
        <Col className="secondCol" xs={{size: '3', offset: '0'}}>
          <h5>
            <b>Contexte</b>
          </h5>
          <p>
            Ce projet a été réalisé dans le cadre de ma formation à la
            WildCodeSchool. Afin d'évaluer les compétences acquises durant la
            formation, nous avions un examen à chaque fin de mois. Ce projet est
            celui pour l'examen final.
          </p>
          <h5>
            <b>Objectif</b>
          </h5>
          <p>
            Refaire le site WildCircus demandé avant la rentrée en appliquant
            les compétences acquises tout au long de la formation.
          </p>
          <h5>
            <b>Compétences</b>
          </h5>
          <ul>
            <li>Travail en autonomie</li>
            <li>
              Technologies utilisées : JS, CSS, React, BootStrap/ReactStrap,
              MySQL, Sequelize
            </li>
            <li>Outils utilisés : Github</li>
          </ul>
          <br />
          <br />
          <p>
            Lien vers le site :
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wild-circus-v2.netlify.app"
              className="webLink"
            >
              {''} <b>Wild Circus</b>
            </a>
          </p>
        </Col>
      </Row>

      {/* Virus Clicker */}
      <Row className="rowProjects">
        <Col xs={{size: '7', offset: '1'}}>
          <h4>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://virus-clicker-p2-wcs.netlify.app/"
            >
              Virus Clicker
            </a>
          </h4>
          <iframe
            title="Virus Clicker"
            src="https://virus-clicker-p2-wcs.netlify.app/"
            frameborder="0"
          />
        </Col>
        <Col className="secondCol" xs={{size: '3', offset: '0'}}>
          <h5>
            <b>Contexte</b>
          </h5>
          <p>
            Le Virus Clicker est un projet fictif donné par notre professeur
            dans le cadre d'un exercice afin de mettre en application les
            notions apprises dans les langages JSX et React. Ce projet a été
            réalisé par groupe de 4 étudiants.
          </p>
          <h5>
            <b>Objectif</b>
          </h5>
          <p>
            Créer une application mobile du type "Cookie Clicker", en une
            interface multijoueurs.
          </p>
          <h5>
            <b>Compétences</b>
          </h5>
          <ul>
            <li>Travail en groupe</li>
            <li>Application de la méthode AGIL</li>
            <li>
              Technologies utilisées : JS, CSS, React, SemanticUI, ReactRouter
            </li>
            <li>Outils utilisés : Trello, Github, PostMan</li>
          </ul>
          <br />
          <br />
          <p>
            Lien vers le site :
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://virus-clicker-p2-wcs.netlify.app/"
              className="webLink"
            >
              {''} <b>Virus Clicker</b>
            </a>
          </p>
        </Col>
      </Row>

      {/* Hackaton Voyage depuis ton canapé */}
      <Row className="rowProjects">
        <Col xs={{size: '7', offset: '1'}}>
          <h4>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://hackaton1-29-03-2020.netlify.app/"
            >
              Hackaton du 29 mars 2020 : Voyage depuis ton canapé.
            </a>
          </h4>
          <iframe
            title="Hackaton 29-03-2020"
            src="https://hackaton1-29-03-2020.netlify.app/"
            frameborder="0"
          />
        </Col>
        <Col className="secondCol" xs={{size: '3', offset: '0'}}>
          <h5>
            <b>Contexte</b>
          </h5>
          <p>
            Ce projet a été réaliser en groupe de 4 étudiants, lors d'un
            hackaton interne de la WildCodeSchool dont le théme était "Voyage
            depuis ton canapé".
          </p>
          <h5>
            <b>Objectif</b>
          </h5>
          <p>
            Réalisation d'un site sur le thème donné, en utilisant les données
            d'une API déjà existante.
          </p>
          <h5>
            <b>Compétences</b>
          </h5>
          <ul>
            <li>Travail en groupe</li>
            <li>
              Technologies utilisées : JS, CSS, React,BootStrap,ReactRouter
            </li>
            <li>Outils utilisés :Github</li>
          </ul>
          <br />
          <br />
          <p>
            Lien vers le site :
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://hackaton1-29-03-2020.netlify.app/"
              className="webLink"
            >
              {''} <b>Voyage depuis ton canapé</b>
            </a>
          </p>
        </Col>
      </Row>

      {/* WildBook */}
      <Row className="rowProjects">
        <Col xs={{size: '7', offset: '1'}}>
          <h4>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wildbook-p1-wcs.netlify.app/"
            >
              Le WildBook
            </a>
          </h4>
          <iframe
            title="Wildbook"
            src="https://wildbook-p1-wcs.netlify.app/"
            frameborder="0"
          />
        </Col>
        <Col className="secondCol" xs={{size: '3', offset: '0'}}>
          <h5>
            <b>Contexte</b>
          </h5>
          <p>
            Ce projet a été réaliser en groupe de 4 étudiants, dans le cadre de
            la formation WildCodeSchool en tant que premier projet de groupe.
          </p>
          <h5>
            <b>Objectif</b>
          </h5>
          <p>
            Création d'un WildBook de la promotion WildCodeSchool de Mars 2020,
            permettant de présenter les différents étudiants de la
            WildCodeSchool.
          </p>
          <h5>
            <b>Compétences</b>
          </h5>
          <ul>
            <li>Travail en groupe</li>
            <li>Technologies utilisées : JS, CSS, HTML</li>
            <li>Outils utilisés :Github</li>
          </ul>
          <br />
          <br />
          <p>
            Lien vers le site :
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wildbook-p1-wcs.netlify.app/"
              className="webLink"
            >
              {''} <b>Wild Book</b>
            </a>
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
