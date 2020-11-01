import React from "react";

const CarouselPaginator = ({ index, currentIndex, onClick }) => {
  return (
    <React.Fragment>
      <li>
        <a
          href="#!"
          className={
            index === currentIndex
              ? "carousel-indicator active"
              : "carousel-indicator"
          }
          onClick={() => onClick()}
        >
          .
        </a>
      </li>
    </React.Fragment>
  );
};

export default CarouselPaginator;
