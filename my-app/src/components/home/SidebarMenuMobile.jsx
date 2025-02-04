import React from "react";
import styles from "@/styles/home/sidebar-menu-mobile.module.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import Nav from "./Nav";

const menu = {
  open: {
    width: "90vw",
    height: "100%",
    top: "-25px",
    right: "-25px",
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const SidebarMenuMobile = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <motion.div
          className={styles.menu}
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial={"closed"}
        >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
        </motion.div>
        <Button
          isActive={isActive}
          toggleMenu={() => setIsActive(!isActive)}
        ></Button>
      </div>
    </>
  );
};

export default SidebarMenuMobile;
