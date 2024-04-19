import React from "react";
import styles from "@/styles/home/album.module.scss";
import { ALBUMS } from "@/constants/album";
import Image from "next/image";

const Album = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Albums</h1>
      <div className={`${styles.marquee} ${styles.normal}`}>
        <div className={styles.marqueeGroup}>
          {ALBUMS.map((album, index) => (
            <Image key={index} src={album.img} alt="" width={400} height={400} quality={100}/>
          ))}
        </div>

        <div aria-hidden="true" className={styles.marqueeGroup}>
          {ALBUMS.map((album, index) => (
            <Image key={index} src={album.img} alt="" width={400} height={400} quality={100}/>
          ))}
        </div>
      </div>

      <div className={`${styles.marquee} ${styles.reverse}`}>
        <div className={styles.marqueeGroup}>
          {ALBUMS.map((album, index) => (
            <Image key={index} src={album.img} alt="" width={400} height={400} quality={100}/>
          ))}
        </div>

        <div aria-hidden="true" className={styles.marqueeGroup}>
          {ALBUMS.map((album, index) => (
            <Image key={index} src={album.img} alt="" width={400} height={400} quality={100}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Album;
