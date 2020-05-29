import React, { useState } from "react";
import "./Home.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src:
      "https://assets.pokemon.com/assets//cms2-fr-fr/img/misc/_tiles/generic/pokemon-169.jpg",
    altText: "Hackaton",
    caption: "Hackaton_Voyage Depuis ton Canappé",
  },
  {
    src:
      "https://img.gaming.gentside.com/s3/frgsg/1024/pokemon/default_2020-02-26_0f506adc-13c9-4895-8046-1a0eebf5538b.jpeg",
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src:
      "https://static.cnews.fr/sites/default/files/styles/image_640_360/public/pokemon-tower-battle_facebook_gaming_5e02314e61225.jpg?itok=AybZrkv5",
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const Projects = (props) => {
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
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%" height="auto" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      interval={3000}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Projects;
