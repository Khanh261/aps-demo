import React from "react";
import { useEffect, useRef } from "react";

const UseParallaxBackground = () => {
  const imgRef = useRef(null);

  const handleScroll = () => {
    const target = imgRef.current;
    if (!target) return;
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.2;
    target.style.height = "280%";
    target.style.transform = `translate3d(0px, ${rate}px, 0px)`;
    target.style.transition = "all .2s ease";
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return imgRef;
};

export default UseParallaxBackground;
