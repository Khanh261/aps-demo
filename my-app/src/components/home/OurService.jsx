import React from "react";
import styles from "@/styles/home/our-service.module.scss";
import { OUR_SERVICES } from "@/constants/services";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const OurService = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className={styles.wrapper}>
        <h1>Our Service</h1>
        <motion.div
          className={styles.content}
          variants={fadeIn({
            direction: "right",
            type: "tween",
            delay: 0.2,
            duration: 0.5,
          })}
        >
          {OUR_SERVICES.map((item, index) => {
            return (
              <div
                style={{
                  backgroundImage: `url(${item.bgImage})`,
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
    </motion.div>
  );
};

export default OurService;
