import React, { useRef, useEffect } from "react";
import styles from "@/styles/home/price.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { PRICE_SERVICES } from "@/constants/price";
import Image from "next/image";
import UseParallaxBackground from "@/common/ParallaxBackground";

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
          slidesToShow: 3,
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

  const imgRef = UseParallaxBackground();

  return (
    <>
      <div className={styles.wrapper}>
        <Image
          ref={imgRef}
          src="/images/3.jpg"
          alt="price"
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
      <div className={styles.mainTitle}>All Services</div>
        <div id="testimonial" className={styles.container}>
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
    </>
  );
};

export default Price;
