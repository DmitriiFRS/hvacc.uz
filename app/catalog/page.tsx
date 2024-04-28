import styles from "./Catalog.module.scss";
import alba from "../../public/img/catalog/Alba.png";
import semiIndustrial from "../../public/img/catalog/semi-industrial.png";
import VRF from "../../public/img/catalog/VRF.png";
import chiller from "../../public/img/catalog/chiller.png";
import fancoil from "../../public/img/catalog/fancoil.png";
import condensed from "../../public/img/catalog/kkb.png";
import rooftop from "../../public/img/catalog/rooftop.png";
import ItemCard from "./ItemCard";
import Breadcrumbs from "../Common/Utilities/Breadcrumbs";
import accessories from "../../public/img/catalog/accesories.png";

const items = [
   {
      id: 0,
      name: "Бытовые сплит-системы",
      img: alba,
      href: "/catalog/air-conditioners",
   },
   {
      id: 1,
      name: "Полупромышленные сплит-системы",
      img: semiIndustrial,
      href: "/catalog/semi-industrial",
   },
   {
      id: 2,
      name: "VRF-системы",
      img: VRF,
      href: "/catalog/vrf",
   },
   {
      id: 4,
      name: "Чиллеры",
      img: chiller,
      href: "/catalog/chillers",
   },
   {
      id: 5,
      name: "Фанкойлы",
      img: fancoil,
      href: "/catalog/fancoils",
   },
   {
      id: 6,
      name: "Компрессорно-конденсаторные блоки",
      img: condensed,
      href: "/catalog/kkb",
   },
   {
      id: 7,
      name: "Руфтопы",
      img: rooftop,
      href: "/catalog/rooftop",
   },
   {
      id: 8,
      name: "Аксессуары",
      img: accessories,
      href: "/catalog/accessories",
   },
];

function Catalog() {
   return (
      <div className={styles.catalog}>
         <div className="container">
            <Breadcrumbs />
            <h2 className={styles.catalog__title}>Каталог оборудования</h2>
            <div className={styles.catalog__body}>
               {items.map((el) => {
                  return <ItemCard key={el.id} img={el.img} name={el.name} href={el.href} />;
               })}
            </div>
         </div>
      </div>
   );
}
export default Catalog;
