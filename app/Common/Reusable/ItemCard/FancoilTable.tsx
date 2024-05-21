import { DataInner } from "@/app/catalog/fancoils/[slug]/page";
import styles from "./ItemCard.module.scss";
import Link from "next/link";
import FancoilList from "./FancoilList";
import MobileTableChillersFancoils from "./MobileTableChillersFancoils";

function Table({ el, slug }: { el: DataInner[]; slug: string }) {
   {
      return el.length > 5 ? (
         <FancoilList el={el} slug={slug} />
      ) : (
         <div className={`${styles.main__table} ${styles.table}`}>
            <h3 className={styles.table__title}>Все модели серии {el[0].fancoilGroup.name}, характеристики</h3>
            <MobileTableChillersFancoils el={el} slug={slug} />
            <div className={styles.table__body}>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Модели</div>
                  {el.reverse().map((item, index) => {
                     return (
                        <Link
                           href={`${slug}/${item.fancoilGroup.model.replace(/\s|\//g, "-").toLowerCase()}`}
                           key={index}
                           className={`${styles.table__col} ${styles.table__colHeader}`}
                        >
                           {item.fancoilGroup.model}
                        </Link>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Холодопроизводительность (В/С/Н) kW</div>
                  {el.map((item, index) => {
                     return (
                        <div key={index} className={styles.table__col}>
                           {item.fancoilGroup.coolingOutput}
                        </div>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Теплопроизводительность (В/С/Н) kW</div>
                  {el.map((item, index) => {
                     return (
                        <div key={index} className={styles.table__col}>
                           {item.fancoilGroup.heatOutput}
                        </div>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Ко-во обрабатываемого воздуха (В/С/Н) m3/h</div>
                  {el.map((item, index) => {
                     return (
                        <div key={index} className={styles.table__col}>
                           {item.fancoilGroup.airQuantity}
                        </div>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Потребляемая мощность (В/С/Н) W</div>
                  {el.map((item, index) => {
                     return (
                        <div key={index} className={styles.table__col}>
                           {item.fancoilGroup.powerConsumption}
                        </div>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Уровень шума (В/С/Н) dB(A)</div>
                  {el.map((item, index) => {
                     return (
                        <div key={index} className={styles.table__col}>
                           {item.fancoilGroup.noiseLevel}
                        </div>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={styles.table__header}>Кол-во вентиляторов</div>
                  {el.map((item, index) => {
                     return (
                        <div key={index} className={styles.table__col}>
                           {item.fancoilGroup.fanCount}
                        </div>
                     );
                  })}
               </div>
               <div className={styles.table__row}>
                  <div className={`${styles.table__header} ${styles.table__lastCol}`}></div>
                  {el.map((item, index) => {
                     return (
                        <Link
                           href={`${slug}/${item.fancoilGroup.model.replace(/\s|\//g, "-").toLowerCase()}`}
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
export default Table;
