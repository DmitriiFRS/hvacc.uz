"use client";
import styles from "./Main.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import image1 from "../../public/img/homepage/slide1.jpg";
import image2 from "../../public/img/homepage/slide2.jpg";
import image3 from "../../public/img/homepage/slide3.jpg";
import image4 from "../../public/img/homepage/slide4.jpg";
import image5 from "../../public/img/homepage/slide5.jpg";
import image6 from "../../public/img/homepage/slide6.jpg";
import image7 from "../../public/img/homepage/slide7.jpg";
import image8 from "../../public/img/homepage/slide8.jpg";
import image9 from "../../public/img/homepage/slide9.jpg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MdNavigateNext } from "react-icons/md";
import Image from "next/image";
import "./swipercss.css";

const sliderData = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

function MostPopular() {
   return (
      <div className={styles.popular}>
         <Swiper
            className={styles.popular__swiper}
            autoplay={{
               delay: 3000,
               pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={700}
            slidesPerView={1}
            navigation={{
               nextEl: ".popular-button-next",
               prevEl: ".popular-button-prev",
            }}
            modules={[Navigation, Pagination, Autoplay]}
            grabCursor
            pagination={{
               clickable: true,
            }}
         >
            <button className="popular-button-next">
               <MdNavigateNext />
            </button>
            <button className="popular-button-prev">
               <MdNavigateNext />
            </button>
            {sliderData.map((el, index) => {
               return (
                  <SwiperSlide key={index}>
                     <div className={styles.popular__imgBody}>
                        <Image src={el} alt="оборудование" fill />
                     </div>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
}
export default MostPopular;
