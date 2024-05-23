import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "../../../public/icons/MideaLogo.png";
import Link from "next/link";
import { nav } from "../Data/Nav.data";
import Mobile from "./Mobile";

function Header() {
   return (
      <header className={`${styles.header} header`}>
         <div className={`${styles.header__container} container`}>
            <Mobile />
            <Link href={"/"} className={styles.header__logo}>
               <Image src={logo} alt="logo" fill />
            </Link>
            <nav className={styles.header__nav}>
               <ul className={styles.header__navList}>
                  {nav.map((el) => {
                     return (
                        <li key={el.id} className={styles.header__navItem}>
                           <Link className={styles.header__navLink} href={el.href}>
                              {el.name}
                              <span></span>
                           </Link>
                        </li>
                     );
                  })}
               </ul>
            </nav>
            <div className={styles.header__phones}>
               <Link aria-label="phone number" target="_blank" href={"tel:+998771055255"} className={styles.header__phone}>
                  +998 (77) 105 52 55
               </Link>
               <Link aria-label="phone number" target="_blank" href={"tel:+998712005255"} className={styles.header__phone}>
                  +998 (71) 200 52 55
               </Link>
            </div>
         </div>
      </header>
   );
}
export default Header;
