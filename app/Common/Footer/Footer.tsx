import styles from "./Footer.module.scss";
import logo from "../../../public/icons/hvacc-logo-black.png";
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
                           <li style={{ color: "inherit" }} key={el.id}>
                              <Link style={{ color: "inherit" }} href={el.href} className={styles.footer__navLink}>
                                 {el.name}
                              </Link>
                           </li>
                        );
                     })}
                  </ul>
               </nav>
               <div className={styles.footer__contacts}>
                  <h4 className={styles.footer__navTitle}>Контакты</h4>
                  <div className={styles.footer__navBody}>
                     <FiPhone size={20} />
                     <Link aria-label="phone" target="_blank" href={"tel:+998771055255"} style={{ color: "inherit" }} className={styles.footer__phone}>
                        +998 (77) 105 52 55
                     </Link>
                  </div>
                  <div className={styles.footer__navBody}>
                     <FiPhone size={20} />
                     <Link aria-label="phone" target="_blank" href={"tel:+998712005255"} style={{ color: "inherit" }} className={styles.footer__phone}>
                        +998 (71) 200 52 55
                     </Link>
                  </div>
                  <div className={styles.footer__navBody}>
                     <AiTwotoneMail size={20} />
                     <Link aria-label="email" target="_blank" href="mailto:mideahvacc@gmail.com" style={{ color: "inherit" }} className={styles.footer__email}>
                        mideahvacc@gmail.com
                     </Link>
                  </div>
                  <div className={styles.footer__iconsBody}>
                     <Link
                        className={styles.footer__icon}
                        href={"https://www.facebook.com/profile.php?id=61559886272525&mibextid=ZbWKwL"}
                        aria-label="facebook"
                        target="_blank"
                     >
                        <FaFacebookF style={{ color: "inherit" }} size={35} />
                     </Link>
                     <Link
                        className={styles.footer__icon}
                        href={"https://www.instagram.com/hvacc.uz?utm_source=qr&igsh=MThucXB3NmR4cDg5MA=="}
                        aria-label="instagram"
                        target="_blank"
                     >
                        <CiInstagram style={{ color: "inherit" }} size={35} />
                     </Link>
                     <Link className={styles.footer__icon} href={"https://t.me/+WAsOhLwBNixjODNi"} aria-label="telegram" target="_blank">
                        <FaTelegramPlane style={{ color: "inherit" }} size={35} />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
export default Footer;
