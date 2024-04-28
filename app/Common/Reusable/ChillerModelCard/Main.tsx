import Image from "next/image";
import styles from "../ModelCard/ModelCard.module.scss";
import { DataInner } from "@/app/catalog/chillers/[slug]/page";
import ModelTable from "./ModelTable";
import ParamsIndustrial from "../ItemCard/ParamsIndustrial";
type mainParamsInner = {
   title: string;
   subtitle: string;
};

type Props = {
   el: DataInner;
   mainParams: mainParamsInner[];
};

function Main({ el }: Props) {
   return (
      <div className={styles.model__body}>
         <h3 className={styles.model__title}>Чиллер серии {el.chillerGroup.name}</h3>
         <div className={styles.model__model}>Модель {el.chillerGroup.model}</div>
         <div className={styles.model__inner}>
            <div className={styles.model__header}>
               <div className={styles.model__header__price}></div>
               <div className={styles.model__header__params}>Характеристики</div>
            </div>
            <div className={styles.model__main}>
               <div className={styles.model__leftSide}>
                  <div className={styles.model__imgBody}>
                     <Image src={el.chillerGroup.image.node.sourceUrl} alt={el.chillerGroup.model} fill style={{ objectFit: "contain" }} />
                  </div>
                  <ParamsIndustrial
                     icon1={el.chillerGroup.mainParamIcon1.node.sourceUrl}
                     icon2={el.chillerGroup.mainParamIcon2?.node.sourceUrl}
                     description1={el.chillerGroup.mainParamText1}
                     description2={el.chillerGroup.mainParamText2}
                  />
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
