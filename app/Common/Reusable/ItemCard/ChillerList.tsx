import styles from "./ItemCard.module.scss";
import Link from "next/link";
import { DataInner } from "@/app/catalog/chillers/[slug]/page";

function ChillerList({ el, slug }: { el: DataInner[]; slug: string }) {
   return (
      <div className={styles.list}>
         <h3 className={styles.table__title}>Все модели {el[0].chillerGroup && el[0].chillerGroup.name}</h3>
         <ul className={styles.list__body}>
            {el
               .sort((a, b): any => {
                  return +a.chillerGroup.coolingcapacity - +b.chillerGroup.coolingcapacity;
               })
               .map((item, index) => {
                  return (
                     <li className={styles.list__item} key={index}>
                        <Link
                           className={styles.list__link}
                           href={`${slug}/${item.chillerGroup && item.chillerGroup.model.replace(/\s|\//g, "-").toLowerCase()}`}
                        >
                           {item.chillerGroup && item.chillerGroup.model}
                        </Link>
                     </li>
                  );
               })}
         </ul>
      </div>
   );
}
export default ChillerList;
