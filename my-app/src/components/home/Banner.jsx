import React, { useEffect, useRef } from 'react'
import styles from '@/styles/home/banner.module.scss'

const LIST_CAROUSEL = [
  {
    img: "images/1.jpg",
    author: "MAdas",
    title: "Relaxing Massage",
    topic: "Massage",
    des: "Experience the soothing comfort of a personalized massage from our skilled therapists. Using a blend of traditional and modern techniques, our massages are designed to alleviate tension and stress, promoting overall wellness and relaxation. Walk away feeling revitalized and refreshed, ready to take on your day with renewed energy."
  },
  {
    img: "images/2.jpg",
    author: "MAdas",
    title: "Aromatherapy Session",
    topic: "Aromatherapy",
    des: "Immerse yourself in the calming scents of essential oils in our aromatherapy sessions. Our expert aromatherapists use a blend of therapeutic essential oils that uplift your spirit, soothe your mind, and rejuvenate your body. Experience the holistic healing power of nature as you relax and unwind in our serene spa environment."
  },
  {
    img: "images/3.jpg",
    author: "MAdas",
    title: "Facial Treatment",
    topic: "Facial",
    des: "Revitalize your skin with our expert facial treatments. Our skincare specialists use top-quality products and techniques to address your unique skin concerns, leaving your skin feeling fresh and rejuvenated. Enjoy a deep cleansing, exfoliation, and hydration treatment that will give your skin a youthful, radiant glow."
  },
  {
    img: "images/4.jpg",
    author: "MAdas",
    title: "Yoga Class",
    topic: "Yoga",
    des: "Join our yoga classes and find balance in your body and mind with our experienced instructors."
  },
]

const LIST_THUMBNAIL = [
  {
    img: "images/1.jpg",
    title: "Hot Stone Therapy",
    des: "Experience the healing power of heat with our hot stone therapy, perfect for deep relaxation."
  },
  {
    img: "images/2.jpg",
    title: "Herbal Tea Session",
    des: "Enjoy a calming herbal tea session, featuring a selection of organic teas that promote relaxation."
  },
  {
    img: "images/3.jpg",
    title: "Meditation Class",
    des: "Join our meditation class to find inner peace and cultivate mindfulness in your daily life."
  },
  {
    img: "images/4.jpg",
    title: "Reflexology Treatment",
    des: "Experience the benefits of reflexology with a treatment that focuses on stimulating specific points on the feet."
  },
]


const Banner = () => {
  const nextRef = useRef(null)
  const prevRef = useRef(null)
  const carouselRef = useRef(null)
  const listRef = useRef(null)
  const thumbnailRef = useRef(null)
  const timeRef = useRef(null)

  const showSlider = (type, listDom, thumbnailDom ,carouselDom) => {
    let sliderItemsDom = Array.from(listDom.children)
    let thumbnailItemsDom = Array.from(thumbnailDom.children)

    if(type === 'next'){
      listDom.appendChild(sliderItemsDom[0])
      thumbnailDom.appendChild(thumbnailItemsDom[0])
      carouselDom.classList.add('next')
    }else{
      listDom.prepend(sliderItemsDom[sliderItemsDom.length -1])
      thumbnailDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length -1])
      carouselDom.classList.add('prev')
    }
  }

  useEffect(() => {
    const nextDom = nextRef.current
    const prevDom = prevRef.current
    const carouselDom = carouselRef.current
    const listDom = listRef.current
    const thumbnailDom = thumbnailRef.current  
    const timeDom = timeRef.current
    
    if (!nextDom || !prevDom || !carouselDom || !listDom || !thumbnailDom || !timeDom) return;
    
    thumbnailDom.appendChild(thumbnailDom.children[0])
    let timeRunning = 3000
    let timeAutoNext = 7000

    nextDom.onclick = function(){
      showSlider('next', listDom, thumbnailDom, carouselDom)
    }

    prevDom.onclick = function(){
      showSlider('prev', listDom, thumbnailDom, carouselDom)
    }

    let runTimeOut;
    let runNextAuto;

    runTimeOut = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove('next');
      carouselDom.classList.remove('prev');
    }, timeRunning);

    runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);
  }, [])

  return (
    <div className={styles.carousel} ref={carouselRef}>
      <div className={styles.list} ref={listRef}>
        {
          LIST_CAROUSEL.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <img src={item.img} />
                <div className={styles.content}>
                  <div className={styles.author}>{item.author}</div>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.topic}>{item.topic}</div>
                  <div className={styles.des}>{item.des}</div>
                  <div className={styles.buttons}>
                    <button>See More</button>
                    <button>MoreOver</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className={styles.thumbnail} ref={thumbnailRef}>
        {
          LIST_THUMBNAIL.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <img src={item.img} />
                <div className={styles.content}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.des}>{item.des}</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className={styles.arrows}>
        <button id="prev" ref={prevRef}>{`<`}</button>
        <button id="next" ref={nextRef}>{`>`}</button>
      </div>
      <div className={styles.time} ref={timeRef}></div>
    </div>

  )
}

export default Banner