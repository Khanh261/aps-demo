import React from "react";
import styles from "@/styles/home/test.module.scss";
import { useEffect, useRef } from "react";

const Test = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const scroll = new LocomotiveScroll({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true,
        });

        return () => {
          if (scroll) scroll.destroy();
        };
      })();
    }
  }, []);
  return (
    <main ref={scrollRef} data-scroll-container>
      <section data-scroll-section className={styles.container}>
        <div className={styles.parallax}>
          <img data-scroll data-scroll-speed="-5" src="/images/2.jpg" alt="" />
        </div>
        <div data-scroll data-scroll-speed="2" className={styles.text}>
          <div className={styles.wrapper}>
            <h2>Parallax effect</h2>
            <p>
              As you can notice the background is created to use an image with
              the "img" tag to perfectly realize the offset background and the
              depth we can give it.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Test;
