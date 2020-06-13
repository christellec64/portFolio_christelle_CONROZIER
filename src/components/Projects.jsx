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
import computer from "./Img/Computer.png";
import mobile from "./Img/mobilePhone.png";

const items = [
  {
    id: 1,
    altText: "Hackaton du 29_03_2020",
    caption: "Hackaton 29_03_2020",
    src: computer,
    text: "Hackaton sur le theme: Voyage depuis ton capané ",
    srcUrl: "https://hackaton1-29-03-2020.netlify.app/",
    width: "85%",
    height: "90%",
  },
  {
    id: 2,
    altText: "Projet 2 : Virus Clicker",
    caption: "Projet 2 : Virus Clicker",
    src: mobile,
    text: "",
    srcUrl: "https://virus-clicker-p2-wcs.netlify.app/",
    width: "25%",
    height: "100%",
  },
  {
    id: 3,
    altText: "Slide 3",
    caption: "Slide 3",
    src: computer,
    text: "",
    srcUrl: "https://wildbook-p1-wcs.netlify.app/",
    width: "85%",
    height: "90%",
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
          <img
            src={item.src}
            alt={item.altText}
            width={item.width}
            height={item.height}
          />
        </Badge>
        <CarouselCaption
          captionText={item.text}
          captionHeader={item.caption}
          color="light"
        />
      </CarouselItem>
    );
  });

  return (
    <div className="custom-tag">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
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
