import React from "react";
import styles from "@/styles/home/zoom-parallax.module.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const ZoomParallax = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "/images/1.jpg",
      scale: scale4,
    },
    {
      src: "/images/2.jpg",
      scale: scale5,
    },
    {
      src: "/images/3.jpg",
      scale: scale6,
    },
    {
      src: "/images/2.jpg",
      scale: scale5,
    },
    {
      src: "/images/3.jpg",
      scale: scale6,
    },
    {
      src: "/images/1.jpg",
      scale: scale8,
    },
    {
      src: "/images/1.jpg",
      scale: scale9,
    },
  ];

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <Image src={src} fill alt="image" blurDataURL="LEHV6nWB2yk8pyo0adR*.7kCMdnj" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ZoomParallax;
