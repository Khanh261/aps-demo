import styles from "@/styles/home/footer.module.scss";
import Link from "next/link";
import useDeviceDetect from "@/common/DeviceDetect";

const Footer = () => {
  const { isMobile } = useDeviceDetect();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <footer className={styles.wrapper}>
        <div className={styles.container}>
          <div className={`${styles.column} ${styles.contact}`}>
            <img
              onClick={scrollToTop}
              className={styles.footerLogo}
              src=""
              alt="logo"
              loading="lazy"
            />
            <div className={`${styles.subColumn} ${styles.socialMediaWrapper}`}>
              <p className={styles.socialMedia}>Social Media:</p>

              <div className={styles.socialNetwork}>
                <Link target="_blank" href={"#"}>
                  face
                </Link>
                <Link target="_blank" href={"#"}>
                  insta
                </Link>
                <Link target="_blank" href={"#"}>
                  Twitter
                </Link>
              </div>
              <div className={styles.contactUsMobile}>
                Contact Us:{" "}
                <a href="mailto:info@ai.com" className={styles.email}>
                  asdainfo@asd.com
                </a>
              </div>
            </div>
          </div>
          <div className={styles.rightBlock}>
            <div className={`${styles.column} ${styles.learn}`}>
              <p className={styles.title}>Learn</p>
              <div className={styles.subColumn}>
                <Link href="#">About Us</Link>
                <Link href="#">Blog</Link>
              </div>
            </div>

            <div className={`${styles.column} ${styles.documents}`}>
              <p className={styles.title}>{'doc'}</p>
              <div className={styles.subColumn}>
                <Link href="#">asdas</Link>
                <Link href="#">dfgdfg</Link>
                <Link href="#">ljj</Link>
              </div>
            </div>

            <div className={`${styles.column} ${styles.support}`}>
              <p className={styles.title}>Support</p>

              {isMobile ? (
                <>
                  <a href={`#`}>asds</a>
                  <a href={`#`}>asds</a>
                  <Link href={'#'} target="_blank">
                    dfgd{" "}
                  </Link>
                </>
              ) : (
                <div className={styles.subColumn}>
                  <a href={`#`}>sdasd</a>
                  <a href={'#'} target="_blank">
                    odfgf
                  </a>

                  <Link href={'#'}>asdasd</Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.bottomBlock}>
          <div className={styles.copyRight}>
            <p className={styles.content}>
              ©Copyright 2021. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
