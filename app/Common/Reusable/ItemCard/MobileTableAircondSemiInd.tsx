import Link from "next/link";
import { AirCondSemiInner } from "../../Data/Equip/AirCond-SemiInd.data";
import styles from "./ItemCard.module.scss";

function MobileTableAircondSemiInd({ el, slug }: { el: AirCondSemiInner[]; slug: string }) {
   return (
      <div className={`${styles.list} ${styles.list__AircondSemiInd}`}>
         <ul className={styles.list__body}>
            {el.map((item, index) => {
               return (
                  <li className={styles.list__item} key={index}>
                     <Link
                        className={styles.list__link}
                        href={`${slug}/${
                           (item.airCondGroup && item.airCondGroup.model.replace(/\s|\//g, "-").toLowerCase()) ||
                           (item.semiIndustrialGroup && item.semiIndustrialGroup.model.replace(/\s|\//g, "-").toLowerCase())
                        }`}
                     >
                        {(item.airCondGroup && item.airCondGroup.model) || (item.semiIndustrialGroup && item.semiIndustrialGroup.model)}
                     </Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
export default MobileTableAircondSemiInd;
