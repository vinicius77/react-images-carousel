import React, { useState } from 'react';
import './Carousel.css';
import CarouselArrow from './CarouselArrow';
import CarouselPaginator from './CarouselPaginator';
import { images } from '../images.js';
import Image from './Image';

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	/** Right Click Function */
	const rightArrowClick = () => {
		let newIndex = currentIndex;
		let slidesLength = images.length - 1;

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
			newIndex = images.length;
		}

		--newIndex;

		setCurrentIndex(newIndex);
	};

	/** Go To the Slide Based on the Click on The Paginator */
	const slidePaginator = (index) => {
		setCurrentIndex(index);
	};

	/** Go To the previous slide based on the left arrow click*/
	const previousSlide = (event) => {
		event.preventDefault();

		leftArrowClick();
	};

	/** Go To the next slide based on the right arrow click*/
	const nextSlide = (event) => {
		event.preventDefault();

		rightArrowClick();
	};

	return (
		<React.Fragment>
			<div className="carousel-container">
				{/** Arrow Left 
				<CarouselArrow direction={'left'} action={previousSlide} />
        
        */}

				<ul className="carousel-paginators">
					{images.map((_image, index) => (
						<CarouselPaginator
							key={index}
							index={index}
							currentIndex={currentIndex}
							onClick={() => slidePaginator(index)}
						/>
					))}
				</ul>

				{/** Carousel Content */}
				<ul className="carousel-slides-container">
					{images.map((image, index) => (
						<li
							key={index}
							className={index === currentIndex ? 'carousel-slide active' : 'carousel-slide'}
						>
							<Image key={image.url} url={image.url} />
						</li>
					))}
				</ul>

				{/** Arrow Right 
				<CarouselArrow direction={'right'} action={nextSlide} />
        */}
			</div>
		</React.Fragment>
	);
};

export default Carousel;
