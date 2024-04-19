import React, { useRef, useEffect } from "react";
import styles from "@/styles/home/price.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { PRICE_SERVICES } from "@/constants/price";

const Price = () => {
  var settings = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    appendDots: (dots) => <div>{dots}</div>,
    customPaging: (i) => <div className={styles.dot}></div>,
    responsive: [
      {
        breakpoint: 526,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <h1>All Services</h1>
      <div
        variants={fadeIn({
          direction: "right",
          type: "tween",
          delay: 0.2,
          duration: 0.5,
        })}
        id="testimonial"
        className={styles.container}
      >
        <Slider {...settings}>
          {PRICE_SERVICES.map((priceItem, index) => (
            <div key={index} className={styles.item}>
              <h3>{priceItem.name}</h3>
              <p>${priceItem.price}</p>
              <ul>
                {priceItem.steps.map((step, index) => (
                  <li key={index}>{step.name}</li>
                ))}
              </ul>
              <button>Book Now</button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Price;
