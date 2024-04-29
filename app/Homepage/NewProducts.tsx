"use client";

import { Navigation, Pagination } from "swiper/modules";
import styles from "./Main.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext } from "react-icons/md";
import magboost from "../../public/img/homepage/magboost.webp";
import v8 from "../../public/img/homepage/v8.jpg";
import Image from "next/image";
import "swiper/css/pagination";

const sliderData = [
   {
      img: v8,
      title: "Серия VRF систем V8",
      subtitle1: "Наружные блоки нового поколения VRF-системы серии V8 представлены блоками модульного и индивидуального исполнения от 25,2 до 112 кВт.",
      subtitle2:
         "В одну систему можно объединять до трех модулей, таким образом максимальная холодопроизводительность составит 336 кВт. VRF-система сочетает в себе такие инновационные технологии как HyperLink, ShieldBox, SuperSense.",
   },
   {
      img: magboost,
      title: "Серия чиллеров Magboost",
      subtitle1: "Центробежный чиллер с магнитным валом MagBoost - это новейшее поколение чиллеров",
      subtitle2: "Серия предоставляет безмаслянную, высокоэффективную, стабильную, надёжную и бесшумную работу в широком диапазоне мощностей",
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
                           <Image src={el.img} alt="новинки" fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className={styles.new__descriptions}>
                           <div className={styles.new__titleBody}>
                              <h3 className={styles.new__title}>{el.title}</h3>
                              <p>{el.subtitle1}</p>
                              <p>{el.subtitle2}</p>
                           </div>
                           <div className={styles.new__btn}>
                              <button>
                                 <span>Подробнее</span>
                              </button>
                           </div>
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
