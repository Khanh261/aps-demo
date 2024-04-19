import React, { useRef, useEffect } from "react";
import styles from "@/styles/home/testimonial.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Testimonials = [
  {
    name: "Testimonial 1",
    content: "This is the first testimonial.",
    img: "/images/about/1.jpg",
  },
  {
    name: "Testimonial 2",
    content:
      "This is the second testimonial.This is the second testimonial.This is the second testimonial.",
    img: "/images/about/1.jpg",
  },
  {
    name: "Testimonial 3",
    content: "This is the second testimonial.",
    img: "/images/about/1.jpg",
  },
  {
    name: "Testimonial 4",
    content: "This is the second testimonial.",
    img: "/images/about/1.jpg",
  },
];

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
    arrow: false,
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
    <div className={styles.wrapper} id="testimonial">
      <h1>Testimonials</h1>
      <div className={styles.container}>
        <Slider {...settings}>
          {Testimonials.map((testimonial, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.avatar}>
                <img
                  className={styles.avatar}
                  src={testimonial.img}
                  alt={testimonial.name}
                />
              </div>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.content}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
