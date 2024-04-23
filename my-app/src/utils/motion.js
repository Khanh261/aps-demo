export const slideDown = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: i * 0.1,
    },
  }),
};

export const textVariants2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeIn = ({ direction, type, delay, duration }) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "top" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeInOut",
    },
  },
});

export const planetVariants = ({ direction, rotation }) => ({
  hidden: {
    x: direction === "left" ? "-100%" : "100%",
    rotate: rotation || 0,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.5,
    },
  },
});

export const handleScroll = (imgRef) => {
  const target = imgRef.current;
  if (!target) return;
  const scrolled = window.pageYOffset;
  const rate = scrolled * -0.2;
  target.style.height = "200%";
  target.style.transform = `translate3d(0px, ${rate}px, 0px)`;
  target.style.transition = "all .2s ease";
};
