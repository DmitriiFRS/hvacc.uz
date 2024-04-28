import styles from "./Footer.module.scss";
import logo from "../../../public/icons/MideaLogo.png";
import Image from "next/image";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { footerNav } from "../Data/Nav.data";

function Footer() {
   return (
      <footer className={`footer ${styles.footer}`}>
         <div className={styles.footer__inner}>
            <div className={`${styles.footer__container} container`}>
               <Link className={styles.footer__imgBody} href={"/"}>
                  <Image src={logo} alt="midea" fill />
               </Link>
               <div className={styles.footer__col}>
                  <Link href={"/service"}>Сервис-центр</Link>
               </div>
               <nav className={styles.footer__nav}>
                  <h4 className={styles.footer__navTitle}>Навигация</h4>
                  <ul className={styles.footer__navList}>
                     {footerNav.map((el) => {
                        return (
                           <Link style={{ color: "inherit" }} key={el.id} href={el.href}>
                              <li className={styles.footer__navLink}>{el.name}</li>
                           </Link>
                        );
                     })}
                  </ul>
               </nav>
               <div className={styles.footer__contacts}>
                  <h4 className={styles.footer__navTitle}>Контакты</h4>
                  <div className={styles.footer__navBody}>
                     <FiPhone size={20} />
                     <Link target="_blank" href={"tel:+998973336357"} style={{ color: "inherit" }} className={styles.footer__phone}>
                        +998(97) 333-63-57{" "}
                     </Link>
                  </div>
                  <div className={styles.footer__navBody}>
                     <AiTwotoneMail size={20} />
                     <Link target="_blank" href="mailto:mideahvacc@gmail.com" style={{ color: "inherit" }} className={styles.footer__email}>
                        mideahvacc@gmail.com
                     </Link>
                  </div>
                  <div className={styles.footer__iconsBody}>
                     <Link className={styles.footer__icon} href={"#"}>
                        <FaFacebookF color="#888888" size={35} />
                     </Link>
                     <Link className={styles.footer__icon} href={"#"}>
                        <CiInstagram color="#888888" size={35} />
                     </Link>
                     <Link className={styles.footer__icon} href={"#"}>
                        <FaTelegramPlane color="#888888" size={35} />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
export default Footer;
