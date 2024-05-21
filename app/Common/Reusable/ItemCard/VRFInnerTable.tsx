import styles from "./ItemCard.module.scss";
import Link from "next/link";
import VRFList from "./VRFList";
import { OuterInnerVRF } from "../../Data/Vrf.type";
import MobileTableVRFInner from "./MobileTableVRFInner";

function VRFTable({ el, slug }: { el: OuterInnerVRF[]; slug: string }) {
   {
      return el.length > 5 ? (
         <VRFList el={el} slug={slug} />
      ) : (
         <div className={`${styles.main__table} ${styles.table}`}>
            <h3 className={styles.table__title}>Все модели серии {el[0].vrfInnerGroup?.name}, характеристики</h3>
            <MobileTableVRFInner el={el} slug={slug} />
            <div className={styles.table__body}>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Модели</div>
                  {el.map((item, index) => {
                     return (
                        <Link
                           href={`${slug}/${item.vrfInnerGroup?.model.replace(/\s|\//g, "-").toLowerCase()}`}
                           key={index}
                           className={`${styles.table__col} ${styles.table__colHeader}`}
                        >
                           {item.vrfInnerGroup?.model}
                        </Link>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Холодопроизводительность kW</div>
                  {el.map((item, index) => {
                     return (
                        <div key={index} className={styles.table__col}>
                           {item.vrfInnerGroup?.coolingOutput}
                        </div>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Теплопроизводительность kW</div>
                  {el.map((item, index) => {
                     return (
                        <div key={index} className={styles.table__col}>
                           {item.vrfInnerGroup?.heatOutput}
                        </div>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Потребляемая мощность (охлаждение, kW)</div>
                  {el.map((item, index) => {
                     return (
                        <div key={index} className={styles.table__col}>
                           {item.vrfInnerGroup?.coolingPowerConsumption}
                        </div>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Потребляемая мощность (обогрев, kW)</div>
                  {el.map((item, index) => {
                     return (
                        <div key={index} className={styles.table__col}>
                           {item.vrfInnerGroup?.heatPowerConsumption}
                        </div>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={`${styles.table__header} ${styles.table__lastCol}`}></div>
                  {el.map((item, index) => {
                     return (
                        <Link
                           href={`${slug}/${item.vrfInnerGroup?.model.replace(/\s|\//g, "-").toLowerCase()}`}
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
