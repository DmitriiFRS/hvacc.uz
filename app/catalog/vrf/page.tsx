import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import styles from "./Vrf.module.scss";
import module from "../../../public/img/vrf/module.png";
import mini from "../../../public/img/vrf/mini.png";
import Image from "next/image";
import Link from "next/link";
import atom from "../../../public/img/vrf/atomVrf.png";
import innerVrf from "../../../public/img/vrf/innerVrf.png";

const data = [
   {
      id: 0,
      title: "Наружные блоки VRF-системы",
      img: module,
      href: "/catalog/vrf/outer",
   },
   {
      id: 1,
      title: "Мини VRF",
      img: mini,
      href: "/catalog/vrf/mini",
   },
   {
      id: 2,
      title: "Atom VRF",
      img: atom,
      href: "/catalog/vrf/atom",
   },
   {
      id: 3,
      title: "Внутренние блоки VRF-системы",
      img: innerVrf,
      href: "/catalog/vrf/inner",
   },
];

function Vrf() {
   return (
      <section className={styles.vrf}>
         <div className="container">
            <Breadcrumbs />
            <h2 className={styles.vrf__title}>VRF-Системы</h2>
            <div className={styles.vrf__body}>
               {data.map((el) => {
                  return (
                     <Link href={el.href} key={el.id} className={styles.vrf__item}>
                        <div className={styles.vrf__imgBody}>
                           <Image src={el.img} alt={el.title} fill objectFit="contain" />
                        </div>
                        <div className={styles.vrf__itemTitle}>{el.title}</div>
                     </Link>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
export default Vrf;
