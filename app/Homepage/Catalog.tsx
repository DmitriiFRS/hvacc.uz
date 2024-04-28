"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from "./Main.module.scss";
import alba from "../../public/img/catalog/Alba.png";
import semiIndustrial from "../../public/img/catalog/semi-industrial.png";
import VRF from "../../public/img/catalog/VRF.png";
import rooftop from "../../public/img/catalog/rooftop.png";
import chiller from "../../public/img/catalog/chiller.png";
import { Autoplay, EffectCreative } from "swiper/modules";
import Link from "next/link";

const slide = [
   {
      img: alba,
      title: "Бытовые сплит-системы",
      description:
         "Бытовые сплит-системы – кондиционеры, состоящие из двух блоков: внутреннего, монтируемого в помещении, и внешнего, устанавливаемого за его пределами",
   },
   {
      img: semiIndustrial,
      title: "Полупромышленные сплит-системы",
      description: "Мощные кондиционеры, предназначенные для кондиционирования больших помещений, таких как магазины, офисы, рестораны",
   },
   {
      img: VRF,
      title: "VRF-системы",
      description:
         "Централизованные системы кондиционирования, объединяющие один внешний блок с множеством внутренних, позволяя индивидуально регулировать температуру в разных зонах и обеспечивая высокую энергоэффективность",
   },
   {
      img: chiller,
      title: "Чиллеры",
      description:
         "Мощные холодильные машины, которые охлаждают воду или другую жидкость, используемую затем для кондиционирования воздуха, охлаждения технологического оборудования или других целей",
   },
   {
      img: rooftop,
      title: "Руфтопы",
      description:
         "Моноблочные системы кондиционирования, монтируемые на крыше здания и обеспечивающие охлаждение, нагрев и вентиляцию воздуха в больших помещениях",
   },
];

function Catalog() {
   return (
      <div className={styles.catalog}>
         <div className={styles.catalog__bg}></div>
         <h1 className={styles.catalog__title}>Наш каталог оборудования</h1>
         <Swiper
            className={styles.catalog__body}
            slidesPerView={1}
            autoplay={{
               delay: 3000,
               pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, EffectCreative]}
            loop={true}
            speed={1000}
            effect="creative"
            creativeEffect={{
               prev: {
                  translate: ["-120%", 0, -500],
               },
               next: {
                  translate: ["120%", 0, -500],
               },
            }}
         >
            {slide.map((el, index) => {
               return (
                  <SwiperSlide className={styles.catalog__slideBody} key={index}>
                     <Link className={styles.catalog__slide} href={"/catalog"}>
                        <div className={styles.catalog__imgBody}>
                           <Image src={el.img} alt="оборудование" fill objectFit="contain" />
                        </div>
                        <div className={styles.catalog__slideTitleBody}>
                           <h3 className={styles.catalog__slideTitle}>{el.title}</h3>
                           <p className={styles.catalog__slideDescription}>{el.description}</p>
                           <div className={styles.catalog__moveTo}>
                              Перейти в каталог <span></span>
                           </div>
                        </div>
                     </Link>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
}
export default Catalog;
