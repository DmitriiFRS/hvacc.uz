import { AirCondSemiInner } from "../../Data/Equip/AirCond-SemiInd.data";
import styles from "./ModelCard.module.scss";

function ModelTable({ element }: { element: AirCondSemiInner }) {
   return (
      <ul className={styles.table}>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Модель блока</div>
            <div className={styles.table__param}>{element.airCondGroup?.model || element.semiIndustrialGroup?.model}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Мощность охлаждения Btu/h</div>
            <div className={styles.table__param}>{element.airCondGroup?.coolingOutput || element.semiIndustrialGroup?.coolingOutput}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Мощность обогрева Btu/h</div>
            <div className={styles.table__param}>{element.airCondGroup?.heatOutput || element.semiIndustrialGroup?.heatOutput}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Расход электричества kW</div>
            <div className={styles.table__param}>{element.airCondGroup?.energyOutput || element.semiIndustrialGroup?.energyOutput}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Обслуживаемая площадь m2</div>
            <div className={styles.table__param}>{element.airCondGroup?.m2 || element.semiIndustrialGroup?.m2}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Обслуживаемая площадь m3</div>
            <div className={styles.table__param}>{element.airCondGroup?.m3 || element.semiIndustrialGroup?.m3}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Кол-во (g) / марка фреона</div>
            <div className={styles.table__param}>{element.airCondGroup?.freon || element.semiIndustrialGroup?.freon}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Размер внутреннего блока (mm)</div>
            <div className={styles.table__param}>{element.airCondGroup?.innerBlock || element.semiIndustrialGroup?.innerBlock}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Размер внешнего блока (mm)</div>
            <div className={styles.table__param}>{element.airCondGroup?.outerBlock || element.semiIndustrialGroup?.outerBlock}</div>
         </li>
         {element.semiIndustrialGroup?.panelSize && (
            <li className={styles.table__item}>
               <div className={styles.table__title}>Размер панели (mm)</div>
               <div className={styles.table__param}>{element.semiIndustrialGroup.panelSize}</div>
            </li>
         )}
         <li className={styles.table__item}>
            <div className={styles.table__title}>Расход воздуха max. (m3/h)</div>
            <div className={styles.table__param}>{element.airCondGroup?.airOutput || element.semiIndustrialGroup?.airOutput}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Уровень шума внутреннего блока(dB) от</div>
            <div className={styles.table__param}>{element.airCondGroup?.noiseInnerdb || element.semiIndustrialGroup?.noiseInnerdb}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Уровень шума внешнего блока(dB) от</div>
            <div className={styles.table__param}>{element.airCondGroup?.noiseOuterdb || element.semiIndustrialGroup?.noiseOuterdb}</div>
         </li>
         {element.semiIndustrialGroup?.pathLength && (
            <li className={styles.table__item}>
               <div className={styles.table__title}>Длина трассы (м)</div>
               <div className={styles.table__param}>{element.semiIndustrialGroup.pathLength}</div>
            </li>
         )}
         <li className={styles.table__item}>
            <div className={styles.table__title}>Вес внутреннего блока (kg)</div>
            <div className={styles.table__param}>{element.airCondGroup?.weightInner || element.semiIndustrialGroup?.weightInner}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Вес внешнего блока (kg)</div>
            <div className={styles.table__param}>{element.airCondGroup?.weightOuter || element.semiIndustrialGroup?.weightOuter}</div>
         </li>
      </ul>
   );
}
export default ModelTable;
