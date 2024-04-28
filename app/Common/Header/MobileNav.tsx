import Link from "next/link";
import { mobileNav } from "../Data/Nav.data";
import styles from "./Header.module.scss";
import { IoIosCloseCircleOutline } from "react-icons/io";

function MobileNav({
   isOpen,
   setIsOpen,
   setStartClose,
   startClose,
}: {
   isOpen: boolean;
   setIsOpen: (bool: boolean) => void;
   setStartClose: (bool: boolean) => void;
   startClose: boolean;
}) {
   function closeWindow() {
      setStartClose(true);
      setTimeout(() => {
         setIsOpen(false);
         setStartClose(false);
      }, 300);
   }
   return (
      <div className={`${styles.mobileNav} ${isOpen ? styles.mobileNav__active : ""}`}>
         <div className={`${styles.mobileNav__body} ${startClose ? styles.mobileNav__body__unactive : ""}`}>
            <button onClick={closeWindow} className={styles.mobileNav__close}>
               <IoIosCloseCircleOutline />
            </button>
            <div className={styles.mobileNav__content}>
               <div className={styles.mobileNav__catalog}>
                  <h3 className={styles.mobileNav__title}>Каталог</h3>
                  <ul className={styles.mobileNav__list}>
                     {mobileNav.map((el) => {
                        return (
                           <li className={styles.mobileNav__item} key={el.id}>
                              <Link onClick={closeWindow} href={el.href}>
                                 {el.name}
                              </Link>
                           </li>
                        );
                     })}
                  </ul>
               </div>
               <div className={styles.mobileNav__support}>
                  <h3 className={styles.mobileNav__title}>Поддержка</h3>
                  <ul className={styles.mobileNav__list}>
                     <li className={styles.mobileNav__item}>
                        <Link onClick={closeWindow} href={"/contacts"}>
                           Контакты
                        </Link>
                     </li>
                     <li className={styles.mobileNav__item}>
                        <Link onClick={closeWindow} href={"/service"}>
                           Сервис-центр
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className={styles.mobileNav__other}>
                  <h3 className={styles.mobileNav__title}>Другое</h3>
                  <ul className={styles.mobileNav__list}>
                     <li className={styles.mobileNav__item}>
                        <Link onClick={closeWindow} href={"/about"}>
                           О компании
                        </Link>
                     </li>
                     <li className={styles.mobileNav__item}>
                        <Link onClick={closeWindow} href={"/projects"}>
                           Выполненные проекты
                        </Link>
                     </li>
                     <li className={styles.mobileNav__item}>
                        <Link onClick={closeWindow} href={"/news"}>
                           Новости
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
export default MobileNav;
