import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import styles from "@/styles/home/gallery.module.scss";

const image = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/1.jpg",
  "/images/2.jpg",
];

const ParallaxImageScrolling = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: Math.max(0.075, 0.1 * (window.innerWidth / 1920)), 
      smooth: true,
      direction: 'vertical',
      smoothMobile: window.innerWidth > 768, 
    });    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
      lenis.destroy();
    };
  }, []);

  return (
    <main className={styles.main}>
      <h1>Gallery</h1>
      <div className={styles.gallery}>
        <div ref={gallery} className={styles.galleryWrapper}>
          <Column images={[image[0], image[1], image[2]]} y={y} />
          <Column images={[image[3], image[4], image[5]]} y={y2} />
          <Column images={[image[6], image[7], image[8]]} y={y3} />
          <Column images={[image[9], image[10], image[11]]} y={y4} />
        </div>
      </div>
    </main>
  );
};

export default ParallaxImageScrolling;

const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={src} alt="image" fill loading="lazy" />
          </div>
        );
      })}
    </motion.div>
  );
};
