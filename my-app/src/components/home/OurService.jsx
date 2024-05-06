import React, { useRef } from "react";
import styles from "@/styles/home/our-service.module.scss";
import { OUR_SERVICES } from "@/constants/services";
import { useTransform, useScroll, motion } from "framer-motion";

const OurService = () => {
  const serviceRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: serviceRef,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className={styles.wrapper}>
      <motion.div
        style={{
          scale: scaleProgress,
        opacity: opacityProgress,
        }}
        ref={serviceRef}
        className={styles.content}
      >
        {OUR_SERVICES.map((item, index) => {
          return (
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.bgImage})`,
              }}
              className={styles.item}
              key={index}
            >
              <div className={styles.title}>{item.title}</div>
              <div className={styles.toolTip}>
                <h3>{item.title}</h3>
                <p>{item.des}</p>
                <button className={styles.buttonMore}> More</button>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default OurService;
