import React from "react";
import styles from "@/styles/home/blog.module.scss";
import Image from "next/image";

const BLOGS = [
  {
    image: "/images/about/1.jpg",
    title: "Relax and Rejuvenate at Our Spa",
    content:
      "Indulge in a blissful escape at our luxurious spa. Whether you're seeking a soothing massage, a refreshing facial, or a calming soak in our mineral-rich pools, our expert therapists will pamper you from head to toe. Discover tranquility and unwind in a serene oasis.",
    date: "15 April 2024",
  },
  {
    image: "/images/about/2.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    content:
      " Indulge in a blissful escape at our luxurious spa. Whether you're seeking a soothing massage, a refreshing facial, or a calming soak in our mineral-rich pools, our expert therapists will pamper you from head to toe. Discover tranquility and unwind in a serene oasis.",
    date: "08 July 2020",
  },
  {
    image: "/images/about/1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    content:
      " Indulge in a blissful escape at our luxurious spa. Whether you're seeking a soothing massage, a refreshing facial, or a calming soak in our mineral-rich pools, our expert therapists will pamper you from head to toe. Discover tranquility and unwind in a serene oasis.",
    date: "08 July 2020",
  },
];

const Blog = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Blog</h1>
      <div className={styles.blogPost}>
        {BLOGS.map((blog, index) => {
          return (
            <div key={index} className={styles.post}>
              <Image
                className={styles.postImage}
                src={blog.image}
                alt={blog.title}
                width={400}
                height={400}
                loading="lazy"
                blurDataURL="LkM7ld%Mt7of~qa#WBWBE1j[Rjj["
              />
              <div className={styles.content}>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <span className={styles.date}>{blog.date}</span>{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
