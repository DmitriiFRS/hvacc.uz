import { DataInner } from "@/app/catalog/fancoils/[slug]/page";
import styles from "./ItemCard.module.scss";
import Link from "next/link";

function FancoilList({ el, slug }: { el: DataInner[]; slug: string }) {
   return (
      <div className={styles.list}>
         <h3 className={styles.table__title}>Все модели {el[0].fancoilGroup.name}</h3>
         <ul className={styles.list__body}>
            {el
               .sort((a, b): any => {
                  if (typeof Number(a.fancoilGroup.coolingOutput) === "number") {
                     return Number(a.fancoilGroup.coolingOutput) - Number(b.fancoilGroup.coolingOutput);
                  }
               })
               .map((item, index) => {
                  return (
                     <li className={styles.list__item} key={index}>
                        <Link className={styles.list__link} href={`${slug}/${item.fancoilGroup.model.replace(/\s|\//g, "-").toLowerCase()}`}>
                           {item.fancoilGroup.model}
                        </Link>
                     </li>
                  );
               })}
         </ul>
      </div>
   );
}
export default FancoilList;
