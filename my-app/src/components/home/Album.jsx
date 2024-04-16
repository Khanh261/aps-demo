import React from "react";
import styles from "@/styles/home/album.module.scss";
import { useEffect, useRef } from "react";
import { ALBUMS } from "@/constants/album";

const Album = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery && !mediaQuery.matches) {
      const tagScroller = scrollerRef.current;
      if (!tagScroller) return;

      const createTagList = (elements, numColumns = 2) => {
        const fragment = document.createDocumentFragment();
        elements.forEach((element, i) => {
          const column = i % numColumns;
          if (!fragment.children[column]) {
            fragment.appendChild(createElement("ul", styles.tagList));
          }
          fragment.children[column].appendChild(element);
        });
        return fragment;
      };

      const addScrolling = () => {
        tagScroller.classList.add(styles.scrolling);
        document.querySelectorAll(`.${styles.tagList}`).forEach((tagList) => {
          const scrollContent = Array.from(tagList.children);
          scrollContent.forEach((img) => {
            const clonedItem = createElement(
              "img",
              "tag",
              img.getAttribute("src"),
              img.getAttribute("alt")
            );
            clonedItem.setAttribute("aria-hidden", "true");
            tagList.appendChild(clonedItem);
          });
          tagList.style.setProperty(
            "--duration",
            `${tagList.clientWidth / 100}s`
          );
        });
      };

      const createElement = (tagName, className = "", src = "", alt = "") => {
        const elem = document.createElement(tagName);
        elem.className = className;
        if (tagName === "img") {
          elem.setAttribute("src", src);
          elem.setAttribute("alt", alt);
        }
        return elem;
      };

      const allTags = Array.from(tagScroller.querySelectorAll("img"));
      const scrollers = createTagList(allTags, 2);
      tagScroller.innerHTML = "";
      tagScroller.appendChild(scrollers);
      addScrolling();
    }
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.tagScrollers}>
          <div ref={scrollerRef} className={styles.tagScroller}>
            <ul className={styles.tagList}>
              {ALBUMS.map((album, i) => {
                return (
                  <React.Fragment key={album.id}>
                    <img src={album.img} alt="album" />
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Album;
