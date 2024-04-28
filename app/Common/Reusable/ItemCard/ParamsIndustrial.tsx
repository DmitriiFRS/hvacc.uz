import styles from "./ItemCard.module.scss";
import Image from "next/image";

type Props = {
   icon1: string;
   icon2: string | null;
   description1: string;
   description2: string | null;
};

function Params({ icon1, icon2, description1, description2 }: Props) {
   return (
      <div className={styles.main__mainParams}>
         <div className={styles.main__mainParams__body}>
            <div className={styles.main__mainParams__iconImg}>
               <Image src={icon1} alt="иконка" fill style={{ objectFit: "contain" }} />
            </div>
            <div className={`${styles.main__mainParams__title} ${styles.main__mainParams__titleProm}`}>{description1}</div>
         </div>
         {icon2 && description2 && (
            <div className={styles.main__mainParams__body}>
               <div className={styles.main__mainParams__iconImg}>
                  <Image src={icon2} alt="иконка" fill style={{ objectFit: "contain" }} />
               </div>
               <div className={`${styles.main__mainParams__title} ${styles.main__mainParams__titleProm}`}>{description2}</div>
            </div>
         )}
      </div>
   );
}
export default Params;
