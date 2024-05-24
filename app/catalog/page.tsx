import styles from "./Catalog.module.scss";
import alba from "../../public/img/catalog/aircond.png";
import cassette from "../../public/img/catalog/semi-industrial.png";
import VRF from "../../public/img/catalog/VRF.png";
import chiller from "../../public/img/catalog/chiller.png";
import fancoil from "../../public/img/catalog/fancoil.png";
import condensed from "../../public/img/catalog/kkb.png";
import rooftop from "../../public/img/catalog/rooftop.png";
import ItemCard from "./ItemCard";
import Breadcrumbs from "../Common/Utilities/Breadcrumbs";
import accessories from "../../public/img/catalog/accesories.png";
import duct from "../../public/img/catalog/duct.png";
import cols from "../../public/img/catalog/cols.png";
import multi from "../../public/img/catalog/multi.png";

const items = [
   {
      id: 0,
      name: "Бытовые сплит-системы",
      img: alba,
      href: "/catalog/air-conditioners",
      className: styles.item__imgBody,
   },
   {
      id: 1,
      name: "Колонные кондиционеры",
      img: cols,
      href: "/catalog/col-air-conditioners",
      className: styles.item__imgBody,
   },
   {
      id: 2,
      name: "Канальные кондиционеры",
      img: duct,
      href: "/catalog/duct-air-conditioners",
      className: styles.item__imgBody,
   },
   {
      id: 3,
      name: "Кассетные кондиционеры",
      img: cassette,
      href: "/catalog/cassette-air-conditioners",
      className: styles.item__imgBody,
   },
   {
      id: 4,
      name: "Мульти-сплит системы",
      img: multi,
      href: "/catalog/multi-split",
      className: styles.item__imgBody,
   },
   {
      id: 5,
      name: "VRF-системы",
      img: VRF,
      href: "/catalog/vrf",
      className: styles.item__imgBodyHorizontal,
   },
   {
      id: 6,
      name: "Чиллеры",
      img: chiller,
      href: "/catalog/chillers",
      className: styles.item__imgBodyHorizontal,
   },
   {
      id: 7,
      name: "Фанкойлы",
      img: fancoil,
      href: "/catalog/fancoils",
      className: styles.item__imgBody,
   },
   {
      id: 8,
      name: "Компрессорно-конденсаторные блоки",
      img: condensed,
      href: "/catalog/kkb",
      className: styles.item__imgBody,
   },
   {
      id: 9,
      name: "Руфтопы",
      img: rooftop,
      href: "/catalog/rooftop",
      className: styles.item__imgBody,
   },
   {
      id: 10,
      name: "Аксессуары",
      img: accessories,
      href: "/catalog/accessories",
      className: styles.item__imgBody,
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
                  return <ItemCard key={el.id} img={el.img} name={el.name} href={el.href} className={el.className} />;
               })}
            </div>
         </div>
      </div>
   );
}
export default Catalog;
