import React, { useEffect } from "react";
import styles from "@/styles/home/hero.module.scss";
import "flickity/css/flickity.css";

const LIST_CAROUSEL = [
  {
    img: "/images/2.jpg",
    author: "MAdas",
    title: "Relaxing Massage",
    topic: "Massage",
    des: "Experience the soothing comfort of a personalized massage from our skilled therapists. Using a blend of traditional and modern techniques, our massages are designed to alleviate tension and stress, promoting overall wellness and relaxation. Walk away feeling revitalized and refreshed, ready to take on your day with renewed energy.",
  },
  {
    img: "/images/1.jpg",
    author: "MAdas",
    title: "Aromatherapy Session",
    topic: "Aromatherapy",
    des: "Immerse yourself in the calming scents of essential oils in our aromatherapy sessions. Our expert aromatherapists use a blend of therapeutic essential oils that uplift your spirit, soothe your mind, and rejuvenate your body. Experience the holistic healing power of nature as you relax and unwind in our serene spa environment.",
  },
  {
    img: "/images/3.jpg",
    author: "MAdas",
    title: "Facial Treatment",
    topic: "Facial",
    des: "Revitalize your skin with our expert facial treatments. Our skincare specialists use top-quality products and techniques to address your unique skin concerns, leaving your skin feeling fresh and rejuvenated. Enjoy a deep cleansing, exfoliation, and hydration treatment that will give your skin a youthful, radiant glow.",
  },
];

const Hero = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      var carousel = document.querySelector("[data-carousel]");
      var slides = document.getElementsByClassName(styles.carouselCell);
      var options = {
        accessibility: true,
        prevNextButtons: true,
        pageDots: true,
        setGallerySize: false,
        arrowShape: {
          x0: 10,
          x1: 60,
          y1: 50,
          x2: 60,
          y2: 45,
          x3: 15,
        },
      };

      import("flickity").then((Flickity) => {
        var flkty = new Flickity.default(carousel, options);

        flkty.on("scroll", function () {
          flkty.slides.forEach(function (slide, i) {
            var image = slides[i];
            var x = ((slide.target + flkty.x) * -1) / 3;
            image.style.backgroundPosition = x + "px";
          });
        });
      });
    }
  }, []);

  return (
    <div className={styles.heroSlider} data-carousel>
      {LIST_CAROUSEL.map((item, index) => (
        <div
          key={index}
          className={styles.carouselCell}
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className={styles.overlay}></div>
          <div className={styles.inner}>
            <h3 className={styles.subtitle}>{item.topic}</h3>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.des}>{item.des}</p>
            <a href="#" className={styles.btn}>
              Tell me more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
