import Link from "next/link";
import styles from "./ItemCard.module.scss";
import { DataInner } from "@/app/catalog/multi-split/page";

function MobileTableMultisplit({ el, slug }: { el: DataInner[]; slug: string }) {
   return (
      <div className={`${styles.list} ${styles.list__AircondSemiInd}`}>
         <ul className={styles.list__body}>
            {el.map((item, index) => {
               return (
                  <li className={styles.list__item} key={index}>
                     <Link className={styles.list__link} href={`${slug}/${item.multisplitGroup.model.replace(/\s|\//g, "-").toLowerCase()}`}>
                        {item.multisplitGroup.model}
                     </Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
export default MobileTableMultisplit;
