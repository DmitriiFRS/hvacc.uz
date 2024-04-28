import { OuterInnerVRF } from "../../Data/Vrf.type";
import styles from "../ModelCard/ModelCard.module.scss";

function InnerModelTable({ element }: { element: OuterInnerVRF }) {
   return (
      <ul className={styles.table}>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Модель блока</div>
            <div className={styles.table__param}>{element.vrfInnerGroup?.model}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Подключение</div>
            <div className={styles.table__param}>{element.vrfInnerGroup?.connect}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Холодопроизводительность kW</div>
            <div className={styles.table__param}>{element.vrfInnerGroup?.coolingOutput}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Потребляемая мощность (охлаждение, W)</div>
            <div className={styles.table__param}>{element.vrfInnerGroup?.coolingPowerConsumption}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Мощность обогрева kW</div>
            <div className={styles.table__param}>{element.vrfInnerGroup?.heatOutput}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Потребляемая мощность (обогрев, W)</div>
            <div className={styles.table__param}>{element.vrfInnerGroup?.heatPowerConsumption}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Объем подаваемого воздуха</div>
            <div className={`${styles.table__param} ${styles.table__param__reducedFz}`}>{element.vrfInnerGroup?.airSupply}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Уровень шума dB(A)</div>
            <div className={styles.table__param}>{element.vrfInnerGroup?.noiseLevel}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Основной блок | Габаритный размер (Д/В/Ш)</div>
            <div className={styles.table__param}>{element.vrfInnerGroup?.mainSize}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Основной блок | Вес Нетто/Брутто</div>
            <div className={styles.table__param}>{element.vrfInnerGroup?.mainWeight}</div>
         </li>
         {element.vrfInnerGroup?.panelSize && (
            <li className={styles.table__item}>
               <div className={styles.table__title}>Панель | Габаритный размер (Д/В/Ш)</div>
               <div className={styles.table__param}>{element.vrfInnerGroup.panelSize}</div>
            </li>
         )}
         {element.vrfInnerGroup?.panelWeight && (
            <li className={styles.table__item}>
               <div className={styles.table__title}>Панель | Вес Нетто/Брутто</div>
               <div className={styles.table__param}>{element.vrfInnerGroup?.panelWeight}</div>
            </li>
         )}
         {element.vrfInnerGroup?.staticPressure && (
            <li className={styles.table__item}>
               <div className={styles.table__title}>Статическое давление</div>
               <div className={styles.table__param}>{element.vrfInnerGroup?.staticPressure}</div>
            </li>
         )}
      </ul>
   );
}
export default InnerModelTable;
