import React from "react";
import styles from "@/styles/home/our-service.module.scss";
import { OUR_SERVICES } from "@/constants/services";

const OurService = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Our Service</h1>
      <div className={styles.content}>
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
      </div>
    </div>
  );
};

export default OurService;
