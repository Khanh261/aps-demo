import React from 'react'
import { motion } from 'framer-motion';
import style from '@/styles/home/button.module.scss';


const Button = ({ isActive, toggleMenu }) => {
  return (
    <div className={style.button}>
      <motion.div
        className={style.slider}
        animate={{top: isActive ? "-100%" : "0%"}}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 9, 0.24, 1] }}
      >
        <div className={style.el} onClick={() => toggleMenu()}>
          <PerspectiveText label="Menu" />
        </div>
        <div className={style.el} onClick={() => toggleMenu()}>
          <PerspectiveText label="Closed" />
        </div>
      </motion.div>
    </div>
  )
}

function PerspectiveText({ label }){
  return (
    <div className={style.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  )
}
export default Button