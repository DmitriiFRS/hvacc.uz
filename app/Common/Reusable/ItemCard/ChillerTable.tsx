import { DataInner } from "@/app/catalog/chillers/[slug]/page";
import styles from "./ItemCard.module.scss";
import Link from "next/link";
import MobileTableChillersFancoils from "./MobileTableChillersFancoils";
import ChillerList from "./ChillerList";

function Table({ el, slug }: { el: DataInner[]; slug: string }) {
   return el.length > 5 ? (
      <ChillerList el={el} slug={slug} />
   ) : (
      <div className={`${styles.main__table} ${styles.table}`}>
         <h3 className={styles.table__title}>Все модели серии {el[0].chillerGroup.name}, характеристики</h3>
         <MobileTableChillersFancoils el={el} slug={slug} />
         <div className={styles.table__body}>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Модели</div>
               {el
                  .sort((a, b): any => {
                     return +a.chillerGroup.coolingcapacity - +b.chillerGroup.coolingcapacity;
                  })
                  .map((item, index) => {
                     return (
                        <Link
                           href={`${slug}/${item.chillerGroup.model.replace(/\s|\//g, "-").toLowerCase()}`}
                           key={index}
                           className={`${styles.table__col} ${styles.table__colHeader}`}
                        >
                           {item.chillerGroup.model}
                        </Link>
                     );
                  })}
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Мощ-ть охлаждения кВт</div>
               {el.map((item, index) => {
                  return (
                     <div key={index} className={styles.table__col}>
                        {item.chillerGroup.coolingcapacity}
                     </div>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Потребл. мощ-ть охлаждения кВт</div>
               {el.map((item, index) => {
                  return (
                     <div key={index} className={styles.table__col}>
                        {item.chillerGroup.coolingpower}
                     </div>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Мощ-ть обогрева кВт</div>
               {el.map((item, index) => {
                  return (
                     <div key={index} className={styles.table__col}>
                        {item.chillerGroup.heatcapacity ? item.chillerGroup.heatcapacity : "Нет"}
                     </div>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Потребл. мощ-ть обогрева кВт</div>
               {el.map((item, index) => {
                  return (
                     <div key={index} className={styles.table__col}>
                        {item.chillerGroup.heatPower ? item.chillerGroup.heatPower : "Нет"}
                     </div>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Кол-во вентиляторов</div>
               {el.map((item, index) => {
                  return (
                     <div key={index} className={styles.table__col}>
                        {item.chillerGroup.fanQuantity ? item.chillerGroup.fanQuantity : "Нет"}
                     </div>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Кол-во компрессоров</div>
               {el.map((item, index) => {
                  return (
                     <div key={index} className={styles.table__col}>
                        {item.chillerGroup.compressorQuantity}
                     </div>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Марка фреона</div>
               {el.map((item, index) => {
                  return (
                     <div key={index} className={styles.table__col}>
                        {item.chillerGroup.freonType}
                     </div>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={`${styles.table__header} ${styles.table__lastCol}`}></div>
               {el.map((item, index) => {
                  return (
                     <Link
                        href={`${slug}/${item.chillerGroup.model.replace(/\s|\//g, "-").toLowerCase()}`}
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
