import React, { useState, useEffect } from "react";
import "./Carousel.css";
import CarouselArrow from "./CarouselArrow";
import TeamMate from "./TeamMate";
import CarouselPaginator from "./CarouselPaginator";
import teamMates from "../teamMatesArray";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  /** Right Click Function */
  const rightArrowClick = () => {
    let newIndex = currentIndex;
    let slidesLength = teamMates.length - 1;

    if (newIndex === slidesLength) {
      newIndex = -1;
    }

    ++newIndex;

    setCurrentIndex(newIndex);
  };

  /** Left Click Function */
  const leftArrowClick = () => {
    let newIndex = currentIndex;

    if (newIndex < 1) {
      newIndex = teamMates.length;
    }

    --newIndex;

    setCurrentIndex(newIndex);
  };

  /** Automatic slider function */

  const automaticSlider = () => {
    let timer;
    clearTimeout(timer);

    timer = setTimeout(() => {
      rightArrowClick();
    }, 5000);
  };

  /** Go To the Slide Based on the Click on The Paginator */
  const slidePaginator = index => {
    setCurrentIndex(index);
  };

  /** Go To the previous slide based on the left arrow click*/
  const previousSlide = event => {
    event.preventDefault();

    leftArrowClick();
  };

  /** Go To the next slide based on the right arrow click*/
  const nextSlide = event => {
    event.preventDefault();

    rightArrowClick();
  };

  /** Calls the automaticSlider function which refreshes
   * its timer everytime the current index changes */
  useEffect(() => {
    automaticSlider();
    // eslint-disable-next-line
  }, [currentIndex]);

  return (
    <React.Fragment>
      <div className="carousel-container">
        {/** Arrow Left */}
        <CarouselArrow direction={"left"} action={previousSlide} />

        {/** Carousel Content */}
        <ul className="carousel-slides-container">
          {teamMates.map((teamMate, index) => (
            <li
              key={index}
              className={
                index === currentIndex
                  ? "carousel-slide active"
                  : "carousel-slide"
              }
            >
              {" "}
              <TeamMate teamMate={teamMate} />
            </li>
          ))}
        </ul>

        {/** Arrow Right */}
        <CarouselArrow direction={"right"} action={nextSlide} />

        {/** Paginators */}
        <ul className="carousel-paginators">
          {teamMates.map((slide, index) => (
            <CarouselPaginator
              key={index}
              index={index}
              currentIndex={currentIndex}
              onClick={() => slidePaginator(index)}
            />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
