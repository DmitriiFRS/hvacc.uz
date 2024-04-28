import { AirCondSemiInner } from "../../Data/Equip/AirCond-SemiInd.data";
import MainParams from "./MainParams";
import styles from "./ModelCard.module.scss";
import Image from "next/image";
import ModelTable from "./ModelTable";
import LeftSideAircondSemiInd from "./LeftSideAircondSemiInd";

type mainParamsInner = {
   title: string;
   subtitle: string;
};

type Props = {
   el: AirCondSemiInner;
   mainParams: mainParamsInner[];
};

function Main({ el, mainParams }: Props) {
   return (
      <div className={styles.model__body}>
         <h3 className={styles.model__title}>Инверторный кондиционер {el.airCondGroup?.name || el.semiIndustrialGroup?.name}</h3>
         <div className={styles.model__model}>Модель {el.airCondGroup?.model || el.semiIndustrialGroup?.model}</div>
         <div className={styles.model__inner}>
            <div className={styles.model__header}>
               <div className={styles.model__header__price}>
                  Стоимость модели: <span>{el.airCondGroup?.price || el.semiIndustrialGroup?.price} UZS</span>
               </div>
               <div className={styles.model__header__params}>Характеристики</div>
            </div>
            <div className={styles.model__main}>
               <LeftSideAircondSemiInd el={el} mainParams={mainParams} />
               <div className={styles.model__rightSide}>
                  <ModelTable element={el} />
               </div>
            </div>
         </div>
      </div>
   );
}
export default Main;
