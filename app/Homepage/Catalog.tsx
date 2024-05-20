"use client";

import Image from "next/image";
import styles from "./Main.module.scss";
import alba from "../../public/img/catalog/Alba.png";
import semiIndustrial from "../../public/img/catalog/semi-industrial.png";
import VRF from "../../public/img/catalog/VRF.png";
import rooftop from "../../public/img/catalog/rooftop.png";
import chiller from "../../public/img/catalog/chiller.png";
import multi from "../../public/img/catalog/multi.png";
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
      img: multi,
      title: "Мульти-сплит системы",
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
      <section className={styles.catalog}>
         <div className="container">
            <h1 className={styles.catalog__title}>Наш каталог оборудования</h1>
            <div className={styles.catalog__grid}>
               <Link href={"catalog/air-conditioners"} className={styles.catalog__aircond}>
                  <div className={styles.catalog__itemTitle}>Бытовые сплит-системы</div>
                  <div className={`${styles.catalog__imgBody} ${styles.catalog__imgBodyAircond}`}>
                     <Image src={alba} alt="Бытовые сплит-системы" fill style={{ objectFit: "contain" }} />
                  </div>
               </Link>
               <Link href={"catalog/col-air-conditioners"} className={styles.catalog__semiInd}>
                  <div className={styles.catalog__itemTitle}>Полупромышленные сплит-системы</div>
                  <div className={styles.catalog__imgBody}>
                     <Image src={semiIndustrial} alt="Бытовые сплит-системы" fill style={{ objectFit: "contain" }} />
                  </div>
               </Link>
               <Link href={"catalog/multi-split"} className={styles.catalog__multi}>
                  <div className={styles.catalog__itemTitle}>Мульти-сплит системы</div>
                  <div className={styles.catalog__imgBody}>
                     <Image src={multi} alt="Бытовые сплит-системы" fill style={{ objectFit: "contain" }} />
                  </div>
               </Link>
               <Link href={"catalog/vrf"} className={styles.catalog__vrf}>
                  <div className={styles.catalog__itemTitle}>VRF системы</div>
                  <div className={styles.catalog__imgBody}>
                     <Image src={VRF} alt="Бытовые сплит-системы" fill style={{ objectFit: "contain" }} />
                  </div>
               </Link>
               <Link href={"catalog/chillers"} className={styles.catalog__chillers}>
                  <div className={styles.catalog__itemTitle}>Чиллеры</div>
                  <div className={styles.catalog__imgBody}>
                     <Image src={chiller} alt="Бытовые сплит-системы" fill style={{ objectFit: "contain" }} />
                  </div>
               </Link>
               <Link href={"catalog/rooftop"} className={styles.catalog__rooftop}>
                  <div className={styles.catalog__itemTitle}>Руфтопы</div>
                  <div className={styles.catalog__imgBody}>
                     <Image src={rooftop} alt="Бытовые сплит-системы" fill style={{ objectFit: "contain" }} />
                  </div>
               </Link>
            </div>
         </div>
      </section>
   );
}
export default Catalog;
