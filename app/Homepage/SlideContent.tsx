import styles from "./Main.module.scss";
import slide from "../../public/img/slide1.jpg";
import Image from "next/image";

function SlideContent({ img, title, subtitle }: { img: any; title: string; subtitle: string }) {
   return (
      <div className={styles.slide}>
         <div className={styles.slide__imgBody}>
            <Image src={img} alt="project" fill />
         </div>
         <div className={styles.slide__titleBody}>
            <div className={styles.slide__title}>{title}</div>
            <div className={styles.slide__subtitle}>{subtitle}</div>
         </div>
      </div>
   );
}
export default SlideContent;
