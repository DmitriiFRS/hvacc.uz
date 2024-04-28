import { DataInner } from "@/app/catalog/fancoils/[slug]/page";
import styles from "../ModelCard/ModelCard.module.scss";
import Image from "next/image";
import ModelTable from "./ModelTable";
import ParamsIndustrial from "../ItemCard/ParamsIndustrial";

type Props = {
   el: DataInner;
};

function Main({ el }: Props) {
   return (
      <div className={styles.model__body}>
         <h3 className={styles.model__title}>{el.fancoilGroup.name}</h3>
         <div className={styles.model__model}>Модель {el.fancoilGroup.model}</div>
         <div className={styles.model__inner}>
            <div className={styles.model__header}>
               <div className={styles.model__header__price}></div>
               <div className={styles.model__header__params}>Характеристики</div>
            </div>
            <div className={styles.model__main}>
               <div className={styles.model__leftSide}>
                  <div className={styles.model__imgBody}>
                     <Image src={el.fancoilGroup.image.node.sourceUrl} alt={el.fancoilGroup.model} fill style={{ objectFit: "contain" }} />
                  </div>
                  <ParamsIndustrial
                     icon1={el.fancoilGroup.mainParamIcon1.node.sourceUrl}
                     icon2={el.fancoilGroup.mainParamIcon2?.node.sourceUrl}
                     description1={el.fancoilGroup.mainParamText1}
                     description2={el.fancoilGroup.mainParamText2}
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
