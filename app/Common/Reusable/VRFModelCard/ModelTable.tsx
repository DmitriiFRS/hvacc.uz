import styles from "../ModelCard/ModelCard.module.scss";
import { OuterInnerVRF } from "../../Data/Vrf.type";

function ModelTable({ element }: { element: OuterInnerVRF }) {
   return (
      <ul className={styles.table}>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Модель блока</div>
            <div className={styles.table__param}>{element.vrfGroup?.model}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Подключение V/Ph/Hz</div>
            <div className={styles.table__param}>{element.vrfGroup?.connect}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Холодопроизводительность kW</div>
            <div className={styles.table__param}>{element.vrfGroup?.coolingOutput}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Потребляемая мощность (охлаждение, kW)</div>
            <div className={styles.table__param}>{element.vrfGroup?.coolingPowerConsumption}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Мощность обогрева kW</div>
            <div className={styles.table__param}>{element.vrfGroup?.heatOutput}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Потребляемая мощность (обогрев, kW)</div>
            <div className={styles.table__param}>{element.vrfGroup?.heatPowerConsumption}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>EER</div>
            <div className={styles.table__param}>{element.vrfGroup?.eer}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>COP</div>
            <div className={styles.table__param}>{element.vrfGroup?.cop}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Макс. кол-во подключаемых внутр. блоков</div>
            <div className={styles.table__param}>{element.vrfGroup?.maxInnerBlocks}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Компрессор</div>
            <div className={styles.table__param}>{element.vrfGroup?.compressor}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Количество компрессоров</div>
            <div className={styles.table__param}>{element.vrfGroup?.compressorQuantity}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Количество вентиляторов</div>
            <div className={styles.table__param}>{element.vrfGroup?.fanQuantity}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Тип хладагента</div>
            <div className={styles.table__param}>{element.vrfGroup?.freonType}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Воздушный поток m3/h</div>
            <div className={styles.table__param}>{element.vrfGroup?.airFlow}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Уровень шума dB(A)</div>
            <div className={styles.table__param}>{element.vrfGroup?.noiseLevel}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Размер (Д/В/Ш) mm</div>
            <div className={styles.table__param}>{element.vrfGroup?.size}</div>
         </li>
         <li className={styles.table__item}>
            <div className={styles.table__title}>Вес, кг</div>
            <div className={styles.table__param}>{element.vrfGroup?.weight}</div>
         </li>
      </ul>
   );
}
export default ModelTable;
