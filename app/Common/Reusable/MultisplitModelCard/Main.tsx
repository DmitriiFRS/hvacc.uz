import { DataInner } from "@/app/catalog/multi-split/page";
import Image from "next/image";
import styles from "../ModelCard/ModelCard.module.scss";
import ModelTable from "./ModelTable";

type Props = {
   el: DataInner;
};

function Main({ el }: Props) {
   return (
      <div className={styles.model__body}>
         <h3 className={styles.model__title}>Мульти-сплит модель серии {el.multisplitGroup.name}</h3>
         <div className={styles.model__model}>Модель {el.multisplitGroup.model}</div>
         <div className={styles.model__inner}>
            <div className={styles.model__header}>
               <div className={styles.model__header__price}></div>
               <div className={styles.model__header__params}>Характеристики</div>
            </div>
            <div className={styles.model__main}>
               <div className={styles.model__leftSide}>
                  <div className={styles.model__imgBody}>
                     <Image src={el.multisplitGroup.image.node.sourceUrl} alt={el.multisplitGroup.model} fill style={{ objectFit: "contain" }} />
                  </div>
               </div>
               <div className={styles.model__rightSide}>
                  <ModelTable element={el} />
               </div>
            </div>
         </div>
      </div>
   );
}
export default Main;
