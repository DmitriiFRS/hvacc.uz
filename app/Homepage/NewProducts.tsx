"use client";

import { Navigation, Pagination } from "swiper/modules";
import styles from "./Main.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext } from "react-icons/md";
import magboost from "../../public/img/homepage/alba.jpg";
import v8 from "../../public/img/homepage/alba.jpg";
import Image from "next/image";
import "swiper/css/pagination";
import Link from "next/link";

const sliderData = [
   {
      img: v8,
      link: "catalog/vrf/outer",
   },
   {
      img: magboost,
      link: "catalog/chillers/magboost",
   },
];

function NewProducts() {
   return (
      <div className={styles.new}>
         <Swiper
            className={styles.new__swiper}
            slidesPerView={1}
            loop
            navigation={{
               nextEl: ".new-slider-next",
               prevEl: ".new-slider-prev",
            }}
            pagination={{
               clickable: true,
            }}
            modules={[Navigation, Pagination]}
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
                           <Image src={el.img} alt="новинки" fill style={{ objectFit: "cover" }} priority={true} />
                        </div>
                     </div>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
}
export default NewProducts;
