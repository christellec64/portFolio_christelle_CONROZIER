import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Badge,
} from "reactstrap";
import "./Projects.css";

const items = [
  {
    id: 1,
    altText: "Projet 1 wcs: WildBook",
    caption: "Projet 1 : WildBook",
    text:
      "Projet 1 : Création d'un WildBook de la promotion WildCodeSchool de Mars 2020 ",
    srcUrl: "https://wildbook-p1-wcs.netlify.app/",
  },
  {
    id: 2,
    altText: "Hackaton du 29_03_2020",
    caption: "Hackaton 29_03_2020",
    text: "Theme : Voyage depuis ton capané ",
    srcUrl: "https://hackaton1-29-03-2020.netlify.app/",
  },
  {
    id: 3,
    altText: "Projet 2 wcs : Virus Clicker",
    caption: "Projet 2 : Virus Clicker",
    text: "Projet 2: Créer le jeu Virus Clicker en version multijoueur",
    srcUrl: "https://virus-clicker-p2-wcs.netlify.app/",
  },
  {
    id: 4,
    altText: "Mon CV version SiteWeb",
    caption: "Mon CV version SiteWeb",
    text: "Projet personnel : mon CV version SiteWeb",
    srcUrl: "https://christelle-conrozier-cv.netlify.app/",
  },
  {
    id: 5,
    altText: "Checkpoint final : Wild Circus",
    caption: "Checkpoint final : Wild Circus",
    text:
      "Checkpoint final : refaire le projet WildCircus avec les compétences aquises durant la formation",
    srcUrl: "https://wild-circus-v2.netlify.app",
  },
];

function Projects(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="mainCarousel"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <Badge target="_blank" href={item.srcUrl} color="bg-dark">
          <iframe src={item.srcUrl} alt={item.caption} title={item.caption}>
            <p>
              <a href={item.srcUrl}>
                <i>iframes</i>.
              </a>
            </p>
          </iframe>
        </Badge>
        <a href={item.srcUrl} target="_blank" rel="noopener noreferrer">
          <CarouselCaption
            captionText={item.text}
            captionHeader={item.caption}
            color="light"
          />
        </a>
      </CarouselItem>
    );
  });

  return (
    <div className="custom-tag">
      <Carousel
        activeIndex={activeIndex}
        // next={next} previous={previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          className="custom-indicators"
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          className="custom-indicators"
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default Projects;
