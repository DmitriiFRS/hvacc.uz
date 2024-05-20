import Breadcrumbs from "../Common/Utilities/Breadcrumbs";
import styles from "./Service.module.scss";
import bg from "../../public/img/service/servicebg.png";
import maintenance from "../../public/img/service/maintenance.jpg";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { MdOutlineContactSupport } from "react-icons/md";
import { LiaStoreAltSolid } from "react-icons/lia";
import { FaTelegram } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import services from "../../public/img/service-1.jpeg";
import Image from "next/image";
import Link from "next/link";

const cols = [
   {
      title: "Наш Telegram-Bot",
      subtitle: "@midea_welkin_service_bot",
      icon: <FaTelegram />,
   },
   {
      title: "3 года",
      subtitle: "Гарантии на бытовые кондиционеры",
      icon: <IoShieldCheckmarkOutline />,
   },
   {
      title: "От 1 до 5 лет",
      subtitle: "Гарантии на промышленные кондиционеры",
      icon: <FaGear />,
   },
   {
      title: "24/7",
      subtitle: "Служба технической поддержки",
      icon: <MdOutlineContactSupport />,
   },
   {
      title: "Оптимизация обслуживания клиентов",
      subtitle: "Имеется собственный склад запчастей",
      icon: <LiaStoreAltSolid />,
   },
   {
      title: "10 лет",
      subtitle: "Гарантии на компрессор",
      icon: <FaGears />,
   },
];

function Service() {
   return (
      <section className={styles.service}>
         <div className={`container ${styles.service__container}`}>
            <Breadcrumbs />
            <h2 className={styles.service__title}>Сервис-центр</h2>
            <div className={styles.service__bg}>
               <Image src={bg} alt="Сервис-центр" fill style={{ objectFit: "contain" }} />
            </div>
            <div className={styles.service__cols}>
               <h3 className={styles.service__cols__title}>Долгосрочная гарантия и надежная поддержка</h3>
               <ul className={styles.service__cols__list}>
                  {cols.map((el, index) => {
                     return (
                        <li className={styles.service__cols__item} key={index}>
                           <div className={styles.service__cols__item__icon}>{el.icon}</div>
                           <div className={styles.service__cols__item__title}>{el.title}</div>
                           <div className={styles.service__cols__item__subtitle}>{el.subtitle}</div>
                        </li>
                     );
                  })}
               </ul>
            </div>
            <div className={styles.service__services}>
               <h3 className={styles.service__services__title}>Услуги сервисного центра</h3>
               <div className={styles.service__services__container}>
                  <div className={styles.service__services__imgBody}>
                     <Image src={services} alt="сервис" fill style={{ objectFit: "contain" }} />
                  </div>
                  <ul className={styles.service__services__list}>
                     <li className={styles.service__services__item}>Монтаж бытовых сплит-систем</li>
                     <li className={styles.service__services__item}>Монтаж систем теплохолодоснабжения (раздел ОВиК под ключ)</li>
                     <li className={styles.service__services__item}>Монтаж систем вентиляций и вент. оборудования</li>
                     <li className={styles.service__services__item}>Ремонт всех систем кондиционирования</li>
                     <li className={styles.service__services__item}>Техническое обслуживание</li>
                  </ul>
               </div>
            </div>
            <div className={styles.service__maintenance}>
               <div className={styles.service__services__container}>
                  <div className={styles.service__services__imgBody}>
                     <Image src={maintenance} alt="профилактика" fill style={{ objectFit: "contain" }} />
                  </div>
                  <div className={styles.service__services__list2}>
                     <h3 className={styles.service__services__title}>Профилактика кондиционеров</h3>
                     <Link href={"tel:+998771055255"} className={styles.service__services__item2}>
                        +998 77 105 52 55
                     </Link>
                  </div>
                  <div className={styles.service__contacts}>
                     <h3 className={styles.service__services__title}>Связаться с сервисным центром</h3>
                     <div className={styles.service__contacts__nums}>
                        <Link target="_blank" href={"tel:+998771055255"}>
                           +998 77 105 52 55
                        </Link>
                        <Link target="_blank" href={"tel:+998712005255"}>
                           +998 71 200 52 55
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
export default Service;
