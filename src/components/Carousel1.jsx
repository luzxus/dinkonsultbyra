import React, { useMemo, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css"; // Create a CSS file for styling
import {
  review1,
  review2,
  review3,
  review4,
  review5,
  review6,
} from "../assets";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants";

const data = [
  {
    id: 1,
    img: review1,
  },
  {
    id: 2,
    img: review2,
  },
  {
    id: 3,
    img: review3,
  },
  {
    id: 4,
    img: review4,
  },
  {
    id: 5,
    img: review5,
  },
  {
    id: 6,
    img: review6,
  },
];
const Carousel1 = () => {
  const isMobile = useMemo(() => {
    return window.innerWidth < 1024;
  }, []);

  return !isMobile ? (
    <div className="carousel-container">
      <Carousel
        centerMode
        useKeyboardArrows
        centerSlidePercentage={70}
        autoFocus
        showArrows={true}
        showThumbs={false}
      >
        {data.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </Carousel>
    </div>
  ) : (
    <Carousel showArrows={true} showThumbs={false} swipeable>
      {data.map((image) => (
        <div key={image.id} className="m-5 mb-10 items-baseline flex">
          <img
            style={{ maxWidth: "370px", height: "auto" }}
            src={image.img}
            alt={image.id}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Carousel1;
