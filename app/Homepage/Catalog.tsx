"use client";

import Image from "next/image";
import styles from "./Main.module.scss";
import alba from "../../public/img/catalog/Alba.png";
import col from "../../public/img/catalog/cols.png";
import cas from "../../public/img/catalog/semi-industrial.png";
import duct from "../../public/img/catalog/duct.png";
import VRF from "../../public/img/catalog/VRF.png";
import rooftop from "../../public/img/catalog/rooftop.png";
import chiller from "../../public/img/catalog/chiller.png";
import multi from "../../public/img/catalog/multi.png";
import kkb from "../../public/img/catalog/kkb.png";
import Link from "next/link";

function Catalog() {
   return (
      <section className={styles.catalog}>
         <div className="container">
            <h1 className={styles.catalog__title}>Наш каталог оборудования</h1>
            <div className={styles.catalog__grid}>
               <Link href={"catalog/air-conditioners"} className={styles.catalog__aircond}>
                  <div className={styles.catalog__itemTitle}>Бытовые сплит-системы</div>
                  <div className={`${styles.catalog__imgBody} ${styles.catalog__imgBodyAircond}`}>
                     <Image quality={30} priority={true} src={alba} alt="Бытовые сплит-системы" fill style={{ objectFit: "contain" }} />
                  </div>
               </Link>
               <Link href={"catalog/col-air-conditioners"} className={styles.catalog__colSplit}>
                  <div className={styles.catalog__itemTitle}>Колонные сплит-системы</div>
                  <div className={styles.catalog__imgBody}>
                     <Image quality={30} priority={true} src={col} alt="Колонные сплит-системы" fill style={{ objectFit: "contain" }} />
                  </div>
               </Link>
               <Link href={"catalog/duct-air-conditioners"} className={styles.catalog__ductSplit}>
                  <div className={styles.catalog__itemTitle}>Канальные сплит-системы</div>
                  <div className={styles.catalog__imgBody}>
                     <Image quality={30} priority={true} src={duct} alt="Канальные сплит-системы" fill style={{ objectFit: "contain" }} />
                  </div>
               </Link>
               <Link href={"catalog/cassette-air-conditioners"} className={styles.catalog__casSplit}>
                  <div className={styles.catalog__itemTitle}>Кассетные сплит-системы</div>
                  <div className={styles.catalog__imgBody}>
                     <Image quality={30} priority={true} src={cas} alt="Кассетные сплит-системы" fill style={{ objectFit: "contain" }} />
                  </div>
               </Link>
               <Link href={"catalog/multi-split"} className={styles.catalog__multi}>
                  <div className={styles.catalog__itemTitle}>Мульти-сплит системы</div>
                  <div className={styles.catalog__imgBody}>
                     <Image quality={30} src={multi} alt="Мульти-сплит системы" fill style={{ objectFit: "contain" }} />
                  </div>
               </Link>
               <Link href={"catalog/vrf"} className={styles.catalog__vrf}>
                  <div className={styles.catalog__itemTitle}>VRF системы</div>
                  <div className={styles.catalog__imgBody}>
                     <Image quality={30} src={VRF} alt="VRF системы" fill style={{ objectFit: "contain" }} />
                  </div>
               </Link>
               <Link href={"catalog/chillers"} className={styles.catalog__chillers}>
                  <div className={styles.catalog__itemTitle}>Чиллеры</div>
                  <div className={styles.catalog__imgBody}>
                     <Image quality={30} src={chiller} alt="Чиллеры" fill style={{ objectFit: "contain" }} />
                  </div>
               </Link>
               <Link href={"catalog/rooftop"} className={styles.catalog__rooftop}>
                  <div className={styles.catalog__itemTitle}>Руфтопы</div>
                  <div className={styles.catalog__imgBody}>
                     <Image quality={30} src={rooftop} alt="Руфтопы" fill style={{ objectFit: "contain" }} />
                  </div>
               </Link>
               <Link href={"catalog/kkb"} className={styles.catalog__kkb}>
                  <div className={styles.catalog__itemTitle}>Компрессорно-конденсаторные блоки</div>
                  <div className={styles.catalog__imgBody}>
                     <Image quality={30} src={kkb} alt="Компрессорно-конденсаторные блоки" fill style={{ objectFit: "contain" }} />
                  </div>
               </Link>
            </div>
         </div>
      </section>
   );
}
export default Catalog;
