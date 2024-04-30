import styles from "./ItemCard.module.scss";
import Link from "next/link";
import { DataInner } from "@/app/catalog/multi-split/page";
import MobileTableMultisplit from "./MobileTableMultisplit";
import MultisplitList from "./MultisplitList";

function Table({ el, slug }: { el: DataInner[]; slug: string }) {
   return el.length > 4 ? (
      <MultisplitList el={el} slug={slug} />
   ) : (
      <div className={`${styles.main__table} ${styles.table}`}>
         <h3 className={styles.table__title}>Все модели {el[0].multisplitGroup.name}, характеристики</h3>
         <MobileTableMultisplit el={el} slug={slug} />
         <div className={styles.table__body}>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Модели</div>
               {el.reverse().map((item, index) => {
                  return (
                     <Link
                        href={`${slug}/${item.multisplitGroup.model.replace(/\s|\//g, "-").toLowerCase()}`}
                        key={index}
                        className={`${styles.table__col} ${styles.table__colHeader}`}
                     >
                        {item.multisplitGroup.model}
                     </Link>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Мощ-ть охлаждения Btu</div>
               {el.map((item, index) => {
                  return (
                     <div key={index} className={styles.table__col}>
                        {item.multisplitGroup.coolingPower}
                     </div>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Мощ-ть обогрева Btu</div>
               {el.map((item, index) => {
                  return (
                     <div key={index} className={styles.table__col}>
                        {item.multisplitGroup.heatOutput}
                     </div>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Номинальный ток (охлаждение, A)</div>
               {el.map((item, index) => {
                  return (
                     <div key={index} className={styles.table__col}>
                        {item.multisplitGroup.coolingNominalPower}
                     </div>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Номинальный ток (обогрев, A)</div>
               {el.map((item, index) => {
                  return (
                     <div key={index} className={styles.table__col}>
                        {item.multisplitGroup.heatNominalPower}
                     </div>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Подключение V/Hz/Ph</div>
               {el.map((item, index) => {
                  return (
                     <div key={index} className={styles.table__col}>
                        {item.multisplitGroup.connect}
                     </div>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={`${styles.table__header} ${styles.table__lastCol}`}></div>
               {el.map((item, index) => {
                  return (
                     <Link
                        href={`${slug}/${item.multisplitGroup.model.replace(/\s|\//g, "-").toLowerCase()}`}
                        key={index}
                        className={`${styles.table__col} ${styles.table__lastCol}`}
                     >
                        Подробнее
                     </Link>
                  );
               })}
            </div>
         </div>
      </div>
   );
}
export default Table;
