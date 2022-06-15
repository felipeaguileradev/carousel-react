import React from "react";
import Slider from "infinite-react-carousel";
import "./Carousel.css";

const Carousel = ({ images }) => {
  return (
    <section className="slider">
      <h1 className="slider__title">Carousel con infinite-react-carousel</h1>
      <Slider
        className="slider__content"
        // autoplay
        // pauseOnHover={false}
        // arrowsBlock={false}
        dots={true}
        // dotsScroll={2}
        // virtualList={true}
        // row={3}
        // slidesPerRow={2}
        slidesToShow={3}
        pauseOnHover
        appendDots={(dots) => <ul style={{ display: "block" }}>{dots}</ul>}
        dotsClass="carousel-dots"
      >
        {images.map((image) => (
          <div key={image.id} className="slider__content--item">
            <img src={image.image} alt={image.title} />
            {/* <p className="slider-description"> {image.title}</p> */}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
