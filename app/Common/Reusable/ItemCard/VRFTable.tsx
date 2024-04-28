import { DataInner } from "@/app/catalog/vrf/outer/[slug]/page";
import styles from "./ItemCard.module.scss";
import Link from "next/link";
import VRFList from "./VRFList";

function VRFTable({ el, slug }: { el: DataInner[]; slug: string }) {
   {
      return el.length > 5 ? (
         <VRFList el={el} slug={slug} />
      ) : (
         <div className={`${styles.main__table} ${styles.table}`}>
            <h3 className={styles.table__title}>Все модели серии {el[0].vrfGroup.name}, характеристики</h3>
            <div className={styles.table__body}>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Модели</div>
                  {el.map((item, index) => {
                     return (
                        <Link
                           href={`${slug}/${item.vrfGroup.model.replace(/\s|\//g, "-").toLowerCase()}`}
                           key={index}
                           className={`${styles.table__col} ${styles.table__colHeader}`}
                        >
                           {item.vrfGroup.model}
                        </Link>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Холодопроизводительность kW</div>
                  {el.map((item, index) => {
                     return (
                        <div key={index} className={styles.table__col}>
                           {item.vrfGroup.coolingOutput}
                        </div>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Теплопроизводительность kW</div>
                  {el.map((item, index) => {
                     return (
                        <div key={index} className={styles.table__col}>
                           {item.vrfGroup.heatOutput}
                        </div>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Потребляемая мощность (охлаждение, kW)</div>
                  {el.map((item, index) => {
                     return (
                        <div key={index} className={styles.table__col}>
                           {item.vrfGroup.coolingPowerConsumption}
                        </div>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Потребляемая мощность (обогрев, kW)</div>
                  {el.map((item, index) => {
                     return (
                        <div key={index} className={styles.table__col}>
                           {item.vrfGroup.heatPowerConsumption}
                        </div>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Количество компрессоров</div>
                  {el.map((item, index) => {
                     return (
                        <div key={index} className={styles.table__col}>
                           {item.vrfGroup.compressorQuantity}
                        </div>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Количество вентиляторов</div>
                  {el.map((item, index) => {
                     return (
                        <div key={index} className={styles.table__col}>
                           {item.vrfGroup.fanQuantity}
                        </div>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={`${styles.table__header} ${styles.table__lastCol}`}></div>
                  {el.map((item, index) => {
                     return (
                        <Link
                           href={`${slug}/${item.vrfGroup.model.replace(/\s|\//g, "-").toLowerCase()}`}
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
}
export default VRFTable;
