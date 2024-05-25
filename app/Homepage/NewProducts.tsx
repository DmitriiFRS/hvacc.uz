"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import styles from "./Main.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext } from "react-icons/md";
import alba from "../../public/img/homepage/alba.jpg";
import breez from "../../public/img/homepage/breezeless-slider.jpg";
import gaia from "../../public/img/homepage/gaia1-slider.jpg";
import Image from "next/image";
import "swiper/css/pagination";
import Link from "next/link";

const sliderData = [
   {
      img: alba,
      link: "catalog/vrf/outer",
   },
   {
      img: breez,
      link: "catalog/chillers/magboost",
   },
   {
      img: gaia,
      link: "catalog/vrf/outer",
   },
];

function NewProducts() {
   return (
      <div className={styles.new}>
         <Swiper
            className={styles.new__swiper}
            slidesPerView={1}
            loop
            autoplay={{
               delay: 4000,
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
                           <Image src={el.img} alt="новинки" fill style={{ objectFit: "cover" }} priority={true} quality={100} />
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
