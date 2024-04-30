import { DataInner } from "@/app/catalog/multi-split/page";
import styles from "../ModelCard/ModelCard.module.scss";

function ModelTable({ element }: { element: DataInner }) {
   return (
      <ul className={styles.table}>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Модель блока</div>
            <div className={styles.table__param}>{element.multisplitGroup.model}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Холодопроизводительность, Btu</div>
            <div className={styles.table__param}>{element.multisplitGroup.coolingPower}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Номинальный ток (охлаждение, A)</div>
            <div className={styles.table__param}>{element.multisplitGroup.coolingNominalPower}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Теплопроизводительность, Btu</div>
            <div className={styles.table__param}>{element.multisplitGroup.heatOutput}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Номинальный ток (обогрев, A)</div>
            <div className={styles.table__param}>{element.multisplitGroup.heatNominalPower}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Подключение V/Hz/Ph</div>
            <div className={styles.table__param}>{element.multisplitGroup.connect}</div>
         </li>
         {element.multisplitGroup.eer && (
            <li className={styles.table__item}>
               <div className={styles.table__title}>EER</div>
               <div className={styles.table__param}>{element.multisplitGroup.eer}</div>
            </li>
         )}
         {element.multisplitGroup.cop && (
            <li className={styles.table__item}>
               <div className={styles.table__title}>COP</div>
               <div className={styles.table__param}>{element.multisplitGroup.cop}</div>
            </li>
         )}
      </ul>
   );
}

export default ModelTable;
