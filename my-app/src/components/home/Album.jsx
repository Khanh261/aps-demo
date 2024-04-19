import React from "react";
import styles from "@/styles/home/album.module.scss";
import { useEffect, useRef } from "react";
import { ALBUMS } from "@/constants/album";

const Album = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Albums</h1>
      <div className={`${styles.marquee} ${styles.normal}`}>
        <div className={styles.marqueeGroup}>
          {ALBUMS.map((album, index) => (
            <img key={index} src={album.img} alt="" />
          ))}
        </div>

        <div aria-hidden="true" className={styles.marqueeGroup}>
          {ALBUMS.map((album, index) => (
            <img key={index} src={album.img} alt="" />
          ))}
        </div>
      </div>

      <div className={`${styles.marquee} ${styles.reverse}`}>
        <div className={styles.marqueeGroup}>
          {ALBUMS.map((album, index) => (
            <img key={index} src={album.img} alt="" />
          ))}
        </div>

        <div aria-hidden="true" className={styles.marqueeGroup}>
          {ALBUMS.map((album, index) => (
            <img key={index} src={album.img} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Album;
