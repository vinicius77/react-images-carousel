import React from "react";

const CarouselArrow = ({ direction, action }) => {
  const linkClassName = `carousel-arrow carousel-arrow--${direction}`;
  const spanClassName = `fa fa-2x fa-angle-${direction}`;

  return (
    <React.Fragment>
      <a
        href="/"
        className={linkClassName}
        onClick={event => {
          action(event);
        }}
      >
        <span className={spanClassName} />
      </a>
    </React.Fragment>
  );
};

export default CarouselArrow;
