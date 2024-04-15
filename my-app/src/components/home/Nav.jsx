import React from 'react'
import { FOOTER_LINKS, NAV_LINKS } from '@/constants/nav';
import { motion } from 'framer-motion';
import { perspective, slideIn } from '@/constants/animNav';
import styles from '@/styles/home/nav.module.scss';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {
          NAV_LINKS.map((link, i) => {
            const { title, href } = link;
            return (
              <div key={`b_${i}`} className={styles.linkContainer}>
                <motion.div
                  custom={i}
                  variants={slideIn}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <a>
                    {title}
                  </a>
                </motion.div>
              </div>
            )
          })
        }
      </div>
      <motion.div className={styles.footer}>
        {
          FOOTER_LINKS.map((link, i) => {
            const { title, href } = link;
            return (
              <motion.a
                variants={slideIn}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
                key={`f_${i}`}
              >
                {title}
              </motion.a>
            )
          })
        }
      </motion.div>
    </div>
  )
}

export default Nav