import { DataInner } from "@/app/catalog/fancoils/[slug]/page";
import styles from "../ModelCard/ModelCard.module.scss";

function ModelTable({ element }: { element: DataInner }) {
   return (
      <ul className={styles.table}>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Модель блока</div>
            <div className={styles.table__param}>{element.fancoilGroup.model}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Подключение V/Ph/Hz</div>
            <div className={styles.table__param}>{element.fancoilGroup.connect}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Количество обрабатываемого воздуха (В/С/Н) m3/h</div>
            <div className={styles.table__param}>{element.fancoilGroup.airQuantity}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Холодопроизводительность (В/С/Н) kW</div>
            <div className={styles.table__param}>{element.fancoilGroup.coolingOutput}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Пропускная способность L/h</div>
            <div className={styles.table__param}>{element.fancoilGroup.throughputCapacity}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Теплопроизводительность (В/С/Н) kW</div>
            <div className={styles.table__param}>{element.fancoilGroup.heatOutput}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Потребляемая мощность (В/С/Н) W</div>
            <div className={styles.table__param}>{element.fancoilGroup.powerConsumption}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Уровень шума (В/С/Н) dB(A)</div>
            <div className={styles.table__param}>{element.fancoilGroup.noiseLevel}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Тип двигателя вентилятора</div>
            <div className={styles.table__param}>{element.fancoilGroup.fanEngine}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Количество вентиляторов</div>
            <div className={styles.table__param}>{element.fancoilGroup.fanCount}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Тип вентилятора</div>
            <div className={styles.table__param}>{element.fancoilGroup.fanType}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Макс раб. давление теплообменника MPa</div>
            <div className={styles.table__param}>{element.fancoilGroup.pressureHeatExchanger}</div>
         </li>

         {element.fancoilGroup.panelSize && (
            <li className={styles.table__item}>
               <div className={styles.table__title}>Размер панели Д/В/Ш</div>
               <div className={styles.table__param}>{element.fancoilGroup.panelSize}</div>
            </li>
         )}
         {element.fancoilGroup.panelWeight && (
            <li className={styles.table__item}>
               <div className={styles.table__title}>Масса панели kg</div>
               <div className={styles.table__param}>{element.fancoilGroup.panelWeight}</div>
            </li>
         )}
         <li className={styles.table__item}>
            <div className={styles.table__title}>Размер корпуса Д/В/Ш</div>
            <div className={styles.table__param}>{element.fancoilGroup.bodySize}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Масса корпуса kg</div>
            <div className={styles.table__param}>{element.fancoilGroup.bodyWeight}</div>
         </li>
      </ul>
   );
}
export default ModelTable;
