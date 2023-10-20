import React from "react";
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

const data = [
  {
    id: 1,
    image: review1,
  },
  {
    id: 2,
    image: review2,
  },
  {
    id: 3,
    image: review3,
  },
  {
    id: 4,
    image: review4,
  },
  {
    id: 5,
    image: review5,
  },
  {
    id: 6,
    image: review6,
  },

  // Add more objects as needed
];

const Carousel2 = () => {
  return (
    <div className="carousel-container">
      <Carousel showArrows={true} showThumbs={false}>
        {data.map((item) => (
          <FeedbackCard>
            <div key={item.id} className="carousel-item">
              <img src={item.image} alt="review" width="350px" />
            </div>
          </FeedbackCard>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousel2;
