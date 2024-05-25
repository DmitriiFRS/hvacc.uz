"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import styles from "./Main.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext } from "react-icons/md";
import v8 from "../../public/img/homepage/Carousel/carousel-v8.jpg";
import v8second from "../../public/img/homepage/Carousel/carousel-v82.jpg";
import ssense from "../../public/img/homepage/Carousel/carousel-v8-supersense.jpg";
import shieldbox from "../../public/img/homepage/Carousel/carousel-shieldBox.jpg";
import mcity from "../../public/img/homepage/Carousel/carousel-mcity.jpg";
import v6 from "../../public/img/homepage/Carousel/carousel-v6.jpg";
import Image from "next/image";
import "swiper/css/pagination";

const sliderData = [v8, v8second, ssense, shieldbox, mcity, v6];

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
                        <div className={styles.new__imgBody}>
                           <Image src={el} alt="новинки" fill style={{ objectFit: "cover" }} priority={true} quality={100} />
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
