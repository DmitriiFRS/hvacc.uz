import { DataInner } from "@/app/catalog/chillers/[slug]/page";
import styles from "../ModelCard/ModelCard.module.scss";

function ModelTable({ element }: { element: DataInner }) {
   return (
      <ul className={styles.table}>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Модель блока</div>
            <div className={styles.table__param}>{element.chillerGroup.model}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Холодопроизводительность, кВт</div>
            <div className={styles.table__param}>{element.chillerGroup.coolingcapacity}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Потребляемая мощность (охлаждение, кВт)</div>
            <div className={styles.table__param}>{element.chillerGroup.coolingpower}</div>
         </li>
         {element.chillerGroup.heatcapacity && (
            <li className={styles.table__item}>
               <div className={styles.table__title}>Теплопроизводительность, кВт</div>
               <div className={styles.table__param}>{element.chillerGroup.heatcapacity}</div>
            </li>
         )}
         {element.chillerGroup.heatPower && (
            <li className={styles.table__item}>
               <div className={styles.table__title}>Потребляемая мощность (обогрев, кВт)</div>
               <div className={styles.table__param}>{element.chillerGroup.heatPower}</div>
            </li>
         )}
         {element.chillerGroup.cop && (
            <li className={styles.table__item}>
               <div className={styles.table__title}>COP</div>
               <div className={styles.table__param}>{element.chillerGroup.cop}</div>
            </li>
         )}
         <li className={styles.table__item}>
            <div className={styles.table__title}>Размер блока (Ш/В/Г, мм)</div>
            <div className={styles.table__param}>{element.chillerGroup.blockSize}</div>
         </li>
         {element.chillerGroup.compressor && (
            <li className={styles.table__item}>
               <div className={styles.table__title}>Тип компрессора</div>
               <div className={styles.table__param}>{element.chillerGroup.compressor}</div>
            </li>
         )}
         {element.chillerGroup.compressorQuantity && (
            <li className={styles.table__item}>
               <div className={styles.table__title}>Количество компрессоров</div>
               <div className={styles.table__param}>{element.chillerGroup.compressorQuantity}</div>
            </li>
         )}
         {element.chillerGroup.energyregulator && (
            <li className={styles.table__item}>
               <div className={styles.table__title}>Режим регулир. энергопотребления</div>
               <div className={styles.table__param}>{element.chillerGroup.energyregulator}</div>
            </li>
         )}
         <li className={styles.table__item}>
            <div className={styles.table__title}>Тип хладагента</div>
            <div className={styles.table__param}>{element.chillerGroup.freonType}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Количество фреона, кг</div>
            <div className={styles.table__param}>{element.chillerGroup.freon}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Подключение</div>
            <div className={styles.table__param}>{element.chillerGroup.connect}</div>
         </li>
         {element.chillerGroup.fanQuantity && (
            <li className={styles.table__item}>
               <div className={styles.table__title}>Количество вентиляторов</div>
               <div className={styles.table__param}>{element.chillerGroup.fanQuantity}</div>
            </li>
         )}
         {element.chillerGroup.liquidAmount && (
            <li className={styles.table__item}>
               <div className={styles.table__title}>Объем жидкости L</div>
               <div className={styles.table__param}>{element.chillerGroup.liquidAmount}</div>
            </li>
         )}
      </ul>
   );
}
export default ModelTable;
