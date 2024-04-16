import React from "react";
import styles from "@/styles/home/about-us.module.scss";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <motion.div
            className={styles.leftContent}
            variants={fadeIn({
              direction: "right",
              type: "tween",
              delay: 0.2,
              duration: 1,
            })}
          >
            <h3>LUXURY, QUALITY & COMFORT</h3>
            <h1>The Beauty</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur in rem eveniet, iure consectetur dolor iusto
              similique quae, sint laboriosam, possimus et hic eum modi
              recusandae saepe id ab molestiae amet cum vitae. In mollitia
              officiis ad repellat fuga autem facere neque, recusandae officia
              adipisci dolorum expedita tenetur harum, ratione soluta modi
              provident quam enim cumque illum. Perferendis quidem eaque et
              distinctio laboriosam neque, optio odio officia tempore quae sed
              debitis ad, consequuntur laborum fugit laudantium inventore
              incidunt, saepe error. Voluptas, quis dolorem repellendus eum
              commodi ut? Odio voluptatem eligendi architecto, excepturi quaerat
              obcaecati magnam in veritatis nostrum natus ut.
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
              src="/images/about/2.jpg"
              alt="About Us"
              width={400}
              height={400}
              loading="lazy"
              blurDataURL="LkM7ld%Mt7of~qa#WBWBE1j[Rjj["
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
