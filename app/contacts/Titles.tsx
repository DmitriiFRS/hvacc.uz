import styles from "./Contacts.module.scss";
import { FiPhone } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

function Titles() {
   return (
      <div className={styles.contacts__titleBody}>
         <a href={"tel://+998973336357"} className={styles.contacts__phoneBody}>
            <FiPhone size={40} />
            <div className={styles.contacts__phone}>+998(97)333-63-57</div>
            <span className={styles.contacts__line}></span>
         </a>
         <a href="mailto:mideahvacc@gmail.com" className={styles.contacts__emailBody}>
            <AiTwotoneMail size={40} />
            <div className={styles.contacts__email}>mideahvacc@gmail.com</div>
            <span className={styles.contacts__line}></span>
         </a>
         <div className={styles.contacts__social}>
            <div className={styles.contacts__socialTitle}>Мы в социальных сетях</div>
            <div className={styles.contacts__socialIcons}>
               <Link href="https://t.me/+WAsOhLwBNixjODNi" target="_blank">
                  <FaTelegramPlane size={30} color="#00AEEF" />
               </Link>
               <Link href="https://www.instagram.com/hvacc.uz?utm_source=qr&igsh=MThucXB3NmR4cDg5MA==" target="_blank">
                  <FaInstagram size={30} color="#CD176A" />
               </Link>
               <Link href="https://www.facebook.com/profile.php?id=61559886272525&mibextid=ZbWKwL" target="_blank">
                  <FaFacebook size={30} color="#38529A" />
               </Link>
            </div>
         </div>
         <div className={styles.contacts__description}>Чтобы связаться с нами — заполните форму справа. Наш менеджер свяжется с вами в ближайшее время.</div>
      </div>
   );
}
export default Titles;
