"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import styles from "./Main.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext } from "react-icons/md";
import v8 from "../../public/img/homepage/Carousel/v8pc.png";
import v8M from "../../public/img/homepage/Carousel/v8-mobile.png";
import magboost from "../../public/img/homepage/Carousel/magboostpc.png";
import magboostM from "../../public/img/homepage/Carousel/magboost-mobile.png";
import Image from "next/image";
import "swiper/css/pagination";

const sliderData = [
   {
      img: v8,
      mobileImg: v8M,
   },
   {
      img: magboost,
      mobileImg: magboostM,
   },
];

function ImageCarousel() {
   return (
      <div className={styles.new}>
         <Swiper
            className={styles.new__swiper}
            slidesPerView={1}
            loop
            autoplay={{
               delay: 3000,
               pauseOnMouseEnter: true,
            }}
            navigation={{
               nextEl: ".new-slider-next",
               prevEl: ".new-slider-prev",
            }}
            pagination={{
               clickable: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
         >
            <button aria-label="next-slide" className="new-slider-next">
               <MdNavigateNext />
            </button>
            <button aria-label="previous-slide" className="new-slider-prev">
               <MdNavigateNext />
            </button>
            <div className="swiper-pagination"></div>
            {sliderData.map((el, index) => {
               return (
                  <SwiperSlide key={index}>
                     <div className={styles.new__slideContainer}>
                        <div className={styles.new__imgBody2}>
                           <Image src={el.img} alt="новинки" fill style={{ objectFit: "cover" }} priority={true} quality={100} />
                        </div>
                        <div className={`${styles.new__imgBodyMobile2}`}>
                           <Image src={el.mobileImg} alt="новинки" fill style={{ objectFit: "cover" }} priority={true} quality={100} />
                        </div>
                     </div>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
}
export default ImageCarousel;
