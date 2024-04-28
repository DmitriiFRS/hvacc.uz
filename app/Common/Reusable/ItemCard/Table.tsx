import { AirCondSemiInner } from "@/app/Common/Data/Equip/AirCond-SemiInd.data";
import styles from "./ItemCard.module.scss";
import Link from "next/link";
import MobileTableAircondSemiInd from "./MobileTableAircondSemiInd";

function Table({ el, slug }: { el: AirCondSemiInner[]; slug: string }) {
   return (
      <div className={`${styles.main__table} ${styles.table}`}>
         <h3 className={styles.table__title}>Все модели серии {el[0].airCondGroup?.name || el[0].semiIndustrialGroup?.name} Inverter, характеристики</h3>
         <MobileTableAircondSemiInd el={el} slug={slug} />
         <div className={styles.table__body}>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Модели</div>
               {el.reverse().map((item, index) => {
                  return (
                     <Link
                        href={`${slug}/${
                           item.airCondGroup?.model.replace(/\s|\//g, "-").toLowerCase() || item.semiIndustrialGroup?.model.replace(/\s|\//g, "-").toLowerCase()
                        }`}
                        key={index}
                        className={`${styles.table__col} ${styles.table__colHeader}`}
                     >
                        {item.airCondGroup?.model || item.semiIndustrialGroup?.model}
                     </Link>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Мощ-ть охлаждения Btu</div>
               {el.map((item, index) => {
                  return (
                     <div key={index} className={styles.table__col}>
                        {item.airCondGroup?.coolingOutput || item.semiIndustrialGroup?.coolingOutput}
                     </div>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Мощ-ть обогрева Btu</div>
               {el.map((item, index) => {
                  return (
                     <div key={index} className={styles.table__col}>
                        {item.airCondGroup?.heatOutput || item.semiIndustrialGroup?.heatOutput}
                     </div>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Обслуж. м2 до</div>
               {el.map((item, index) => {
                  return (
                     <div key={index} className={styles.table__col}>
                        {item.airCondGroup?.m2 || item.semiIndustrialGroup?.m2}
                     </div>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Обслуж. м3 до</div>
               {el.map((item, index) => {
                  return (
                     <div key={index} className={styles.table__col}>
                        {item.airCondGroup?.m3 || item.semiIndustrialGroup?.m3}
                     </div>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Цена: UZS</div>
               {el.map((item, index) => {
                  return (
                     <div key={index} className={`${styles.table__col} ${styles.table__col__price}`}>
                        {item.airCondGroup?.price || item.semiIndustrialGroup?.price}
                     </div>
                  );
               })}
            </div>
            <div className={styles.table__row}>
               <div className={`${styles.table__header} ${styles.table__lastCol}`}></div>
               {el.map((item, index) => {
                  return (
                     <Link
                        href={`${slug}/${
                           item.airCondGroup?.model.replace(/\s|\//g, "-").toLowerCase() || item.semiIndustrialGroup?.model.replace(/\s|\//g, "-").toLowerCase()
                        }`}
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
