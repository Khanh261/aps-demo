import React, { useRef, useEffect } from "react";
import styles from "@/styles/home/testimonial.module.scss";
import { TESTIMONIAL_INFO } from "@/constants/testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
  var settings = {
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots) => <div>{dots}</div>,
    customPaging: (i) => <div className={styles.dot}></div>,
    responsive: [
      {
        breakpoint: 526,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.wrapper} id="testimonial">
      <h1>Testimonials</h1>
      <div className={styles.container}>
      </div>
    </div>
  );
};

export default Testimonial;
