import styles from "./Projects.module.scss";
import Image from "next/image";

type Props = {
   el: {
      img: {
         src: string;
      };
      title: string;
      town: string;
      equip: string;
   };
};

function item({ el }: Props) {
   return (
      <div className={styles.item}>
         <div className={styles.item__imgBody}>
            <Image src={el.img.src} alt="img" fill loading="lazy" objectFit="cover" />
         </div>
         <div className={styles.item__body}>
            <div className={styles.item__title}>{el.title}</div>
            <div className={styles.item__town}>{el.town}</div>
            <div className={styles.item__equip}>{el.equip}</div>
         </div>
      </div>
   );
}
export default item;
