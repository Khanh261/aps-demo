import Image from "next/image";
import styles from "@/styles/home/gallery-image.module.scss";

const GalleryImage = () => {
  return (
    <div className={styles.mainContent}>
      <div uk-filter="target: .js-filter">
        <ul className={styles.ukNavbarNav}>
          <li className={styles.ukActive} uk-filter-control>
            <a href="#">All</a>
          </li>
          <li uk-filter-control="[data-num='1']">
            <a href="#">DOG</a>
          </li>
          <li uk-filter-control="[data-num='2']">
            <a href="#">CAT</a>
          </li>
          <li uk-filter-control="[data-num='3']">
            <a href="#">ANT & RABBIT</a>
          </li>
        </ul>

        <ul
          className={`img-gallery-container js-filter ${styles.imgGalleryContainer}`}
          uk-grid
        >
          <li data-num="1">
            <Image
              src="/images/2.jpg"
              alt="Cat"
              layout="fill"
              objectFit="cover"
              className={styles.imgGal}
            />
          </li>
          <li data-num="2">
            <Image
              src="/images/3.jpg"
              alt="Cat"
              layout="fill"
              objectFit="cover"
              className={styles.imgGal}
            />
          </li>
          <li data-num="3">
            <Image
              src="/images/1.jpg"
              alt="Dog"
              layout="fill"
              objectFit="cover"
              className={styles.imgGal}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GalleryImage;
