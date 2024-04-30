import styles from "./ItemCard.module.scss";
import Link from "next/link";
import { DataInner } from "@/app/catalog/multi-split/page";

function MultisplitList({ el, slug }: { el: DataInner[]; slug: string }) {
   return (
      <div className={styles.list}>
         <h3 className={styles.table__title}>Все модели {el[0].multisplitGroup && el[0].multisplitGroup.name}</h3>
         <ul className={styles.list__body}>
            {el
               .sort((a, b): any => {
                  return +a.multisplitGroup.coolingPower - +b.multisplitGroup.coolingPower;
               })
               .map((item, index) => {
                  return (
                     <li className={styles.list__item} key={index}>
                        <Link
                           className={styles.list__link}
                           href={`${slug}/${item.multisplitGroup && item.multisplitGroup.model.replace(/\s|\//g, "-").toLowerCase()}`}
                        >
                           {item.multisplitGroup && item.multisplitGroup.model}
                        </Link>
                     </li>
                  );
               })}
         </ul>
      </div>
   );
}
export default MultisplitList;
