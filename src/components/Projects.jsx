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
import hackaton from "./Img/Hackaton_29_03.jpg";

const items = [
  {
    id: 1,
    altText: "Hackaton du 29_03_2020",
    caption: "Hackaton 29_03_2020",
    src: hackaton,
  },
  {
    id: 2,
    altText: "Slide 2",
    caption: "Slide 2",
    src: "",
  },
  {
    id: 3,
    altText: "Slide 3",
    caption: "Slide 3",
    src: "",
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
        <Badge href="https://hackaton1-29-03-2020.netlify.app/" color="bg-dark">
          <img
            src={item.src}
            alt={item.altText}
            width="1200px"
            height="600px"
          />
        </Badge>
        <CarouselCaption
          className="text-info"
          captionText={item.caption}
          captionHeader={item.caption}
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
