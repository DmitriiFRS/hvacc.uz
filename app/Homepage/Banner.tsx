import Link from "next/link";
import styles from "./Main.module.scss";
import Image from "next/image";

function Banner({ img }: { img: string }) {
   return (
      <div className={styles.banner}>
         <div className="container">
            <div className={styles.banner__imgBody}>
               <Image src={img} alt="Акция" fill />
            </div>
            <div className={styles.banner__btn}>
               <Link href={"#"}>
                  <span>Узнать подробнее</span>
               </Link>
            </div>
         </div>
      </div>
   );
}
export default Banner;
