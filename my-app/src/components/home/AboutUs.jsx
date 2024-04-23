import React, { useRef } from "react";
import styles from "@/styles/home/about-us.module.scss";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import UseParallaxBackground from "@/common/ParallaxBackground";

const AboutUs = () => {
  const scrollRef = useRef(null);
  const imgRef = UseParallaxBackground();

  return (
    <motion.div
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
    >
      <div data-scroll-container ref={scrollRef} className={styles.wrapper}>
        <div className={styles.mainTitle}>All Services</div>
        <div data-scroll-section className={styles.parallax}>
        </div>
        <div data-scroll data-scroll-speed="2" className={styles.content}>
          <motion.div
            className={styles.leftContent}
            variants={fadeIn({
              direction: "right",
              type: "tween",
              delay: 0.2,
              duration: 0.5,
            })}
          >
            <h3>LUXURY, QUALITY & COMFORT</h3>
            <h1>The Beauty</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iste ipsam sunt quis ea quod
              similique debitis fuga modi, sapiente suscipit ipsa, molestias
              praesentium deserunt commodi? Nostrum sunt eius explicabo soluta,
              voluptate tenetur autem quos commodi dolor cum modi quibusdam
              tempora architecto odit delectus tempore nulla eum obcaecati,
              vero, dicta excepturi adipisci quam reprehenderit nam. Optio
              voluptas, expedita mollitia nesciunt earum non in, autem pariatur
              reiciendis error ullam voluptates. Quis laborum velit, totam non
              sit est temporibus assumenda perferendis similique aspernatur,
              dolor ducimus, ex earum quasi sapiente vitae necessitatibus
              eveniet harum qui ad doloribus quaerat nulla repellendus quam? Ex,
              at expedita! adipisicing elit...
            </p>
          </motion.div>
          <motion.div
            className={styles.rightContent}
            variants={fadeIn({
              direction: "left",
              type: "tween",
              delay: 0.2,
              duration: 1,
            })}
          >
            <Image
              src="/images/2.jpg"
              alt="About Us"
              width={400}
              height={400}
              loading="lazy"
              quality={100}
              blurDataURL="LkM7ld%Mt7of~qa#WBWBE1j[Rjj["
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
